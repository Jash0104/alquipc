import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navbar */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Mejorado */}
            <div className="flex items-center gap-3">
              <div className="relative">
                {/* Logo Icon */}
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="flex flex-col items-center">
                    <div className="w-5 h-3 bg-white rounded-sm mb-0.5 opacity-90"></div>
                    <div className="w-6 h-1 bg-white/70 rounded-full"></div>
                  </div>
                </div>
                {/* Floating dot */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight leading-none">
                  ALQUI<span className="text-blue-600">PC</span>
                </h1>
                <span className="text-xs text-gray-500 font-medium tracking-wider">TECH RENTAL</span>
              </div>
            </div>

            {/* Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Servicios
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Precios
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Contacto
              </a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200">
                Solicita tus equipos
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="min-h-[calc(100vh-80px)] flex items-center py-12 md:py-20">
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
            
            {/* Left Content */}
            <div className="flex-1 max-w-2xl text-center md:text-left">
              <div className="space-y-8">
                
                {/* Main Heading */}
                <div>
                  <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
                    Tu tecnología.
                    <br />
                    <span className="text-blue-600">Nosotros te ayudamos</span>
                    <br />
                    <span className="text-gray-900">a conectarte</span>
                  </h2>
                </div>
                
                {/* Description */}
                <div className="max-w-xl mx-auto md:mx-0">
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
                    Dedicados a hacer el alquiler de tecnología lo más simple posible, 
                    ayudamos a cada cliente a encontrar las mejores opciones de equipos 
                    de cómputo para sus proyectos y necesidades.
                  </p>
                </div>

                {/* Badge */}
                <div className="inline-flex">
                  <span className="inline-block  text-blue-700 px-4 py-2 rounded-full uppercase tracking-wide font-semibold border border-blue-300 text-sm">
                    ALQUILER DE EQUIPOS DE CÓMPUTO
                  </span>
                </div>

                
                
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500/80 rounded-full transform scale-y-150"></div>
              <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center">
                <Image
                  src="/image.png"
                  alt="Tecnología y conectividad - ALQUIPC"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain relative z-10"
                  priority
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
