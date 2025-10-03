# INFORME DE FALLAS - TESTING APLICATIVO ALQUIPC.EXE

## Datos de la Evaluación
- **Fecha de Testing**: 26 de Septiembre 2025
- **Aplicación Analizada**: ALQUIPC.exe (Sistema ejecutable)
- **Modalidad de Pruebas**: Funcionales, Integridad de Datos, Usabilidad

---

## BITÁCORA DE FALLAS DETECTADAS

| FECHA | HORA INICIO | HORA FIN | TIEMPO | ACTIVIDAD REALIZADA | FALLAS IDENTIFICADAS |
|-------|-------------|----------|--------|---------------------|---------------------|
| Sep 26 2025 | 16:15 | 16:28 | 13 min | Verificación de controles de entrada en formulario base | **FALLA CRÍTICA**: La aplicación termina abruptamente al introducir información no válida en campos principales (nombre, identificación, contacto). Ausencia total de control de excepciones. |
| Sep 26 2025 | 16:30 | 16:37 | 7 min | Análisis de cálculos matemáticos en modalidades de servicio | **FALLA CRÍTICA**: Los algoritmos de cálculo están invertidos. El servicio "Externo" descuenta en lugar de incrementar costos. El servicio "En establecimiento" suma cuando debería descontar. |
| Sep 26 2025 | 16:40 | 16:48 | 8 min | Evaluación de integridad en campos de cantidad | **FALLA CRÍTICA**: Acepta valores negativos en campos de cantidad de equipos y duración de alquiler, generando cálculos matemáticamente imposibles. |
| Sep 26 2025 | 16:50 | 16:58 | 8 min | Verificación de procesamiento con datos inconsistentes | **FALLA CRÍTICA**: Procesa y genera documentos de facturación con información completamente errónea cuando se introducen caracteres alfabéticos en campos numéricos. |
| Sep 26 2025 | 17:00 | 17:06 | 6 min | Análisis de funcionalidad de días suplementarios | **FALLA CRÍTICA**: La característica de días adicionales produce resultados en notación científica (ej: 9.45859e-039) en lugar de valores monetarios coherentes. |
| Sep 26 2025 | 17:10 | 17:16 | 6 min | Evaluación de controles de formato en datos personales | **FALLA ALTA**: No implementa verificación de formato para direcciones de correo electrónico ni validación de estructura para números telefónicos. |
| Sep 26 2025 | 17:20 | 17:25 | 5 min | Revisión de transparencia en estructura de precios | **FALLA ALTA**: Oculta completamente la tarifa base por equipo y no presenta desglose de cálculos, afectando la confianza del usuario final. |
| Sep 26 2025 | 17:28 | 17:32 | 4 min | Análisis de opciones de control de flujo | **FALLA MEDIA**: Carece de mecanismos para interrumpir o cancelar el proceso una vez iniciado, forzando al usuario a completar la operación. |

---

## CLASIFICACIÓN DE FALLAS POR SEVERIDAD

### 🔴 FALLAS CRÍTICAS (5)
1. Terminación abrupta del programa con entradas inválidas
2. Algoritmos de cálculo con lógica invertida en servicios
3. Procesamiento de valores negativos en campos de cantidad
4. Generación de documentación con datos erróneos
5. Resultados en notación científica para días suplementarios

### 🟡 FALLAS ALTAS (2)
1. Ausencia de validación en formatos de contacto
2. Falta de transparencia en estructura tarifaria

### 🟢 FALLAS MEDIAS (1)
1. Inexistencia de controles de navegación y cancelación

---

## ACCIONES CORRECTIVAS SUGERIDAS

### Prioridad Máxima
- Desarrollar sistema robusto de manejo de excepciones
- Rectificar completamente los algoritmos de cálculo financiero
- Implementar validaciones estrictas de tipo de dato
- Establecer controles de integridad en generación de documentos

### Prioridad Alta
- Incorporar validaciones de formato para campos de contacto
- Diseñar interfaz transparente con desglose de costos
- Corregir funcionalidad de días suplementarios

### Prioridad Media
- Añadir opciones de navegación y cancelación de procesos
- Mejorar experiencia general del usuario

---

**Analizado por**: Equipo QA - Desarrollo ALQUIPC  
**Veredicto**: Sistema no apto para ambiente productivo  
**Seguimiento**: Requiere reingeniería completa antes de nueva evaluación
