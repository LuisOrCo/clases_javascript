// =============================================================================
//  🚀  SPACEX FLIGHT CONTROL CENTER
//  Centro de Control de Lanzamientos Espaciales
//
//  Proyecto de Desempeño · SENA Formación Complementaria 3406211
//  Módulo: JavaScript · Unidades 1 a 7
//
//  INSTRUCCIONES PARA EL APRENDIZ:
//  ─────────────────────────────────────────────────────────────────────────────
//  Este archivo está vacío. Tu tarea es implementar todas las funciones
//  necesarias para que la aplicación funcione de acuerdo al enunciado.
//
//  Pasos recomendados:
//    1. Lee el enunciado completo en ENUNCIADO.md
//    2. Abre spacex_control_vuelos.html en el navegador con F12 activo
//    3. Revisa el HTML para conocer los IDs disponibles
//    4. Revisa el CSS para conocer las clases que debes aplicar
//    5. Implementa las secciones de este archivo en orden
//
//  IMPORTANTE: No modifiques spacex_control_vuelos.html ni styles-vuelos.css
// =============================================================================


// ─────────────────────────────────────────────────────────────────────────────
//  SECCIÓN 1 — ALMACÉN DE DATOS
//
//  Declara aquí las variables que guardarán el estado global de la aplicación:
//  la colección de lanzamientos registrados y cualquier variable de control
//  que necesites para el funcionamiento de la interfaz.
//
//  Piensa en qué tipo de estructura de datos es más apropiada para
//  mantener una lista de registros, cada uno con múltiples propiedades.
// ─────────────────────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────────────────────
//  SECCIÓN 2 — FUNCIONES UTILITARIAS
//
//  Funciones de propósito general que pueden reutilizarse en distintas
//  partes del código. Considera qué operaciones se repiten frecuentemente
//  y valdría la pena encapsular como función auxiliar.
//
//  Por ejemplo: generar un identificador único para cada registro,
//  o transformar una fecha al formato que se mostrará en las tarjetas.
// ─────────────────────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────────────────────
//  SECCIÓN 3 — RENDERIZADO DE TARJETAS
//
//  Funciones que leen el almacén de datos y convierten cada lanzamiento
//  en un elemento HTML visible dentro del contenedor del grid.
//
//  La tarjeta debe construirse como un elemento del DOM con la estructura
//  documentada en el archivo HTML. Revisa los comentarios del grid para
//  conocer exactamente qué clases y atributos debe tener cada parte.
//
//  IDs relevantes del HTML:
//    · #grid-lanzamientos  → contenedor donde se insertan las tarjetas
//    · #estado-vacio       → se muestra cuando no hay tarjetas
//    · #contador-visibles  → muestra cuántas tarjetas son visibles
//    · #contador-lanzamientos → contador de vuelos en la topbar
// ─────────────────────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────────────────────
//  SECCIÓN 4 — ANIMACIONES DE TARJETAS (HOVER)
//
//  Cada tarjeta creada debe escuchar eventos del cursor y responder
//  aplicando o removiendo la clase CSS que activa la animación.
//
//  La clase de activación está definida en el archivo de estilos.
//  El CSS ya tiene la transición configurada para entrada y salida.
//
//  Eventos que debes capturar en cada tarjeta:
//    · mouseover  → activar el estado de hover
//    · mouseout   → desactivar el estado de hover
// ─────────────────────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────────────────────
//  SECCIÓN 5 — FORMULARIO: REGISTRO Y EDICIÓN
//
//  Función que responde al evento de envío del formulario.
//  Debe leer el valor de cada campo, verificar que no estén vacíos,
//  construir el objeto del lanzamiento y añadirlo al almacén.
//  Si el campo oculto de edición contiene un ID, debe actualizar el
//  registro existente en lugar de crear uno nuevo.
//
//  IDs relevantes del HTML:
//    · #form-lanzamiento        → el elemento <form>
//    · #input-nombre-serie      → campo texto nombre
//    · #select-tipo-cohete      → campo selección tipo
//    · #input-fecha-lanzamiento → campo fecha y hora
//    · #input-objetivo-mision   → campo texto objetivo
//    · #input-id-edicion        → campo oculto con el ID en modo edición
//    · #btn-registrar           → botón principal del formulario
//    · #btn-cancelar-edicion    → botón para salir del modo edición
// ─────────────────────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────────────────────
//  SECCIÓN 6 — CAMBIOS DE ESTADO
//
//  Funciones que modifican un lanzamiento existente:
//    · Modo edición: cargar los datos del registro en el formulario
//    · Cancelación: cambiar el estado del registro a "cancelado"
//
//  Las tarjetas tienen botones con los atributos data-id y data-action.
//  Puedes usar estos atributos para saber qué registro modificar y
//  qué acción ejecutar cuando el usuario hace clic.
// ─────────────────────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────────────────────
//  SECCIÓN 7 — FILTRADO POR ESTADO
//
//  Funciones que muestran u ocultan tarjetas según el filtro activo.
//  Al aplicar un filtro, solo deben verse las tarjetas que coincidan
//  con el estado seleccionado. El botón activo debe marcarse visualmente.
//
//  IDs relevantes del HTML:
//    · #grupo-filtros  → contenedor de los botones de filtro
//
//  Atributo en los botones de filtro: data-filter
//  Valores posibles: "todos" · "pendiente" · "lanzado" · "cancelado"
//
//  Clase CSS del botón activo: atom-btn--filter-active
// ─────────────────────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────────────────────
//  SECCIÓN 8 — RELOJ Y MONITOREO AUTOMÁTICO
//
//  Un intervalo de tiempo que se ejecuta cada segundo y realiza dos tareas:
//
//    Tarea A: Reloj en tiempo real
//      Obtener la hora actual en UTC y mostrarla en el elemento del reloj
//      usando el formato HH:MM:SSZ (horas, minutos, segundos + letra Z).
//
//    Tarea B: Detección automática de lanzamientos
//      Recorrer el almacén y buscar registros con estado "pendiente"
//      cuya fecha programada ya se haya alcanzado o superado.
//      Cuando se detecte uno, cambiar su estado a "lanzado" y
//      actualizar la vista para reflejar el cambio.
//
//  ID relevante del HTML:
//    · #reloj-principal → elemento donde se despliega la hora
// ─────────────────────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────────────────────
//  SECCIÓN 9 — ESTADÍSTICAS
//
//  Función que recorre el almacén, cuenta los registros por estado
//  y actualiza los elementos del panel de estadísticas con los totales.
//
//  IDs relevantes del HTML:
//    · #stat-pendientes  → contador de lanzamientos pendientes
//    · #stat-lanzados    → contador de lanzamientos ejecutados
//    · #stat-cancelados  → contador de lanzamientos cancelados
//    · #stat-total       → total de registros en el sistema
// ─────────────────────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────────────────────
//  SECCIÓN 10 — INICIALIZACIÓN
//
//  Punto de arranque de la aplicación. Todo el código que necesita
//  interactuar con elementos del DOM debe ejecutarse aquí, dentro de
//  un mecanismo que garantice que la página ya terminó de cargar.
//
//  Desde aquí debes:
//    · Conectar los eventos del formulario y los botones
//    · Iniciar el intervalo del reloj y el monitor automático
//    · Hacer el primer renderizado y actualizar las estadísticas
// ─────────────────────────────────────────────────────────────────────────────
