# Historias de Usuario - Sistema de Facturación ALQUIPC

## Información del Proyecto
**Empresa:** ALQUIPC - Alquiler de Computadores  
**Sistema:** Programa de Facturación de Servicios  
**Fecha:** Septiembre 2025

---

## Épicas del Sistema

### Épica 1: Gestión de Alquileres
Permitir a los operadores gestionar las solicitudes de alquiler de equipos de cómputo.

### Épica 2: Sistema de Facturación
Generar facturas automáticas con cálculos de precios según las reglas de negocio.

### Épica 3: Gestión de Clientes
Administrar la información de clientes y asignación de IDs únicos.

---

## Historias de Usuario

### 👩‍💼 Operadora del Call Center

#### HU-001: Registrar Nueva Solicitud de Alquiler
**Como** operadora del call center de ALQUIPC  
**Quiero** registrar una nueva solicitud de alquiler de equipos  
**Para** poder procesar la solicitud del cliente y asignarle un ID único

**Criterios de Aceptación:**
- Debo poder ingresar el número de equipos (mínimo 2)
- Debo poder ingresar el número de días iniciales de alquiler
- Debo poder seleccionar el tipo de servicio (dentro de la ciudad, fuera de la ciudad, en el establecimiento)
- El sistema debe asignar automáticamente un ID-cliente único
- Debo poder ver el ID-cliente generado para comunicárselo al cliente

**Definición de Terminado:**
- La solicitud se registra correctamente en el sistema
- Se genera un ID-cliente único
- Se valida que el número mínimo de equipos sea 2

---

#### HU-002: Seleccionar Tipo de Servicio de Alquiler
**Como** operadora del call center  
**Quiero** seleccionar entre las tres opciones de alquiler disponibles  
**Para** aplicar correctamente los precios y condiciones según el tipo de servicio

**Criterios de Aceptación:**
- Debo poder seleccionar "Dentro de la ciudad" (precio base)
- Debo poder seleccionar "Fuera de la ciudad" (incremento del 5%)
- Debo poder seleccionar "Dentro del establecimiento" (descuento del 5%)
- El sistema debe mostrar claramente las implicaciones de precio de cada opción

**Definición de Terminado:**
- Las tres opciones están disponibles para selección
- Se aplican automáticamente los ajustes de precio correspondientes

---

#### HU-003: Procesar Días Adicionales de Alquiler
**Como** operadora del call center  
**Quiero** agregar días adicionales a un alquiler existente  
**Para** extender el período de alquiler de los mismos equipos con descuento

**Criterios de Aceptación:**
- Debo poder buscar un alquiler existente por ID-cliente
- Debo poder agregar días adicionales al alquiler
- El sistema debe aplicar automáticamente el descuento del 2% por cada día adicional
- Debo poder ver el nuevo total calculado

**Definición de Terminado:**
- Se pueden agregar días adicionales a alquileres existentes
- Se aplica correctamente el descuento del 2% por día adicional
- Se actualiza el total de la factura

---

### 👤 Cliente

#### HU-004: Solicitar Alquiler de Equipos
**Como** cliente de ALQUIPC  
**Quiero** solicitar el alquiler de equipos de cómputo por teléfono  
**Para** obtener los equipos que necesito por el tiempo requerido

**Criterios de Aceptación:**
- Debo poder especificar el número de equipos que necesito (mínimo 2)
- Debo poder indicar por cuántos días iniciales necesito los equipos
- Debo poder elegir entre las opciones de servicio disponibles
- Debo recibir un ID-cliente para futuras referencias

**Definición de Terminado:**
- La solicitud se procesa correctamente
- Se asigna un ID-cliente único
- Se comunican claramente las condiciones del alquiler

---

#### HU-005: Recibir Factura por Email
**Como** cliente de ALQUIPC  
**Quiero** recibir mi factura por correo electrónico  
**Para** tener el registro de mi alquiler sin necesidad de impresión física

**Criterios de Aceptación:**
- Debo recibir la factura en formato digital por email
- La factura debe incluir todos los detalles del alquiler
- La factura debe mostrar claramente el total a pagar
- No debe existir opción de impresión física

**Definición de Terminado:**
- Se envía automáticamente la factura por email
- La factura contiene toda la información requerida
- No hay funcionalidad de impresión disponible

---

#### HU-006: Solicitar Días Adicionales
**Como** cliente existente de ALQUIPC  
**Quiero** solicitar días adicionales para mi alquiler actual  
**Para** extender el período de uso de los mismos equipos con descuento

**Criterios de Aceptación:**
- Debo poder contactar usando mi ID-cliente
- Debo poder solicitar días adicionales específicos
- Debo recibir información sobre el descuento aplicable (2% por día adicional)
- Debo recibir una factura actualizada por email

