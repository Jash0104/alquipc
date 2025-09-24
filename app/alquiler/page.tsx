'use client';

import { useState, useEffect } from 'react';

type ServiceType = 'city' | 'outside' | 'establishment';

interface ServiceOption {
  id: ServiceType;
  name: string;
  description: string;
  emoji: string;
  multiplier: number;
}

const serviceOptions: ServiceOption[] = [
  { id: 'city', name: 'Dentro de la ciudad', description: 'Precio base', emoji: '🏢', multiplier: 1.0 },
  { id: 'outside', name: 'Fuera de la ciudad', description: '+5% por domicilio', emoji: '🚗', multiplier: 1.05 },
  { id: 'establishment', name: 'En el establecimiento', description: '-5% descuento', emoji: '🏪', multiplier: 0.95 }
];

const BASE_PRICE = 35000;
const MIN_EQUIPOS = 2;
const MIN_DIAS = 1;

export default function Formulario() {
  // Estados del formulario
  const [equipos, setEquipos] = useState<number>(MIN_EQUIPOS);
  const [dias, setDias] = useState<number>(MIN_DIAS);
  const [serviceType, setServiceType] = useState<ServiceType>('city');
  const [totalEstimado, setTotalEstimado] = useState<number>(0);

  // Calcular total estimado automáticamente
  useEffect(() => {
    const selectedService = serviceOptions.find(service => service.id === serviceType);
    const multiplier = selectedService?.multiplier || 1.0;
    const subtotal = equipos * dias * BASE_PRICE;
    const total = subtotal * multiplier;
    setTotalEstimado(total);
  }, [equipos, dias, serviceType]);

  // Funciones para manejar cambios
  const handleEquiposChange = (increment: boolean) => {
    setEquipos(prev => {
      const newValue = increment ? prev + 1 : prev - 1;
      return Math.max(MIN_EQUIPOS, newValue);
    });
  };

  const handleDiasChange = (increment: boolean) => {
    setDias(prev => {
      const newValue = increment ? prev + 1 : prev - 1;
      return Math.max(MIN_DIAS, newValue);
    });
  };

  const handleServiceChange = (newServiceType: ServiceType) => {
    setServiceType(newServiceType);
  };

  // Formatear precio en pesos colombianos
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="flex min-h-screen flex-1">
        
        {/* Left Side - Logo ALQUIPC */}
        <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-32 right-16 w-24 h-24 bg-white/5 rounded-full"></div>
            <div className="absolute top-1/2 right-32 w-16 h-16 bg-white/10 rounded-lg transform rotate-45"></div>
          </div>
          
          {/* Logo Section */}
          <div className="relative z-10 text-center flex flex-col items-center">
            {/* Logo Icon */}
            <div className="align-center mb-8 ">
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-8 bg-blue-600 rounded-lg mb-1 opacity-90"></div>
                  <div className="w-14 h-2 bg-blue-600/70 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Logo Text */}
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
                ALQUI<span className="text-blue-200">PC</span>
              </h1>
              <p className="text-blue-100 text-lg font-medium tracking-wider mb-6">
                TECH RENTAL
              </p>
              <p className="text-blue-200 text-base max-w-md mx-auto leading-relaxed">
                Tu tecnología al alcance de un clic. Alquiler de equipos de cómputo fácil, rápido y confiable.
              </p>
            </div>
            
            {/* Stats */}
            <div className="flex justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">+500</div>
                <div className="text-blue-200 text-sm">Equipos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-blue-200 text-sm">Disponible</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-blue-200 text-sm">Digital</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Formulario */}
          <div className="w-full max-w-3xl">
            <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-1 flex-col h-full">
              
              {/* Header del formulario */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Solicitar Alquiler
                </h2>
                <p className="text-gray-600">
                  Configura tu alquiler de equipos
                </p>
              </div>

              {/* Formulario placeholder */}
              <div className="space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Número de equipos
                    </label>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => handleEquiposChange(false)}
                        disabled={equipos <= MIN_EQUIPOS}
                        className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center font-bold text-gray-700 hover:text-blue-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-100 disabled:hover:text-gray-700"
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        value={equipos} 
                        onChange={(e) => setEquipos(Math.max(MIN_EQUIPOS, parseInt(e.target.value) || MIN_EQUIPOS))}
                        className="flex-1 text-center border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg px-4 py-2 font-semibold text-gray-800 bg-white"
                        min={MIN_EQUIPOS}
                      />
                      <button 
                        onClick={() => handleEquiposChange(true)}
                        className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center font-bold text-gray-700 hover:text-blue-600 transition-colors duration-200"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Mínimo {MIN_EQUIPOS} equipos</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Días iniciales
                    </label>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => handleDiasChange(false)}
                        disabled={dias <= MIN_DIAS}
                        className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center font-bold text-gray-700 hover:text-blue-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-100 disabled:hover:text-gray-700"
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        value={dias} 
                        onChange={(e) => setDias(Math.max(MIN_DIAS, parseInt(e.target.value) || MIN_DIAS))}
                        className="flex-1 text-center border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg px-4 py-2 font-semibold text-gray-800 bg-white"
                        min={MIN_DIAS}
                      />
                      <button 
                        onClick={() => handleDiasChange(true)}
                        className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center font-bold text-gray-700 hover:text-blue-600 transition-colors duration-200"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Mínimo {MIN_DIAS} día</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Tipo de servicio
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {serviceOptions.map((service) => {
                        const isSelected = serviceType === service.id;
                        return (
                          <label key={service.id} className="relative h-full">
                            <input 
                              type="radio" 
                              name="service" 
                              value={service.id}
                              checked={isSelected}
                              onChange={() => handleServiceChange(service.id)}
                              className="sr-only peer" 
                            />
                            <div className={`flex flex-col items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 h-[120px] justify-center ${
                              isSelected 
                                ? 'bg-blue-50 border-blue-500 shadow-lg hover:bg-blue-100 hover:border-blue-600' 
                                : 'border-gray-200 hover:bg-gray-100 hover:border-gray-400'
                            }`}>
                              <div className="text-center">
                                <div className={`font-medium mb-1 ${isSelected ? 'text-blue-700' : 'text-gray-800'}`}>
                                  {service.emoji} {service.name}
                                </div>
                                <div className={`text-sm ${isSelected ? 'text-blue-600' : 'text-gray-600'}`}>
                                  {service.description}
                                </div>
                              </div>
                              <div className={`absolute top-3 right-3 w-5 h-5 rounded-full border-2 bg-white flex items-center justify-center ${
                                isSelected ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                              }`}>
                                <div className={`w-2 h-2 rounded-full bg-white transition-opacity duration-200 ${
                                  isSelected ? 'opacity-100' : 'opacity-0'
                                }`}></div>
                              </div>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                  
                </div>

                <div className="space-y-6 pt-6">
                  {/* Resumen de precio */}
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">Total estimado:</span>
                      <span className="text-2xl font-bold text-blue-600">{formatPrice(totalEstimado)}</span>
                    </div>
                    <div className="text-xs text-gray-600 space-y-1">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>{equipos} equipos × {dias} días × {formatPrice(BASE_PRICE)} = {formatPrice(equipos * dias * BASE_PRICE)}</span>
                      </div>
                      {serviceType !== 'city' && (
                        <div className="flex justify-between">
                          <span>Ajuste por servicio:</span>
                          <span className={serviceType === 'outside' ? 'text-orange-600' : 'text-green-600'}>
                            {serviceType === 'outside' ? '+5%' : '-5%'} = {formatPrice(totalEstimado - (equipos * dias * BASE_PRICE))}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Botón continuar */}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200">
                    Continuar con datos de contacto
                  </button>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
}
