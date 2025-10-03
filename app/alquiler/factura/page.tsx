'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface FinalRentalData {
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
  diasAdicionales: number;
  totalFinal: number;
  descuentoAplicado: number;
}

const BASE_PRICE = 35000;

export default function FacturaPage() {
  const router = useRouter();
  const [finalData, setFinalData] = useState<FinalRentalData | null>(null);
  const [customerID, setCustomerID] = useState<string>('');

  // Cargar datos finales desde sessionStorage
  useEffect(() => {
    const savedFinalData = sessionStorage.getItem('finalRentalData');
    if (savedFinalData) {
      const data = JSON.parse(savedFinalData);
      setFinalData(data);
      
      // Generar ID de cliente automático
      const id = `APC-${Date.now().toString().slice(-6)}`;
      setCustomerID(id);
    } else {
      // Si no hay datos, redirigir al inicio
      router.push('/alquiler');
    }
  }, [router]);

  // Formatear precio en pesos colombianos
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  // Formatear fecha
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleNuevoAlquiler = () => {
    // Limpiar todos los datos y volver al inicio
    sessionStorage.removeItem('rentalData');
    sessionStorage.removeItem('completeRentalData');
    sessionStorage.removeItem('finalRentalData');
    router.push('/alquiler');
  };

  const handleDescargarFactura = () => {
    // Aquí se implementaría la descarga del PDF
    alert('Funcionalidad de descarga en desarrollo. La factura se enviará por email.');
  };

  if (!finalData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Generando factura...</p>
        </div>
      </div>
    );
  }

  const fechaActual = new Date();
  const subtotalInicial = finalData.equipos * finalData.dias * BASE_PRICE;
  const ajusteServicio = subtotalInicial * (finalData.serviceMultiplier - 1);
  const totalInicial = subtotalInicial + ajusteServicio;
  
  const subtotalDiasAdicionales = finalData.diasAdicionales > 0 
    ? finalData.equipos * finalData.diasAdicionales * BASE_PRICE * finalData.serviceMultiplier
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex flex-col">
      
      {/* Encabezado de la factura - Pantalla completa */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          
          {/* Logo y datos de ALQUIPC */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <div className="flex flex-col items-center">
                <div className="w-8 h-6 bg-blue-600 rounded-lg mb-1 opacity-90"></div>
                <div className="w-10 h-1.5 bg-blue-600/70 rounded-full"></div>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold">ALQUIPC</h1>
              <p className="text-blue-100">Alquiler de Equipos de Cómputo</p>
              <p className="text-blue-200 text-sm mt-1">
                📧 contacto@alquipc.com | 📱 +57 300 123 4567
              </p>
            </div>
          </div>
          
          {/* Información de la factura */}
          <div className="text-right flex-1">
            <h2 className="text-2xl font-bold mb-2">FACTURA DIGITAL</h2>
            <div className="flex flex-col justify-end items-end gap-2">
              <div className="bg-white/10 rounded-lg px-3 gap-2 py-1 backdrop-blur-sm max-h-28 max-w-96 flex items-center justify-between">
                <p className="text-blue-100 text-sm">ID Cliente:</p>
                <p className="font-medium text-lg">{customerID}</p>
              </div>
              <div className="bg-white/10 rounded-lg px-3 gap-2 py-1 backdrop-blur-sm max-h-28 max-w-96 flex items-center justify-between">
                <p className="text-blue-100 text-sm">Fecha:</p>
                <p className="font-medium">{formatDate(fechaActual)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal - Pantalla completa */}
      <div className="flex-1 bg-white">
        <div className="max-w-7xl mx-auto p-6 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
            
            {/* Columna 1: Datos del Cliente */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="text-lg font-bold text-blue-800 mb-3">📋 Cliente</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-gray-600">Nombre:</p>
                  <p className="font-semibold text-gray-800">{finalData.contacto.nombre}</p>
                </div>
                <div>
                  <p className="text-gray-600">Email:</p>
                  <p className="font-semibold text-gray-800">{finalData.contacto.email}</p>
                </div>
                {finalData.contacto.telefono && (
                  <div>
                    <p className="text-gray-600">Teléfono:</p>
                    <p className="font-semibold text-gray-800">{finalData.contacto.telefono}</p>
                  </div>
                )}
                {finalData.contacto.empresa && (
                  <div>
                    <p className="text-gray-600">Empresa:</p>
                    <p className="font-semibold text-gray-800">{finalData.contacto.empresa}</p>
                  </div>
                )}
              </div>
              
              {/* Términos compactos */}
              <div className="mt-4 pt-3 border-t border-blue-200">
                <h4 className="font-semibold text-blue-800 text-sm mb-2">📋 Términos</h4>
                <ul className="text-xs text-gray-600 space-y-0.5">
                  <li>• Equipos en mismas condiciones</li>
                  <li>• Soporte técnico incluido</li>
                  <li>• Factura válida 30 días</li>
                </ul>
              </div>
            </div>

            {/* Columna 2: Detalle del Alquiler */}
            <div className="space-y-3">
              
              {/* Alquiler inicial */}
              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="font-semibold text-indigo-800 mb-3 text-sm">💻 Alquiler Inicial</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-indigo-700">{finalData.equipos} equipos × {finalData.dias} días</span>
                    <span className="font-semibold text-indigo-800">{formatPrice(subtotalInicial)}</span>
                  </div>
                  
                  {ajusteServicio !== 0 && (
                    <div className="flex justify-between">
                      <span className="text-indigo-700">Servicio ({finalData.serviceName})</span>
                      <span className={`font-semibold ${ajusteServicio > 0 ? 'text-orange-600' : 'text-green-600'}`}>
                        {ajusteServicio > 0 ? '+' : ''}{formatPrice(ajusteServicio)}
                      </span>
                    </div>
                  )}
                  
                  <div className="border-t border-indigo-200 pt-2">
                    <div className="flex justify-between font-semibold">
                      <span className="text-indigo-800">Subtotal:</span>
                      <span className="text-indigo-800">{formatPrice(totalInicial)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Días adicionales */}
              {finalData.diasAdicionales > 0 && (
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-3 text-sm">⏰ Días Adicionales</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-green-700">{finalData.equipos} equipos × {finalData.diasAdicionales} días</span>
                      <span className="font-semibold text-green-800">{formatPrice(subtotalDiasAdicionales)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-green-700">Descuento 2%</span>
                      <span className="font-semibold text-green-600">-{formatPrice(finalData.descuentoAplicado)}</span>
                    </div>
                    
                    <div className="border-t border-green-200 pt-2">
                      <div className="flex justify-between font-semibold">
                        <span className="text-green-800">Subtotal:</span>
                        <span className="text-green-800">{formatPrice(subtotalDiasAdicionales - finalData.descuentoAplicado)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Columna 3: Total y Acciones */}
            <div className="space-y-4">
              
              {/* Total final */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg p-4">
                <div className="text-center">
                  <p className="text-blue-200 text-sm mb-1">TOTAL A PAGAR</p>
                  <p className="text-2xl font-bold">{formatPrice(finalData.totalFinal)}</p>
                  <p className="text-blue-200 text-xs mt-2">💳 Factura digital</p>
                </div>
              </div>
              
              {/* Soporte */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">📞 Soporte</h4>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>📧 soporte@alquipc.com</p>
                  <p>📱 +57 300 123 4567</p>
                  <p>🕒 Lun-Vie 8:00 AM - 6:00 PM</p>
                </div>
              </div>
              
              {/* Botones de acción */}
              <div className="space-y-2">
                <button 
                  onClick={handleDescargarFactura}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-200 text-sm"
                >
                  📄 Descargar PDF
                </button>
                
                <button 
                  onClick={handleNuevoAlquiler}
                  className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-2 px-4 rounded-lg font-semibold transition-colors duration-200 text-sm"
                >
                  🔄 Nuevo Alquiler
                </button>
              </div>
              
              {/* Confirmación de envío */}
              <div className="bg-green-50 rounded-lg p-3">
                <p className="text-xs text-green-700 text-center">
                  ✅ Enviado a:<br/>
                  <span className="font-medium">{finalData.contacto.email}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer - Pantalla completa */}
      <div className="bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto p-4 text-center">
          <p className="text-gray-600 text-sm">
            Gracias por confiar en ALQUIPC - Tu socio en tecnología
          </p>
        </div>
      </div>
    </div>
  );
}
