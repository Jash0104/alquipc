'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface RentalData {
  equipos: number;
  dias: number;
  serviceType: string;
  totalEstimado: number;
  serviceName: string;
  serviceMultiplier: number;
}

interface ContactData {
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
}

export default function ContactoPage() {
  const router = useRouter();
  const [rentalData, setRentalData] = useState<RentalData | null>(null);
  const [contactData, setContactData] = useState<ContactData>({
    nombre: '',
    email: '',
    telefono: '',
    empresa: ''
  });

  // Estados de validación
  const isNombreValid = contactData.nombre.trim().length >= 3;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.email);
  const isFormValid = isNombreValid && isEmailValid;

  // Cargar datos del alquiler desde sessionStorage
  useEffect(() => {
    const savedRentalData = sessionStorage.getItem('rentalData');
    if (savedRentalData) {
      setRentalData(JSON.parse(savedRentalData));
    } else {
      // Si no hay datos, redirigir al formulario
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

  const handleInputChange = (field: keyof ContactData, value: string) => {
    // Validación especial para teléfono - solo números, espacios, guiones y +
    if (field === 'telefono') {
      const phoneRegex = /^[0-9+\s-]*$/;
      if (!phoneRegex.test(value)) {
        return; // No actualizar si contiene caracteres inválidos
      }
    }
    
    setContactData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    if (isFormValid && rentalData) {
      // Guardar datos de contacto en sessionStorage
      const completeData = {
        ...rentalData,
        contacto: contactData
      };
      sessionStorage.setItem('completeRentalData', JSON.stringify(completeData));
      
      // Navegar a la promoción de días adicionales
      router.push('/alquiler/promocion-dias');
    }
  };

  const handleVolver = () => {
    router.back();
  };

  if (!rentalData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando datos del alquiler...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="flex min-h-screen flex-1">
        
        {/* Left Side - Resumen del Alquiler */}
        <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-32 right-16 w-24 h-24 bg-white/5 rounded-full"></div>
            <div className="absolute top-1/2 right-32 w-16 h-16 bg-white/10 rounded-lg transform rotate-45"></div>
          </div>
          
          {/* Resumen Section */}
          <div className="relative z-10 text-center max-w-md">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Resumen del Alquiler</h2>
              
              <div className="space-y-4 text-left">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-blue-100">Equipos:</span>
                  <span className="text-white font-semibold">{rentalData.equipos}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-blue-100">Días:</span>
                  <span className="text-white font-semibold">{rentalData.dias}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-blue-100">Servicio:</span>
                  <span className="text-white font-semibold text-sm">{rentalData.serviceName}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 bg-white/10 rounded-lg px-4 mt-4">
                  <span className="text-blue-100 font-medium">Total:</span>
                  <span className="text-white font-bold text-xl">{formatPrice(rentalData.totalEstimado)}</span>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-blue-200 text-sm">
                  📧 La factura se enviará por email
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Formulario de Contacto */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-3xl">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              
              {/* Header del formulario */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Datos de Contacto
                </h2>
                <p className="text-gray-600">
                  Completa tus datos para finalizar el alquiler
                </p>
              </div>

              {/* Formulario */}
              <div className="space-y-4">
                
                {/* Nombre Completo - Obligatorio */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    value={contactData.nombre}
                    onChange={(e) => handleInputChange('nombre', e.target.value)}
                    placeholder="Ej: Juan Pérez García"
                    className={`w-full border-2 rounded-lg px-4 py-3 font-medium bg-white transition-colors duration-200 focus-visible:outline-none ${
                      isNombreValid || contactData.nombre === ''
                        ? 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-800' 
                        : 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-red-700 bg-red-50'
                    }`}
                  />
                  {/* Espacio reservado para mensaje de error */}
                  <div className="h-5 mt-1">
                    {!isNombreValid && contactData.nombre !== '' && (
                      <p className="text-xs text-red-500">⚠️ El nombre debe tener al menos 3 caracteres</p>
                    )}
                  </div>
                </div>

                {/* Email - Obligatorio */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    value={contactData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="ejemplo@correo.com"
                    className={`w-full border-2 rounded-lg px-4 py-3 font-medium bg-white transition-colors duration-200 focus-visible:outline-none ${
                      isEmailValid || contactData.email === ''
                        ? 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-800' 
                        : 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-red-700 bg-red-50'
                    }`}
                  />
                  {/* Espacio reservado para mensajes */}
                  <div className="h-8 mt-1 space-y-1">
                    {!isEmailValid && contactData.email !== '' && (
                      <p className="text-xs text-red-500">⚠️ Ingresa un email válido</p>
                    )}
                    <p className="text-xs text-blue-600">📧 Aquí recibirás tu factura digital</p>
                  </div>
                </div>

                {/* Teléfono y Empresa en la misma línea */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Teléfono - Opcional */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono <span className="text-gray-400">(opcional)</span>
                    </label>
                    <input 
                      type="tel" 
                      value={contactData.telefono}
                      onChange={(e) => handleInputChange('telefono', e.target.value)}
                      placeholder="+57 300 123 4567"
                      pattern="[0-9+\s-]*"
                      inputMode="tel"
                      className="w-full border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg px-4 py-3 font-medium text-gray-800 bg-white transition-colors duration-200 focus-visible:outline-none"
                    />
                    {/* Espacio reservado para mensaje */}
                    <div className="h-5 mt-1">
                      <p className="text-xs text-gray-500">Para contacto de emergencia</p>
                    </div>
                  </div>

                  {/* Empresa - Opcional */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa/Organización <span className="text-gray-400">(opcional)</span>
                    </label>
                    <input 
                      type="text" 
                      value={contactData.empresa}
                      onChange={(e) => handleInputChange('empresa', e.target.value)}
                      placeholder="Ej: Mi Empresa S.A.S."
                      className="w-full border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg px-4 py-3 font-medium text-gray-800 bg-white transition-colors duration-200 focus-visible:outline-none"
                    />
                    {/* Espacio reservado para mensaje */}
                    <div className="h-5 mt-1">
                      <p className="text-xs text-gray-500">Para facturas corporativas</p>
                    </div>
                  </div>
                </div>

                {/* Botones */}
                <div className="flex gap-3 pt-4">
                  <button 
                    onClick={handleVolver}
                    className="flex-1 py-3 px-4 rounded-lg font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200"
                  >
                    Volver
                  </button>
                  
                  <button 
                    onClick={handleSubmit}
                    disabled={!isFormValid}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                      isFormValid 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer hover:shadow-lg' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {isFormValid ? 'Finalizar Alquiler' : 'Completa los campos obligatorios'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
