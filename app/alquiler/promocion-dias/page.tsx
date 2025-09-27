'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface CompleteRentalData {
  equipos: number;
  dias: number;
  serviceType: string;
  totalEstimado: number;
  serviceName: string;
  serviceMultiplier: number;
  contacto: {
    nombre: string;
    email: string;
    telefono: string;
    empresa: string;
  };
}

const BASE_PRICE = 35000;
const DESCUENTO_DIAS_ADICIONALES = 0.02; // 2% de descuento sobre los días adicionales

export default function PromocionDiasPage() {
  const router = useRouter();
  const [completeData, setCompleteData] = useState<CompleteRentalData | null>(null);
  const [diasAdicionales, setDiasAdicionales] = useState<number>(0);
  const [totalConDescuento, setTotalConDescuento] = useState<number>(0);

  // Cargar datos completos desde sessionStorage
  useEffect(() => {
    const savedCompleteData = sessionStorage.getItem('completeRentalData');
    if (savedCompleteData) {
      setCompleteData(JSON.parse(savedCompleteData));
    } else {
      // Si no hay datos, redirigir al inicio
      router.push('/alquiler');
    }
  }, [router]);

  // Calcular total con descuento
  useEffect(() => {
    if (completeData && diasAdicionales > 0) {
      // Costo de los días adicionales sin descuento
      const costoAdicional = completeData.equipos * diasAdicionales * BASE_PRICE * completeData.serviceMultiplier;
      // Aplicar 2% de descuento SOLO a los días adicionales
      const descuentoSobreDiasAdicionales = costoAdicional * DESCUENTO_DIAS_ADICIONALES;
      const costoAdicionalConDescuento = costoAdicional - descuentoSobreDiasAdicionales;
      // Total = alquiler original + días adicionales con descuento
      setTotalConDescuento(completeData.totalEstimado + costoAdicionalConDescuento);
    } else if (completeData) {
      setTotalConDescuento(completeData.totalEstimado);
    }
  }, [completeData, diasAdicionales]);

  // Formatear precio en pesos colombianos
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleDiasChange = (increment: boolean) => {
    setDiasAdicionales(prev => {
      const newValue = increment ? prev + 1 : prev - 1;
      return Math.max(0, Math.min(30, newValue)); // Máximo 30 días adicionales
    });
  };

  const handleAprovecharOferta = () => {
    if (completeData) {
      // Actualizar datos con días adicionales
      const finalData = {
        ...completeData,
        diasAdicionales,
        totalFinal: totalConDescuento,
        descuentoAplicado: diasAdicionales > 0 ? (completeData.equipos * diasAdicionales * BASE_PRICE * completeData.serviceMultiplier) * DESCUENTO_DIAS_ADICIONALES : 0
      };
      
      sessionStorage.setItem('finalRentalData', JSON.stringify(finalData));
      router.push('/alquiler/factura');
    }
  };

  const handleContinuarSinDias = () => {
    if (completeData) {
      // Continuar sin días adicionales
      const finalData = {
        ...completeData,
        diasAdicionales: 0,
        totalFinal: completeData.totalEstimado,
        descuentoAplicado: 0
      };
      
      sessionStorage.setItem('finalRentalData', JSON.stringify(finalData));
      router.push('/alquiler/factura');
    }
  };

  if (!completeData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando promoción...</p>
        </div>
      </div>
    );
  }

  const ahorroTotal = diasAdicionales > 0 ? (completeData.equipos * diasAdicionales * BASE_PRICE * completeData.serviceMultiplier) * DESCUENTO_DIAS_ADICIONALES : 0;
  const costoSinDescuento = completeData.totalEstimado + (completeData.equipos * diasAdicionales * BASE_PRICE * completeData.serviceMultiplier);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="flex min-h-screen flex-1">
        
        {/* Left Side - Resumen del Alquiler */}
        <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-600 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-32 right-16 w-24 h-24 bg-white/5 rounded-full"></div>
            <div className="absolute top-1/2 right-32 w-16 h-16 bg-white/10 rounded-lg transform rotate-45"></div>
            <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-300/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-yellow-300/15 rounded-full animate-pulse delay-1000"></div>
          </div>
          
          {/* Promoción Header */}
          <div className="relative z-10 text-center max-w-md">
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🎉</div>
                <h1 className="text-4xl font-bold text-white mb-2">¡Oferta Especial!</h1>
                <p className="text-orange-100 text-lg">Extiende tu alquiler y ahorra</p>
                <div className="bg-yellow-400 text-orange-900 px-4 py-2 rounded-full font-bold text-lg mt-4 inline-block">
                  2% de descuento en días adicionales
                </div>
              </div>
              
              <div className="space-y-3 text-left bg-white/10 rounded-xl p-4">
                <h3 className="text-white font-semibold text-lg mb-3">Tu alquiler actual:</h3>
                
                <div className="flex justify-between items-center py-1">
                  <span className="text-orange-100">Cliente:</span>
                  <span className="text-white font-medium text-sm">{completeData.contacto.nombre}</span>
                </div>
                
                <div className="flex justify-between items-center py-1">
                  <span className="text-orange-100">Equipos:</span>
                  <span className="text-white font-semibold">{completeData.equipos}</span>
                </div>
                
                <div className="flex justify-between items-center py-1">
                  <span className="text-orange-100">Días iniciales:</span>
                  <span className="text-white font-semibold">{completeData.dias}</span>
                </div>
                
                <div className="flex justify-between items-center py-1">
                  <span className="text-orange-100">Servicio:</span>
                  <span className="text-white font-medium text-sm">{completeData.serviceName}</span>
                </div>
                
                <div className="border-t border-white/20 pt-3 mt-3">
                  {diasAdicionales > 0 ? (
                    <div className="space-y-2">
                      {/* Total de antes */}
                      <div className="flex justify-between items-center">
                        <span className="text-orange-100">Total de antes:</span>
                        <span className="text-white font-medium">{formatPrice(completeData.totalEstimado)}</span>
                      </div>
                      
                      {/* Total días adicionales */}
                      <div className="flex justify-between items-center">
                        <span className="text-orange-100">Total días adicionales:</span>
                        <span className="text-white font-medium">{formatPrice(totalConDescuento - completeData.totalEstimado)}</span>
                      </div>
                      
                      {/* Línea separadora */}
                      <div className="border-t border-white/30 pt-2">
                        <div className="flex justify-between items-center">
                          <span className="text-orange-100 font-bold text-lg">Total:</span>
                          <span className="text-white font-bold text-xl">{formatPrice(totalConDescuento)}</span>
                        </div>
                        {ahorroTotal > 0 && (
                          <p className="text-orange-200 text-xs mt-1 text-right">
                            (Con 2% descuento en días adicionales)
                          </p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center">
                      <span className="text-orange-100 font-medium">Total actual:</span>
                      <span className="text-white font-bold text-lg">{formatPrice(completeData.totalEstimado)}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Selector de Días Adicionales */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-2xl">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-orange-200">
              
              {/* Header promocional */}
              <div className="text-center mb-8">
                <div className="text-4xl mb-2">⏰</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  ¿Necesitas más tiempo?
                </h2>
                <p className="text-gray-600 text-lg">
                  Agrega días adicionales y <span className="text-orange-600 font-bold">ahorra 2% en esos días</span>
                </p>
              </div>

              {/* Selector de días */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 mb-6">
                <label className="block text-lg font-bold text-gray-800 mb-4 text-center">
                  Días adicionales
                </label>
                
                <div className="flex items-center justify-center gap-4 mb-4">
                  <button 
                    onClick={() => handleDiasChange(false)}
                    disabled={diasAdicionales <= 0}
                    className="w-12 h-12 bg-orange-100 hover:bg-orange-200 rounded-lg flex items-center justify-center font-bold text-orange-700 hover:text-orange-800 transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-xl"
                  >
                    -
                  </button>
                  
                  <div className="bg-white border-4 border-orange-300 rounded-xl px-8 py-4 min-w-[120px] text-center">
                    <span className="text-4xl font-bold text-orange-600">{diasAdicionales}</span>
                    <p className="text-sm text-gray-600 mt-1">días</p>
                  </div>
                  
                  <button 
                    onClick={() => handleDiasChange(true)}
                    disabled={diasAdicionales >= 30}
                    className="w-12 h-12 bg-orange-100 hover:bg-orange-200 rounded-lg flex items-center justify-center font-bold text-orange-700 hover:text-orange-800 transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-xl"
                  >
                    +
                  </button>
                </div>
                
                <p className="text-center text-sm text-gray-500">Máximo 30 días adicionales</p>
              </div>

              {/* Cálculo de ahorro */}
              {/* {diasAdicionales > 0 && (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-green-800 mb-4 text-center">💰 ¡Tu ahorro!</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-green-700">Costo sin descuento:</span>
                      <span className="font-semibold text-green-800">{formatPrice(costoSinDescuento)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-green-700">Descuento (2% en días adicionales):</span>
                      <span className="font-semibold text-green-600">-{formatPrice(ahorroTotal)}</span>
                    </div>
                    
                    <div className="border-t-2 border-green-300 pt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-green-800 font-bold text-lg">Total final:</span>
                        <span className="font-bold text-2xl text-green-600">{formatPrice(totalConDescuento)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )} */}

              {/* Botones de acción */}
              <div className="space-y-4">
                {diasAdicionales > 0 ? (
                  <button 
                    onClick={handleAprovecharOferta}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    🎉 ¡Aprovechar Oferta! - Ahorras {formatPrice(ahorroTotal)}
                  </button>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-gray-500 mb-4">Selecciona días adicionales para ver tu descuento</p>
                  </div>
                )}
                
                <button 
                  onClick={handleContinuarSinDias}
                  className="w-full border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-xl font-semibold transition-colors duration-200"
                >
                  Continuar sin días adicionales
                </button>
              </div>
              
              {/* Mensaje promocional */}
              <div className="mt-6 text-center">
                <p className="text-sm text-orange-600 font-medium">
                  ⚡ Oferta por tiempo limitado - Solo disponible ahora
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
