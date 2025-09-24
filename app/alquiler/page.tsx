export default function Formulario() {
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
                      <button className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center font-bold text-gray-700 hover:text-blue-600 transition-colors duration-200">
                        -
                      </button>
                      <input 
                        type="number" 
                        value="2" 
                        className="flex-1 text-center border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg px-4 py-2 font-semibold text-gray-800 bg-white"
                        min="2"
                      />
                      <button className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center font-bold text-gray-700 hover:text-blue-600 transition-colors duration-200">
                        +
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Mínimo 2 equipos</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Días iniciales
                    </label>
                    <div className="flex items-center gap-3">
                      <button className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center font-bold text-gray-700 hover:text-blue-600 transition-colors duration-200">
                        -
                      </button>
                      <input 
                        type="number" 
                        value="1" 
                        className="flex-1 text-center border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg px-4 py-2 font-semibold text-gray-800 bg-white"
                        min="1"
                      />
                      <button className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center font-bold text-gray-700 hover:text-blue-600 transition-colors duration-200">
                        +
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Mínimo 1 día</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Tipo de servicio
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <label className="relative h-full">
                        <input type="radio" name="service" className="sr-only peer" defaultChecked />
                        <div className="flex flex-col items-center p-4 border-2 border-gray-200 rounded-lg hover:bg-gray-100 hover:border-gray-400 cursor-pointer transition-all duration-200 h-[120px] justify-center peer-checked:bg-blue-50 peer-checked:border-blue-500 peer-checked:shadow-lg peer-checked:hover:bg-blue-100 peer-checked:hover:border-blue-600">
                          <div className="text-center">
                            <div className="font-medium text-gray-800 mb-1 peer-checked:text-blue-700">🏢 Dentro de la ciudad</div>
                            <div className="text-sm text-gray-600 peer-checked:text-blue-600">Precio base</div>
                          </div>
                          <div className="absolute top-3 right-3 w-5 h-5 rounded-full border-2 border-gray-300 bg-white peer-checked:border-blue-500 peer-checked:bg-blue-500 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200"></div>
                          </div>
                        </div>
                      </label>
                      
                      <label className="relative h-full">
                        <input type="radio" name="service" className="sr-only peer" />
                        <div className="flex flex-col items-center p-4 border-2 border-gray-200 rounded-lg hover:bg-gray-100 hover:border-gray-400 cursor-pointer transition-all duration-200 h-[120px] justify-center peer-checked:bg-blue-50 peer-checked:border-blue-500 peer-checked:shadow-lg peer-checked:hover:bg-blue-100 peer-checked:hover:border-blue-600">
                          <div className="text-center">
                            <div className="font-medium text-gray-800 mb-1 peer-checked:text-blue-700">🚗 Fuera de la ciudad</div>
                            <div className="text-sm text-gray-600 peer-checked:text-blue-600">+5% por domicilio</div>
                          </div>
                          <div className="absolute top-3 right-3 w-5 h-5 rounded-full border-2 border-gray-300 bg-white peer-checked:border-blue-500 peer-checked:bg-blue-500 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200"></div>
                          </div>
                        </div>
                      </label>
                      
                      <label className="relative h-full">
                        <input type="radio" name="service" className="sr-only peer" />
                        <div className="flex flex-col items-center p-4 border-2 border-gray-200 rounded-lg hover:bg-gray-100 hover:border-gray-400 cursor-pointer transition-all duration-200 h-[120px] justify-center peer-checked:bg-blue-50 peer-checked:border-blue-500 peer-checked:shadow-lg peer-checked:hover:bg-blue-100 peer-checked:hover:border-blue-600">
                          <div className="text-center">
                            <div className="font-medium text-gray-800 mb-1 peer-checked:text-blue-700">🏪 En el establecimiento</div>
                            <div className="text-sm text-gray-600 peer-checked:text-blue-600">-5% descuento</div>
                          </div>
                          <div className="absolute top-3 right-3 w-5 h-5 rounded-full border-2 border-gray-300 bg-white peer-checked:border-blue-500 peer-checked:bg-blue-500 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200"></div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  
                </div>

                <div className="space-y-6 py-6">
                  {/* Resumen de precio */}
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Total estimado:</span>
                      <span className="text-2xl font-bold text-blue-600">$70,000</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">2 equipos × 1 día × $35,000</p>
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