**Definición de Terminado:**
- Se procesan correctamente las solicitudes de días adicionales
- Se aplica el descuento correspondiente
- Se envía factura actualizada

---

### 🖥️ Sistema de Facturación

#### HU-007: Calcular Precio Base del Alquiler
**Como** sistema de facturación  
**Quiero** calcular automáticamente el precio base del alquiler  
**Para** determinar el costo inicial antes de aplicar ajustes

**Criterios de Aceptación:**
- Debo calcular: número de equipos × días × $35,000
- Debo validar que el número mínimo de equipos sea 2
- Debo mostrar el subtotal antes de ajustes

**Definición de Terminado:**
- El cálculo base se realiza correctamente
- Se validan las reglas de negocio mínimas

---

#### HU-008: Aplicar Ajustes de Precio por Tipo de Servicio
**Como** sistema de facturación  
**Quiero** aplicar automáticamente los ajustes de precio según el tipo de servicio  
**Para** calcular correctamente el precio final

**Criterios de Aceptación:**
- Para "Fuera de la ciudad": aplicar incremento del 5%
- Para "Dentro del establecimiento": aplicar descuento del 5%
- Para "Dentro de la ciudad": mantener precio base
- Debo mostrar claramente qué ajuste se aplicó

**Definición de Terminado:**
- Los ajustes se aplican automáticamente según el tipo de servicio
- Los cálculos son precisos y transparentes

---

#### HU-009: Aplicar Descuento por Días Adicionales
**Como** sistema de facturación  
**Quiero** aplicar descuento del 2% por cada día adicional solicitado  
**Para** incentivar la extensión de alquileres

**Criterios de Aceptación:**
- Debo aplicar 2% de descuento por cada día adicional
- El descuento se aplica solo sobre los días adicionales
- Debo calcular correctamente el nuevo total

**Definición de Terminado:**
- El descuento por días adicionales se calcula correctamente
- Se diferencia entre días iniciales y adicionales en el cálculo

---

#### HU-010: Generar Factura Digital
**Como** sistema de facturación  
**Quiero** generar una factura digital completa  
**Para** proporcionar al cliente toda la información de su alquiler

**Criterios de Aceptación:**
- Debo incluir: ID-cliente, opción de alquiler, número de equipos, días iniciales, días adicionales
- Debo mostrar: subtotal, ajustes aplicados (descuentos/incrementos), total final
- Debo generar la factura en formato adecuado para envío por email
- NO debo incluir opción de impresión

**Definición de Terminado:**
- La factura contiene toda la información requerida
- El formato es adecuado para envío digital
- No existe funcionalidad de impresión

---

#### HU-011: Generar ID-Cliente Único
**Como** sistema  
**Quiero** generar automáticamente un ID-cliente único para cada nueva solicitud  
**Para** identificar inequívocamente cada alquiler y cliente

**Criterios de Aceptación:**
- Debo generar un ID único para cada nueva solicitud
- El ID debe ser fácil de comunicar por teléfono
- El ID debe permitir la búsqueda rápida de alquileres existentes

**Definición de Terminado:**
- Se genera un ID único para cada solicitud
- El ID es funcional para búsquedas y referencias

---

## Reglas de Negocio

### RN-001: Equipos Mínimos
- El número mínimo de equipos a alquilar es 2

### RN-002: Precio Base
- El precio por equipo por día es de $35,000

### RN-003: Ajustes por Tipo de Servicio
- Fuera de la ciudad: +5% por servicio a domicilio
- Dentro del establecimiento: -5% de descuento
- Dentro de la ciudad: precio base sin ajustes

### RN-004: Descuento por Días Adicionales
- 2% de descuento por cada día adicional solicitado

### RN-005: Política Ambiental
- No se permite impresión de facturas (solo envío digital)

---

## Criterios de Aceptación Generales

1. **Usabilidad**: La interfaz debe ser intuitiva para operadoras de call center
2. **Precisión**: Todos los cálculos deben ser exactos según las reglas de negocio
3. **Trazabilidad**: Cada alquiler debe ser identificable por su ID-cliente único
4. **Sostenibilidad**: No debe existir funcionalidad de impresión física
5. **Eficiencia**: El proceso de facturación debe ser rápido y automatizado

---

## Notas de Implementación

- El sistema debe ser desarrollado en Next.js con TypeScript (según package.json actual)
- Se debe considerar una base de datos para almacenar alquileres y clientes
- Se requiere integración con servicio de email para envío de facturas
- La interfaz debe ser responsive para uso en diferentes dispositivos

---

**Documento creado:** Septiembre 2025  
**Versión:** 1.0  
**Estado:** Listo para desarrollo
