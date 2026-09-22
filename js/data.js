/* Banco de preguntas: 6 temas x 6 niveles x 5 preguntas = 180.
   Cada pregunta: { id, tema, nivel, pregunta, opciones[4], correcta (0-3) } */

const TEMAS = {
  1: "Hardware",
  2: "Software",
  3: "Programacion",
  4: "Redes e Internet",
  5: "Historia y Cultura General",
  6: "Curiosidades Tecnologicas",
};

const NIVELES = {
  1: "Muy facil",
  2: "Facil",
  3: "Medio",
  4: "Medio-alto",
  5: "Dificil",
  6: "Muy dificil",
};

const PREGUNTAS = [
  /* ===== TEMA 1: HARDWARE ===== */
  // Nivel 1
  { id: "p1-1-1", tema: 1, nivel: 1, pregunta: "Cual de estos es un periferico de entrada?", opciones: ["Monitor", "Impresora", "Teclado", "Altavoz"], correcta: 2 },
  { id: "p1-1-2", tema: 1, nivel: 1, pregunta: "Que significa la sigla RAM?", opciones: ["Memoria de acceso aleatorio", "Unidad de proceso grafico", "Disco de estado solido", "Fuente de alimentacion"], correcta: 0 },
  { id: "p1-1-3", tema: 1, nivel: 1, pregunta: "Que componente es considerado el cerebro de la computadora?", opciones: ["Disco duro", "Monitor", "CPU", "Memoria RAM"], correcta: 2 },
  { id: "p1-1-4", tema: 1, nivel: 1, pregunta: "Cual de estos es un dispositivo de almacenamiento?", opciones: ["Mouse", "Escaner", "Webcam", "Disco duro"], correcta: 3 },
  { id: "p1-1-5", tema: 1, nivel: 1, pregunta: "Para que sirve principalmente un teclado?", opciones: ["Mostrar imagenes", "Ingresar texto y comandos", "Almacenar archivos", "Conectar a internet"], correcta: 1 },

  // Nivel 2
  { id: "p1-2-1", tema: 1, nivel: 2, pregunta: "Que componente convierte la corriente alterna en continua para la PC?", opciones: ["Fuente de poder", "Tarjeta grafica", "Memoria RAM", "Disipador"], correcta: 0 },
  { id: "p1-2-2", tema: 1, nivel: 2, pregunta: "Que dispositivo permite digitalizar documentos en papel?", opciones: ["Proyector", "Escaner", "Joystick", "Plotter"], correcta: 1 },
  { id: "p1-2-3", tema: 1, nivel: 2, pregunta: "Cual es una memoria volatil que pierde datos al apagar el equipo?", opciones: ["SSD", "Disco duro", "RAM", "Memoria USB"], correcta: 2 },
  { id: "p1-2-4", tema: 1, nivel: 2, pregunta: "Cual es la funcion principal de la tarjeta grafica?", opciones: ["Administrar la red", "Regular el voltaje", "Almacenar archivos", "Procesar y renderizar imagenes"], correcta: 3 },
  { id: "p1-2-5", tema: 1, nivel: 2, pregunta: "Que sigla en ingles corresponde a la Unidad Central de Procesamiento?", opciones: ["GPU", "CPU", "PSU", "HDD"], correcta: 1 },

  // Nivel 3
  { id: "p1-3-1", tema: 1, nivel: 3, pregunta: "Que elemento evita que el CPU se sobrecaliente?", opciones: ["Disipador y ventilador", "Fuente de poder", "Chipset", "BIOS"], correcta: 0 },
  { id: "p1-3-2", tema: 1, nivel: 3, pregunta: "Cual de estos es un estandar moderno de memoria RAM?", opciones: ["SATA III", "DDR4", "PCIe 4.0", "NVMe"], correcta: 1 },
  { id: "p1-3-3", tema: 1, nivel: 3, pregunta: "Que interfaz se usa para conectar un SSD de alto rendimiento?", opciones: ["VGA", "HDMI", "NVMe", "RJ45"], correcta: 2 },
  { id: "p1-3-4", tema: 1, nivel: 3, pregunta: "Que significa que un componente sea hot-swappable?", opciones: ["Que se calienta mucho", "Que requiere refrigeracion liquida", "Que solo funciona en frio", "Que se conecta o desconecta sin apagar el equipo"], correcta: 3 },
  { id: "p1-3-5", tema: 1, nivel: 3, pregunta: "Donde se instala el CPU en la placa madre?", opciones: ["En un zocalo o socket", "En un puerto USB", "En una ranura PCIe", "En el conector SATA"], correcta: 0 },

  // Nivel 4
  { id: "p1-4-1", tema: 1, nivel: 4, pregunta: "Que unidad dentro del CPU realiza operaciones aritmeticas y logicas?", opciones: ["ALU", "BIOS", "Chipset", "VRM"], correcta: 0 },
  { id: "p1-4-2", tema: 1, nivel: 4, pregunta: "Que arquitectura usa la misma memoria para instrucciones y datos?", opciones: ["Harvard", "Von Neumann", "RISC", "CISC"], correcta: 1 },
  { id: "p1-4-3", tema: 1, nivel: 4, pregunta: "Que tecnologia permite ejecutar dos hilos por nucleo?", opciones: ["Overclocking", "Undervolting", "Hyper-Threading", "Turbo Boost"], correcta: 2 },
  { id: "p1-4-4", tema: 1, nivel: 4, pregunta: "Que magnitud mide la frecuencia de un procesador?", opciones: ["Bytes", "Voltios", "Vatios", "Hertz"], correcta: 3 },
  { id: "p1-4-5", tema: 1, nivel: 4, pregunta: "Que chip conectaba historicamente CPU, RAM y GPU en placas antiguas?", opciones: ["Northbridge", "Southbridge", "BIOS", "CMOS"], correcta: 0 },

  // Nivel 5
  { id: "p1-5-1", tema: 1, nivel: 5, pregunta: "Que nivel de cache esta mas cerca del nucleo del CPU?", opciones: ["L1", "L2", "L3", "RAM"], correcta: 0 },
  { id: "p1-5-2", tema: 1, nivel: 5, pregunta: "Que es el thermal throttling?", opciones: ["Aumentar la frecuencia al maximo", "Reducir la frecuencia para evitar sobrecalentamiento", "Apagar los ventiladores", "Elevar el voltaje"], correcta: 1 },
  { id: "p1-5-3", tema: 1, nivel: 5, pregunta: "Que tecnica ejecuta varias etapas de instrucciones en paralelo?", opciones: ["Paginacion", "Fragmentacion", "Pipelining", "Encriptacion"], correcta: 2 },
  { id: "p1-5-4", tema: 1, nivel: 5, pregunta: "Que conector alimenta la placa madre moderna con 24 pines?", opciones: ["Molex", "SATA", "PCIe de 6 pines", "ATX de 24 pines"], correcta: 3 },
  { id: "p1-5-5", tema: 1, nivel: 5, pregunta: "Que significa full-duplex en un bus?", opciones: ["Transmite y recibe a la vez", "Solo transmite", "Solo recibe", "Alterna por turnos"], correcta: 0 },

  // Nivel 6
  { id: "p1-6-1", tema: 1, nivel: 6, pregunta: "Que registro del CPU guarda la direccion de la siguiente instruccion?", opciones: ["Acumulador", "Contador de programa (PC)", "Registro de banderas", "Puntero de pila"], correcta: 1 },
  { id: "p1-6-2", tema: 1, nivel: 6, pregunta: "Como se llama cuando dos procesos acceden a la misma memoria sin control?", opciones: ["Deadlock", "Thrashing", "Condicion de carrera", "Paginacion"], correcta: 2 },
  { id: "p1-6-3", tema: 1, nivel: 6, pregunta: "Que es un page fault?", opciones: ["Una falla de red", "Un error de sintaxis", "Una falla del disco", "Una referencia a memoria no presente en RAM"], correcta: 3 },
  { id: "p1-6-4", tema: 1, nivel: 6, pregunta: "Que tecnologia de almacenamiento no tiene partes moviles?", opciones: ["SSD", "HDD", "Disquete", "Cinta magnetica"], correcta: 0 },
  { id: "p1-6-5", tema: 1, nivel: 6, pregunta: "Que tecnica permite a la CPU predecir la siguiente instruccion a ejecutar?", opciones: ["Paginacion", "Cifrado", "Prediccion de saltos", "Compresion"], correcta: 2 },

  /* ===== TEMA 2: SOFTWARE ===== */
  // Nivel 1
  { id: "p2-1-1", tema: 2, nivel: 1, pregunta: "Que es el software?", opciones: ["La parte fisica de la computadora", "El conjunto de programas y datos", "Un tipo de cable", "Un componente electronico"], correcta: 1 },
  { id: "p2-1-2", tema: 2, nivel: 1, pregunta: "Cual de estos es un sistema operativo?", opciones: ["Word", "Windows", "Excel", "Chrome"], correcta: 1 },
  { id: "p2-1-3", tema: 2, nivel: 1, pregunta: "Que programa se usa para escribir documentos de texto?", opciones: ["Photoshop", "Calculadora", "Procesador de texto", "Reproductor de musica"], correcta: 2 },
  { id: "p2-1-4", tema: 2, nivel: 1, pregunta: "Que significa software libre?", opciones: ["Que es gratis siempre", "Que no tiene dueño", "Que solo funciona en Linux", "Que se puede usar, estudiar, modificar y distribuir"], correcta: 3 },
  { id: "p2-1-5", tema: 2, nivel: 1, pregunta: "Cual de estos es un navegador web?", opciones: ["Firefox", "Windows", "Excel", "Antivirus"], correcta: 0 },

  // Nivel 2
  { id: "p2-2-1", tema: 2, nivel: 2, pregunta: "Que es una actualizacion de software?", opciones: ["Una mejora o correccion del programa", "Un virus", "Un archivo de imagen", "Un tipo de hardware"], correcta: 0 },
  { id: "p2-2-2", tema: 2, nivel: 2, pregunta: "Que programa sirve para ver paginas de internet?", opciones: ["Editor de video", "Navegador web", "Hoja de calculo", "Compresor"], correcta: 1 },
  { id: "p2-2-3", tema: 2, nivel: 2, pregunta: "Que es una licencia de software?", opciones: ["Un antivirus", "Un tipo de memoria", "El permiso legal para usar el programa", "Un lenguaje de programacion"], correcta: 2 },
  { id: "p2-2-4", tema: 2, nivel: 2, pregunta: "Cual de estos es software de hoja de calculo?", opciones: ["Photoshop", "PowerPoint", "Bloc de notas", "Excel"], correcta: 3 },
  { id: "p2-2-5", tema: 2, nivel: 2, pregunta: "Que hace un antivirus?", opciones: ["Detecta y elimina programas maliciosos", "Acelera el internet", "Crea documentos", "Repara la pantalla"], correcta: 0 },

  // Nivel 3
  { id: "p2-3-1", tema: 2, nivel: 3, pregunta: "Que es el firmware?", opciones: ["Software grabado en un dispositivo para controlarlo", "Un tipo de cable", "Una red social", "Un componente de la RAM"], correcta: 0 },
  { id: "p2-3-2", tema: 2, nivel: 3, pregunta: "Cual es la diferencia entre software de sistema y de aplicacion?", opciones: ["No hay diferencia", "El de sistema administra el equipo; el de aplicacion hace tareas para el usuario", "El de aplicacion es siempre gratis", "El de sistema es hardware"], correcta: 1 },
  { id: "p2-3-3", tema: 2, nivel: 3, pregunta: "Que es una maquina virtual?", opciones: ["Un equipo fisico pequeño", "Un tipo de virus", "Un entorno que simula una computadora dentro de otra", "Una red de computadoras"], correcta: 2 },
  { id: "p2-3-4", tema: 2, nivel: 3, pregunta: "Que significa codigo abierto (open source)?", opciones: ["Que el codigo es secreto", "Que el programa es de pago", "Que solo funciona sin internet", "Que el codigo fuente esta disponible para revisar y modificar"], correcta: 3 },
  { id: "p2-3-5", tema: 2, nivel: 3, pregunta: "Que es una API?", opciones: ["Una interfaz que permite comunicar programas entre si", "Un antivirus", "Un tipo de pantalla", "Un lenguaje de marcado"], correcta: 0 },

  // Nivel 4
  { id: "p2-4-1", tema: 2, nivel: 4, pregunta: "Que es un controlador (driver)?", opciones: ["Un programa que permite al sistema comunicarse con el hardware", "Un tipo de memoria", "Un cable de datos", "Una red social"], correcta: 0 },
  { id: "p2-4-2", tema: 2, nivel: 4, pregunta: "Que significa deploy o despliegue en software?", opciones: ["Borrar el programa", "Poner una aplicacion en funcionamiento para los usuarios", "Escribir el codigo", "Diseñar la interfaz"], correcta: 1 },
  { id: "p2-4-3", tema: 2, nivel: 4, pregunta: "Que es una version beta?", opciones: ["La version final", "Una version antigua", "Una version en pruebas previa al lanzamiento", "Un parche de seguridad"], correcta: 2 },
  { id: "p2-4-4", tema: 2, nivel: 4, pregunta: "Que es el software como servicio (SaaS)?", opciones: ["Un programa instalado en el disco", "Un tipo de hardware", "Una licencia perpetua", "Un software que se usa por internet mediante suscripcion"], correcta: 3 },
  { id: "p2-4-5", tema: 2, nivel: 4, pregunta: "Que es un bug?", opciones: ["Un error o fallo en el programa", "Una mejora", "Un tipo de archivo", "Un dispositivo de entrada"], correcta: 0 },

  // Nivel 5
  { id: "p2-5-1", tema: 2, nivel: 5, pregunta: "Que es la deuda tecnica?", opciones: ["El costo futuro de soluciones rapidas mal implementadas", "Un prestamo para comprar software", "Una licencia vencida", "Un impuesto sobre el hardware"], correcta: 0 },
  { id: "p2-5-2", tema: 2, nivel: 5, pregunta: "Que es el refactoring?", opciones: ["Reescribir el programa desde cero", "Mejorar la estructura interna del codigo sin cambiar su comportamiento", "Eliminar funciones", "Comprimir archivos"], correcta: 1 },
  { id: "p2-5-3", tema: 2, nivel: 5, pregunta: "Que es un entorno de desarrollo integrado (IDE)?", opciones: ["Un servidor de internet", "Un tipo de base de datos", "Un programa que reune herramientas para programar", "Un antivirus"], correcta: 2 },
  { id: "p2-5-4", tema: 2, nivel: 5, pregunta: "Que significa que un software sea escalable?", opciones: ["Que ocupa poco espacio", "Que es gratuito", "Que tiene muchos colores", "Que puede crecer en usuarios o carga sin perder rendimiento"], correcta: 3 },
  { id: "p2-5-5", tema: 2, nivel: 5, pregunta: "Que es un parche (patch)?", opciones: ["Una correccion aplicada al software", "Un tipo de cable", "Un componente de red", "Un lenguaje de programacion"], correcta: 0 },

  // Nivel 6
  { id: "p2-6-1", tema: 2, nivel: 6, pregunta: "Que es la integracion continua (CI)?", opciones: ["Automatizar la integracion y pruebas del codigo con frecuencia", "Instalar programas en cada PC", "Un tipo de base de datos", "Comprimir el codigo"], correcta: 0 },
  { id: "p2-6-2", tema: 2, nivel: 6, pregunta: "Que es un contenedor como Docker?", opciones: ["Un equipo fisico", "Un paquete que incluye una app y sus dependencias para ejecutarse igual en cualquier entorno", "Un lenguaje de programacion", "Una base de datos"], correcta: 1 },
  { id: "p2-6-3", tema: 2, nivel: 6, pregunta: "Que es la computacion en la nube?", opciones: ["Guardar archivos solo en el disco local", "Un tipo de hardware", "Usar recursos informaticos a traves de internet", "Un lenguaje de programacion"], correcta: 2 },
  { id: "p2-6-4", tema: 2, nivel: 6, pregunta: "Que es un microservicio?", opciones: ["Un programa monolitico", "Un antivirus", "Un componente de hardware", "Una aplicacion dividida en servicios pequeños e independientes"], correcta: 3 },
  { id: "p2-6-5", tema: 2, nivel: 6, pregunta: "Que es un rollback?", opciones: ["Volver a una version anterior del software", "Acelerar el programa", "Instalar un driver", "Crear una base de datos"], correcta: 0 },

  /* ===== TEMA 3: PROGRAMACION ===== */
  // Nivel 1
  { id: "p3-1-1", tema: 3, nivel: 1, pregunta: "Que es una variable?", opciones: ["Un espacio para guardar un valor", "Un tipo de bucle", "Un error del programa", "Una funcion del sistema"], correcta: 0 },
  { id: "p3-1-2", tema: 3, nivel: 1, pregunta: "Que estructura repite instrucciones?", opciones: ["Condicional", "Bucle", "Variable", "Comentario"], correcta: 1 },
  { id: "p3-1-3", tema: 3, nivel: 1, pregunta: "Que palabra clave suele indicar una condicion?", opciones: ["for", "print", "if", "return"], correcta: 2 },
  { id: "p3-1-4", tema: 3, nivel: 1, pregunta: "Que simbolo se usa comunmente para asignar un valor?", opciones: ["==", "!=", "+", "="], correcta: 3 },
  { id: "p3-1-5", tema: 3, nivel: 1, pregunta: "Que es un algoritmo?", opciones: ["Una secuencia de pasos para resolver un problema", "Un lenguaje de programacion", "Un tipo de computadora", "Un archivo"], correcta: 0 },

  // Nivel 2
  { id: "p3-2-1", tema: 3, nivel: 2, pregunta: "Que es una funcion?", opciones: ["Un bloque de codigo reutilizable que realiza una tarea", "Un tipo de dato", "Un error", "Una variable global"], correcta: 0 },
  { id: "p3-2-2", tema: 3, nivel: 2, pregunta: "Que tipo de dato representa verdadero o falso?", opciones: ["Entero", "Booleano", "Cadena", "Decimal"], correcta: 1 },
  { id: "p3-2-3", tema: 3, nivel: 2, pregunta: "Que es una cadena (string)?", opciones: ["Un numero", "Una lista de numeros", "Una secuencia de caracteres", "Un bucle"], correcta: 2 },
  { id: "p3-2-4", tema: 3, nivel: 2, pregunta: "Que hace una estructura if/else?", opciones: ["Repite codigo", "Guarda datos", "Define funciones", "Toma decisiones segun una condicion"], correcta: 3 },
  { id: "p3-2-5", tema: 3, nivel: 2, pregunta: "Que es un arreglo (array)?", opciones: ["Una coleccion ordenada de elementos", "Un tipo de bucle", "Un error", "Una funcion del sistema"], correcta: 0 },

  // Nivel 3
  { id: "p3-3-1", tema: 3, nivel: 3, pregunta: "Que es la recursion?", opciones: ["Una funcion que se llama a si misma", "Un bucle infinito siempre", "Un tipo de variable", "Un comentario"], correcta: 0 },
  { id: "p3-3-2", tema: 3, nivel: 3, pregunta: "Que es un puntero?", opciones: ["Un tipo de numero", "Una variable que guarda una direccion de memoria", "Un bucle", "Una funcion"], correcta: 1 },
  { id: "p3-3-3", tema: 3, nivel: 3, pregunta: "Que complejidad tiene la busqueda binaria?", opciones: ["O(n)", "O(n2)", "O(log n)", "O(1)"], correcta: 2 },
  { id: "p3-3-4", tema: 3, nivel: 3, pregunta: "Que estructura usa LIFO (ultimo en entrar, primero en salir)?", opciones: ["Cola", "Lista", "Arbol", "Pila"], correcta: 3 },
  { id: "p3-3-5", tema: 3, nivel: 3, pregunta: "Que estructura usa FIFO (primero en entrar, primero en salir)?", opciones: ["Cola", "Pila", "Arbol binario", "Grafo"], correcta: 0 },

  // Nivel 4
  { id: "p3-4-1", tema: 3, nivel: 4, pregunta: "Que es la programacion orientada a objetos?", opciones: ["Un paradigma basado en clases y objetos", "Un lenguaje especifico", "Un tipo de base de datos", "Un sistema operativo"], correcta: 0 },
  { id: "p3-4-2", tema: 3, nivel: 4, pregunta: "Que es la herencia en POO?", opciones: ["Guardar datos en disco", "Una clase que deriva propiedades de otra", "Un tipo de bucle", "Una funcion matematica"], correcta: 1 },
  { id: "p3-4-3", tema: 3, nivel: 4, pregunta: "Que es el polimorfismo?", opciones: ["Que una variable cambia de tipo sola", "Un error de compilacion", "Que un mismo metodo puede comportarse distinto segun el objeto", "Un tipo de comentario"], correcta: 2 },
  { id: "p3-4-4", tema: 3, nivel: 4, pregunta: "Que es la encapsulacion?", opciones: ["Dividir el programa en archivos", "Comprimir el codigo", "Documentar funciones", "Ocultar los datos internos de un objeto"], correcta: 3 },
  { id: "p3-4-5", tema: 3, nivel: 4, pregunta: "Que es una excepcion?", opciones: ["Un evento que interrumpe el flujo normal del programa", "Una variable global", "Un tipo de bucle", "Un comentario"], correcta: 0 },

  // Nivel 5
  { id: "p3-5-1", tema: 3, nivel: 5, pregunta: "Que es la compilacion?", opciones: ["Traducir el codigo fuente a lenguaje maquina antes de ejecutarlo", "Ejecutar el codigo linea por linea", "Escribir comentarios", "Guardar el archivo"], correcta: 0 },
  { id: "p3-5-2", tema: 3, nivel: 5, pregunta: "Que es la interpretacion?", opciones: ["Compilar todo antes de ejecutar", "Ejecutar el codigo traduciendolo en tiempo de ejecucion", "Un tipo de error", "Un lenguaje de bajo nivel"], correcta: 1 },
  { id: "p3-5-3", tema: 3, nivel: 5, pregunta: "Que es un deadlock?", opciones: ["Un bucle infinito", "Un error de sintaxis", "Una situacion donde dos procesos se bloquean mutuamente esperando recursos", "Un tipo de variable"], correcta: 2 },
  { id: "p3-5-4", tema: 3, nivel: 5, pregunta: "Que es la memoizacion?", opciones: ["Borrar la memoria", "Comprimir datos", "Cifrar datos", "Guardar resultados de calculos para reutilizarlos"], correcta: 3 },
  { id: "p3-5-5", tema: 3, nivel: 5, pregunta: "Que es la notacion Big-O?", opciones: ["Una forma de medir la eficiencia de un algoritmo", "Un lenguaje de programacion", "Un tipo de variable", "Una funcion matematica sin uso en programacion"], correcta: 0 },

  // Nivel 6
  { id: "p3-6-1", tema: 3, nivel: 6, pregunta: "Que es la concurrencia?", opciones: ["La ejecucion de multiples tareas que progresan al mismo tiempo", "Un tipo de bucle", "Un error de compilacion", "Un lenguaje"], correcta: 0 },
  { id: "p3-6-2", tema: 3, nivel: 6, pregunta: "Que es un closure?", opciones: ["Un tipo de bucle", "Una funcion que recuerda el ambito donde fue creada", "Un error de sintaxis", "Una variable global"], correcta: 1 },
  { id: "p3-6-3", tema: 3, nivel: 6, pregunta: "Que es la inmutabilidad?", opciones: ["Que un valor puede cambiar libremente", "Un tipo de bucle", "Que un valor no puede modificarse tras crearse", "Una funcion matematica"], correcta: 2 },
  { id: "p3-6-4", tema: 3, nivel: 6, pregunta: "Que es la recursion de cola (tail recursion)?", opciones: ["Una recursion que nunca termina", "Un tipo de bucle", "Un error", "Una recursion donde la llamada es lo ultimo que se ejecuta"], correcta: 3 },
  { id: "p3-6-5", tema: 3, nivel: 6, pregunta: "Que es la evaluacion perezosa (lazy evaluation)?", opciones: ["Retrasar el calculo hasta que el valor sea necesario", "Calcular todo al inicio", "Un tipo de error", "Una funcion de orden superior"], correcta: 0 },

  /* ===== TEMA 4: REDES E INTERNET ===== */
  // Nivel 1
  { id: "p4-1-1", tema: 4, nivel: 1, pregunta: "Que es internet?", opciones: ["Una red mundial de computadoras conectadas", "Un programa", "Un tipo de hardware", "Una marca de computadoras"], correcta: 0 },
  { id: "p4-1-2", tema: 4, nivel: 1, pregunta: "Que permite conectarse a internet sin cables?", opciones: ["USB", "WiFi", "HDMI", "VGA"], correcta: 1 },
  { id: "p4-1-3", tema: 4, nivel: 1, pregunta: "Que es una pagina web?", opciones: ["Un archivo de musica", "Un dispositivo", "Un documento accesible por internet", "Un cable de red"], correcta: 2 },
  { id: "p4-1-4", tema: 4, nivel: 1, pregunta: "Que significa la sigla WWW?", opciones: ["Web Web Web", "Wide Web World", "World Work Web", "World Wide Web"], correcta: 3 },
  { id: "p4-1-5", tema: 4, nivel: 1, pregunta: "Que es el correo electronico?", opciones: ["Un servicio para enviar mensajes por internet", "Una red social", "Un navegador", "Un buscador"], correcta: 0 },

  // Nivel 2
  { id: "p4-2-1", tema: 4, nivel: 2, pregunta: "Que es un navegador?", opciones: ["Un programa para acceder a paginas web", "Un cable", "Un modem", "Un servidor"], correcta: 0 },
  { id: "p4-2-2", tema: 4, nivel: 2, pregunta: "Que es una URL?", opciones: ["Un tipo de red", "La direccion de un recurso en internet", "Un protocolo de correo", "Un antivirus"], correcta: 1 },
  { id: "p4-2-3", tema: 4, nivel: 2, pregunta: "Que es un buscador?", opciones: ["Un navegador", "Un servidor de correo", "Un sitio que indexa paginas para encontrar informacion", "Un tipo de cable"], correcta: 2 },
  { id: "p4-2-4", tema: 4, nivel: 2, pregunta: "Que dispositivo distribuye internet a varios equipos en casa?", opciones: ["Monitor", "Impresora", "Teclado", "Router"], correcta: 3 },
  { id: "p4-2-5", tema: 4, nivel: 2, pregunta: "Que es la banda ancha?", opciones: ["Una conexion de internet de alta velocidad", "Un tipo de WiFi", "Un navegador", "Un servidor"], correcta: 0 },

  // Nivel 3
  { id: "p4-3-1", tema: 4, nivel: 3, pregunta: "Que es una direccion IP?", opciones: ["Un identificador unico de un dispositivo en una red", "Un tipo de cable", "Un protocolo de correo", "Un antivirus"], correcta: 0 },
  { id: "p4-3-2", tema: 4, nivel: 3, pregunta: "Que protocolo se usa para cargar paginas web?", opciones: ["FTP", "HTTP", "SMTP", "SSH"], correcta: 1 },
  { id: "p4-3-3", tema: 4, nivel: 3, pregunta: "Que significa LAN?", opciones: ["Red de area amplia", "Un lenguaje de red", "Red de area local", "Un protocolo"], correcta: 2 },
  { id: "p4-3-4", tema: 4, nivel: 3, pregunta: "Que protocolo traduce nombres de dominio a direcciones IP?", opciones: ["HTTP", "FTP", "SMTP", "DNS"], correcta: 3 },
  { id: "p4-3-5", tema: 4, nivel: 3, pregunta: "Que es un servidor?", opciones: ["Un equipo que ofrece servicios o recursos a otros", "Un cliente", "Un cable", "Un navegador"], correcta: 0 },

  // Nivel 4
  { id: "p4-4-1", tema: 4, nivel: 4, pregunta: "Que es un firewall?", opciones: ["Un sistema que filtra el trafico de red", "Un tipo de cable", "Un navegador", "Una base de datos"], correcta: 0 },
  { id: "p4-4-2", tema: 4, nivel: 4, pregunta: "Que es la mascara de subred?", opciones: ["Un tipo de IP publica", "Un valor que define que parte de la IP es red y que parte es host", "Un protocolo de correo", "Un antivirus"], correcta: 1 },
  { id: "p4-4-3", tema: 4, nivel: 4, pregunta: "Que es DHCP?", opciones: ["Un protocolo de correo", "Un lenguaje web", "Un protocolo que asigna direcciones IP automaticamente", "Un tipo de cable"], correcta: 2 },
  { id: "p4-4-4", tema: 4, nivel: 4, pregunta: "Que es la latencia?", opciones: ["La velocidad de descarga", "El ancho de banda", "El numero de usuarios", "El tiempo que tarda un dato en ir y volver"], correcta: 3 },
  { id: "p4-4-5", tema: 4, nivel: 4, pregunta: "Que es HTTPS?", opciones: ["La version segura de HTTP con cifrado", "Un correo", "Un tipo de red", "Un navegador"], correcta: 0 },

  // Nivel 5
  { id: "p4-5-1", tema: 4, nivel: 5, pregunta: "Que es una VPN?", opciones: ["Una red privada virtual que cifra la conexion", "Un tipo de WiFi", "Un navegador", "Un protocolo de correo"], correcta: 0 },
  { id: "p4-5-2", tema: 4, nivel: 5, pregunta: "Que es NAT?", opciones: ["Un tipo de cable", "La traduccion de direcciones privadas a publicas", "Un protocolo de correo", "Un antivirus"], correcta: 1 },
  { id: "p4-5-3", tema: 4, nivel: 5, pregunta: "Que es un ataque DDoS?", opciones: ["Un robo de contraseña", "Un tipo de virus", "Saturar un servicio con trafico masivo", "Un correo falso"], correcta: 2 },
  { id: "p4-5-4", tema: 4, nivel: 5, pregunta: "Que es el enrutamiento?", opciones: ["Cifrar datos", "Comprimir paquetes", "Asignar IP", "Elegir la ruta que siguen los paquetes en la red"], correcta: 3 },
  { id: "p4-5-5", tema: 4, nivel: 5, pregunta: "Que es un paquete en redes?", opciones: ["Una unidad de datos que viaja por la red", "Un cable", "Un programa", "Un tipo de IP"], correcta: 0 },

  // Nivel 6
  { id: "p4-6-1", tema: 4, nivel: 6, pregunta: "Que modelo divide la comunicacion en 7 capas?", opciones: ["OSI", "TCP", "HTTP", "IP"], correcta: 0 },
  { id: "p4-6-2", tema: 4, nivel: 6, pregunta: "Que protocolo garantiza la entrega ordenada de datos?", opciones: ["UDP", "TCP", "IP", "ARP"], correcta: 1 },
  { id: "p4-6-3", tema: 4, nivel: 6, pregunta: "Que es ARP?", opciones: ["Un protocolo de correo", "Un cifrado", "El protocolo que resuelve direcciones IP a MAC", "Un tipo de cable"], correcta: 2 },
  { id: "p4-6-4", tema: 4, nivel: 6, pregunta: "Que es una direccion MAC?", opciones: ["Una direccion logica de red", "Una marca de computadora", "Un protocolo web", "Un identificador fisico unico de la tarjeta de red"], correcta: 3 },
  { id: "p4-6-5", tema: 4, nivel: 6, pregunta: "Que es el subnetting?", opciones: ["Dividir una red en subredes mas pequeñas", "Cifrar la red", "Un tipo de cable", "Un navegador"], correcta: 0 },

  /* ===== TEMA 5: HISTORIA Y CULTURA GENERAL ===== */
  // Nivel 1
  { id: "p5-1-1", tema: 5, nivel: 1, pregunta: "Quien pinto la Mona Lisa?", opciones: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Miguel Angel"], correcta: 0 },
  { id: "p5-1-2", tema: 5, nivel: 1, pregunta: "Cual es el oceano mas grande del mundo?", opciones: ["Atlantico", "Indico", "Pacifica", "Artico"], correcta: 2 },
  { id: "p5-1-3", tema: 5, nivel: 1, pregunta: "En que continente esta Egipto?", opciones: ["Asia", "Europa", "Oceania", "Africa"], correcta: 3 },
  { id: "p5-1-4", tema: 5, nivel: 1, pregunta: "Cuantos continentes se reconocen comunmente?", opciones: ["7", "5", "6", "4"], correcta: 0 },
  { id: "p5-1-5", tema: 5, nivel: 1, pregunta: "Cual es el planeta mas grande del sistema solar?", opciones: ["Saturno", "Jupiter", "Neptuno", "Tierra"], correcta: 1 },

  // Nivel 2
  { id: "p5-2-1", tema: 5, nivel: 2, pregunta: "Quien escribio Don Quijote de la Mancha?", opciones: ["Miguel de Cervantes", "Gabriel Garcia Marquez", "Pablo Neruda", "Jorge Luis Borges"], correcta: 0 },
  { id: "p5-2-2", tema: 5, nivel: 2, pregunta: "En que pais se originaron los Juegos Olimpicos?", opciones: ["Italia", "Grecia", "Francia", "Egipto"], correcta: 1 },
  { id: "p5-2-3", tema: 5, nivel: 2, pregunta: "Cual es la capital de Francia?", opciones: ["Londres", "Roma", "Paris", "Madrid"], correcta: 2 },
  { id: "p5-2-4", tema: 5, nivel: 2, pregunta: "Que gas respiramos principalmente para vivir?", opciones: ["Nitrogeno", "Hidrogeno", "Dioxido de carbono", "Oxigeno"], correcta: 3 },
  { id: "p5-2-5", tema: 5, nivel: 2, pregunta: "Quien fue el primer hombre en pisar la Luna?", opciones: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "Michael Collins"], correcta: 0 },

  // Nivel 3
  { id: "p5-3-1", tema: 5, nivel: 3, pregunta: "En que año cayo el Muro de Berlin?", opciones: ["1989", "1991", "1975", "1969"], correcta: 0 },
  { id: "p5-3-2", tema: 5, nivel: 3, pregunta: "Quien desarrollo la teoria de la relatividad?", opciones: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"], correcta: 1 },
  { id: "p5-3-3", tema: 5, nivel: 3, pregunta: "Cual es el idioma con mas hablantes nativos?", opciones: ["Ingles", "Español", "Chino mandarin", "Hindi"], correcta: 2 },
  { id: "p5-3-4", tema: 5, nivel: 3, pregunta: "Que civilizacion construyo las piramides de Giza?", opciones: ["Los mayas", "Los romanos", "Los griegos", "Los egipcios"], correcta: 3 },
  { id: "p5-3-5", tema: 5, nivel: 3, pregunta: "Quien escribio Cien años de soledad?", opciones: ["Gabriel Garcia Marquez", "Mario Vargas Llosa", "Julio Cortazar", "Isabel Allende"], correcta: 0 },

  // Nivel 4
  { id: "p5-4-1", tema: 5, nivel: 4, pregunta: "Que muro dividio una ciudad alemana hasta 1989?", opciones: ["El Muro de Berlin", "La Gran Muralla", "El Muro de Adriano", "El Muro de los Lamentos"], correcta: 0 },
  { id: "p5-4-2", tema: 5, nivel: 4, pregunta: "Quien lidero la independencia de la India mediante la no violencia?", opciones: ["Nelson Mandela", "Mahatma Gandhi", "Martin Luther King", "Jawaharlal Nehru"], correcta: 1 },
  { id: "p5-4-3", tema: 5, nivel: 4, pregunta: "En que año llego el ser humano a la Luna?", opciones: ["1972", "1965", "1969", "1961"], correcta: 2 },
  { id: "p5-4-4", tema: 5, nivel: 4, pregunta: "Que pais regalo la Estatua de la Libertad a Estados Unidos?", opciones: ["Reino Unido", "España", "Italia", "Francia"], correcta: 3 },
  { id: "p5-4-5", tema: 5, nivel: 4, pregunta: "Quien pinto La noche estrellada?", opciones: ["Vincent van Gogh", "Claude Monet", "Salvador Dali", "Pablo Picasso"], correcta: 0 },

  // Nivel 5
  { id: "p5-5-1", tema: 5, nivel: 5, pregunta: "Que acontecimiento detono la Primera Guerra Mundial en 1914?", opciones: ["El asesinato del archiduque Francisco Fernando", "La caida del Muro de Berlin", "El ataque a Pearl Harbor", "La Revolucion Rusa"], correcta: 0 },
  { id: "p5-5-2", tema: 5, nivel: 5, pregunta: "Quien fue el primer presidente de los Estados Unidos?", opciones: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], correcta: 1 },
  { id: "p5-5-3", tema: 5, nivel: 5, pregunta: "Cual es el desierto calido mas grande del mundo?", opciones: ["Gobi", "Kalahari", "Sahara", "Atacama"], correcta: 2 },
  { id: "p5-5-4", tema: 5, nivel: 5, pregunta: "Que cientifico propuso la evolucion por seleccion natural?", opciones: ["Gregor Mendel", "Louis Pasteur", "Galileo Galilei", "Charles Darwin"], correcta: 3 },
  { id: "p5-5-5", tema: 5, nivel: 5, pregunta: "En que pais se invento el papel?", opciones: ["China", "Egipto", "Grecia", "India"], correcta: 0 },

  // Nivel 6
  { id: "p5-6-1", tema: 5, nivel: 6, pregunta: "Que emperador frances fue exiliado en la isla de Santa Elena?", opciones: ["Napoleon Bonaparte", "Luis XVI", "Carlos Magno", "Robespierre"], correcta: 0 },
  { id: "p5-6-2", tema: 5, nivel: 6, pregunta: "Que tratado puso fin a la Primera Guerra Mundial en 1919?", opciones: ["Tratado de Tordesillas", "Tratado de Versalles", "Tratado de Roma", "Paz de Westfalia"], correcta: 1 },
  { id: "p5-6-3", tema: 5, nivel: 6, pregunta: "Quien fue la primera mujer en ganar un Premio Nobel?", opciones: ["Rosalind Franklin", "Ada Lovelace", "Marie Curie", "Jane Austen"], correcta: 2 },
  { id: "p5-6-4", tema: 5, nivel: 6, pregunta: "Que antigua civilizacion desarrollo la escritura cuneiforme?", opciones: ["Los egipcios", "Los griegos", "Los mayas", "Los sumerios"], correcta: 3 },
  { id: "p5-6-5", tema: 5, nivel: 6, pregunta: "En que año termino la Segunda Guerra Mundial?", opciones: ["1945", "1939", "1918", "1950"], correcta: 0 },

  /* ===== TEMA 6: CURIOSIDADES TECNOLOGICAS ===== */
  // Nivel 1
  { id: "p6-1-1", tema: 6, nivel: 1, pregunta: "Que significa la sigla www en una direccion web?", opciones: ["World Wide Web", "Web World Wide", "Wide World Web", "World Web Wide"], correcta: 0 },
  { id: "p6-1-2", tema: 6, nivel: 1, pregunta: "Cuantos bits forman un byte?", opciones: ["4", "8", "16", "32"], correcta: 1 },
  { id: "p6-1-3", tema: 6, nivel: 1, pregunta: "Que empresa creo el sistema operativo Windows?", opciones: ["Apple", "IBM", "Google", "Microsoft"], correcta: 3 },
  { id: "p6-1-4", tema: 6, nivel: 1, pregunta: "Que es un emoji?", opciones: ["Un archivo", "Una imagen pequeña para expresar ideas", "Un lenguaje de programacion", "Un tipo de correo"], correcta: 1 },
  { id: "p6-1-5", tema: 6, nivel: 1, pregunta: "Que red social es conocida por videos cortos y musica?", opciones: ["TikTok", "LinkedIn", "Wikipedia", "Gmail"], correcta: 0 },

  // Nivel 2
  { id: "p6-2-1", tema: 6, nivel: 2, pregunta: "Que significan las siglas IA?", opciones: ["Inteligencia Artificial", "Internet Avanzado", "Informacion Automatica", "Interfaz de Audio"], correcta: 0 },
  { id: "p6-2-2", tema: 6, nivel: 2, pregunta: "Que es un meme en internet?", opciones: ["Un virus", "Contenido humoristico que se comparte y replica", "Un tipo de archivo", "Una red social"], correcta: 1 },
  { id: "p6-2-3", tema: 6, nivel: 2, pregunta: "Que es WiFi?", opciones: ["Un tipo de cable", "Un navegador", "Una tecnologia de conexion inalambrica", "Un servidor"], correcta: 2 },
  { id: "p6-2-4", tema: 6, nivel: 2, pregunta: "Cuantos colores tiene tradicionalmente el arcoiris?", opciones: ["5", "6", "8", "7"], correcta: 3 },
  { id: "p6-2-5", tema: 6, nivel: 2, pregunta: "Que significa estar online?", opciones: ["Conectado a internet", "Apagado", "Guardado en disco", "Sin bateria"], correcta: 0 },

  // Nivel 3
  { id: "p6-3-1", tema: 6, nivel: 3, pregunta: "Que es la nube en informatica?", opciones: ["Servidores remotos que ofrecen servicios por internet", "El cielo", "Un tipo de cable", "Un programa instalado"], correcta: 0 },
  { id: "p6-3-2", tema: 6, nivel: 3, pregunta: "Que significa bug informatico?", opciones: ["Una actualizacion", "Un error o fallo en un programa", "Un antivirus", "Un tipo de memoria"], correcta: 1 },
  { id: "p6-3-3", tema: 6, nivel: 3, pregunta: "De donde viene el termino bug segun la anecdota famosa?", opciones: ["De un raton", "De un virus", "De una polilla encontrada en una computadora", "De un programa"], correcta: 2 },
  { id: "p6-3-4", tema: 6, nivel: 3, pregunta: "Que es un hacker de sombrero blanco?", opciones: ["Un delincuente", "Un vendedor", "Un diseñador", "Un experto que busca fallos para mejorar la seguridad"], correcta: 3 },
  { id: "p6-3-5", tema: 6, nivel: 3, pregunta: "A cuanto equivale aproximadamente un gigabyte?", opciones: ["Aproximadamente mil millones de bytes", "Mil bytes", "Un millon de bits", "Cien bytes"], correcta: 0 },

  // Nivel 4
  { id: "p6-4-1", tema: 6, nivel: 4, pregunta: "Cual fue el primer lenguaje de programacion de alto nivel?", opciones: ["Fortran", "Python", "Java", "C++"], correcta: 0 },
  { id: "p6-4-2", tema: 6, nivel: 4, pregunta: "Que empresa creo el primer iPhone?", opciones: ["Samsung", "Apple", "Google", "Nokia"], correcta: 1 },
  { id: "p6-4-3", tema: 6, nivel: 4, pregunta: "Que significa beta en un software?", opciones: ["Version final", "Version antigua", "Version en pruebas", "Version de pago"], correcta: 2 },
  { id: "p6-4-4", tema: 6, nivel: 4, pregunta: "Que dice la Ley de Moore?", opciones: ["Una ley de transito", "Una ley de la fisica", "Una ley de internet", "Que los transistores se duplican aproximadamente cada dos años"], correcta: 3 },
  { id: "p6-4-5", tema: 6, nivel: 4, pregunta: "Que asistente virtual pertenece a Amazon?", opciones: ["Alexa", "Siri", "Cortana", "Google Assistant"], correcta: 0 },

  // Nivel 5
  { id: "p6-5-1", tema: 6, nivel: 5, pregunta: "Que es el phishing?", opciones: ["Un engaño para robar datos personales", "Un tipo de red", "Un lenguaje", "Un hardware"], correcta: 0 },
  { id: "p6-5-2", tema: 6, nivel: 5, pregunta: "Que es un deepfake?", opciones: ["Un tipo de archivo", "Un contenido audiovisual falso generado con IA", "Un antivirus", "Una red social"], correcta: 1 },
  { id: "p6-5-3", tema: 6, nivel: 5, pregunta: "Que significa streaming?", opciones: ["Guardar archivos", "Un tipo de cable", "Transmitir contenido por internet sin descargarlo por completo", "Un navegador"], correcta: 2 },
  { id: "p6-5-4", tema: 6, nivel: 5, pregunta: "Cual es el buscador mas usado del mundo?", opciones: ["Bing", "Yahoo", "DuckDuckGo", "Google"], correcta: 3 },
  { id: "p6-5-5", tema: 6, nivel: 5, pregunta: "Que significa login?", opciones: ["Iniciar sesion", "Cerrar sesion", "Descargar", "Compartir"], correcta: 0 },

  // Nivel 6
  { id: "p6-6-1", tema: 6, nivel: 6, pregunta: "Que es la computacion cuantica?", opciones: ["Un tipo de computacion que usa qubits y principios cuanticos", "Una computadora muy rapida normal", "Un lenguaje", "Una red social"], correcta: 0 },
  { id: "p6-6-2", tema: 6, nivel: 6, pregunta: "Que es el machine learning?", opciones: ["Un tipo de hardware", "Una rama de la IA donde las maquinas aprenden de datos", "Un navegador", "Un lenguaje de programacion"], correcta: 1 },
  { id: "p6-6-3", tema: 6, nivel: 6, pregunta: "Que es un bitcoin?", opciones: ["Una red social", "Un tipo de antivirus", "Una criptomoneda", "Un navegador"], correcta: 2 },
  { id: "p6-6-4", tema: 6, nivel: 6, pregunta: "Que es la blockchain?", opciones: ["Un tipo de cable", "Un navegador", "Un lenguaje", "Un registro distribuido e inmutable de transacciones"], correcta: 3 },
  { id: "p6-6-5", tema: 6, nivel: 6, pregunta: "Que es un algoritmo de recomendacion?", opciones: ["Un sistema que sugiere contenido segun tus gustos", "Un antivirus", "Un hardware", "Un lenguaje"], correcta: 0 },
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { TEMAS, NIVELES, PREGUNTAS };
}
