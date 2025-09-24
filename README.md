# ALQUIPC - Sistema de Alquiler de Computadores

Sistema web de autoservicio para el alquiler de equipos de cómputo portátiles desarrollado con Next.js, TypeScript y Tailwind CSS.

## 🖥️ Descripción del Proyecto

ALQUIPC es una aplicación web que permite a los clientes solicitar alquileres de computadores portátiles de forma autónoma, reemplazando el sistema tradicional de call center. La aplicación calcula automáticamente los precios según las reglas de negocio y envía facturas digitales por email.

## 🎯 Características Principales

- **Solicitud de Alquiler Autónoma**: Los clientes pueden configurar su alquiler directamente
- **Cálculo de Precios en Tiempo Real**: Precios actualizados automáticamente según selecciones
- **Tres Modalidades de Servicio**:
  - Dentro de la ciudad (precio base)
  - Fuera de la ciudad (+5% incremento por domicilio)
  - En el establecimiento (-5% descuento)
- **Días Adicionales con Descuento**: 2% de descuento por cada día adicional
- **Facturas Digitales**: Solo envío por email (política ambiental)
- **Interfaz Responsive**: Funciona en móviles, tablets y desktop

## 💰 Reglas de Negocio

- **Precio base**: $35,000 por equipo por día
- **Mínimo**: 2 equipos por alquiler
- **Descuento días adicionales**: 2% por cada día adicional
- **Sin impresión física**: Solo facturas digitales por email

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [url-del-repositorio]

# Navegar al directorio
cd alquipc-dev

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

### Acceso
Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## 📱 Funcionalidades

### 🆕 Nuevo Alquiler
1. **Configuración**: Seleccionar número de equipos (mín. 2) y días iniciales
2. **Tipo de Servicio**: Elegir modalidad con impacto en precio visible
3. **Información de Contacto**: Nombre, email (obligatorio) y teléfono (opcional)
4. **Resumen en Tiempo Real**: Cálculo automático de precios
5. **Confirmación**: Generar ID-cliente y enviar factura por email

### ➕ Días Adicionales
1. **Búsqueda**: Ingresar ID-cliente para encontrar alquiler existente
2. **Configuración**: Especificar días adicionales deseados
3. **Descuento Automático**: 2% por cada día adicional aplicado
4. **Factura Actualizada**: Envío automático por email

## 🎨 Tecnologías Utilizadas

- **Frontend**: Next.js 15.5.3 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 4
- **Fuentes**: Geist Sans y Geist Mono
- **Iconos**: Emojis para mejor UX

## 📋 Estructura del Proyecto

```
alquipc-dev/
├── app/
│   ├── components/
│   │   ├── RentalForm.tsx          # Formulario de nuevo alquiler
│   │   └── AdditionalDaysForm.tsx  # Formulario de días adicionales
│   ├── globals.css                 # Estilos globales
│   ├── layout.tsx                  # Layout principal
│   └── page.tsx                    # Página principal
├── historias-usuario.md            # Documentación de historias de usuario
├── package.json                    # Dependencias y scripts
└── README.md                       # Este archivo
```

## 🧪 Datos de Prueba

Para probar la funcionalidad de días adicionales, usa estos IDs de ejemplo:

- **APC-123456-001**: Juan Pérez - 3 equipos, 5 días
- **APC-789012-002**: María García - 2 equipos, 3 días

## 📊 Historias de Usuario

El proyecto incluye 12 historias de usuario detalladas que cubren:
- Interfaz web para clientes
- Sistema de facturación automática
- Gestión automática de clientes
- Cálculos de precios en tiempo real

Ver `historias-usuario.md` para detalles completos.

## 🌱 Compromiso Ambiental

ALQUIPC está comprometido con el reciclaje de papel y la sostenibilidad:
- ❌ Sin opciones de impresión física
- ✅ Solo facturas digitales por email
- 🌍 Reducción de consumo de papel

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Construcción para producción
npm run build

# Ejecutar versión de producción
npm run start
```

## 📈 Próximas Mejoras

- Integración con servicio de email real
- Base de datos para persistencia
- Sistema de autenticación
- Panel administrativo
- Reportes y analytics
- Integración con pasarelas de pago

## 👥 Contribución

1. Fork el proyecto
2. Crear rama para feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

**ALQUIPC** - Sistema de Alquiler de Computadores  
Email: info@alquipc.com  
Web: https://alquipc.com

---

*Desarrollado con ❤️ para ALQUIPC - Comprometidos con el medio ambiente*
