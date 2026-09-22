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
  { id: "p1-1-2", tema: 1, nivel: 1, pregunta: "Que significa la sigla RAM?", opciones: ["Memoria de acceso aleatorio", "Unidad de procesamiento grafico", "Disco duro de estado solido", "Fuente de poder del equipo"], correcta: 0 },
  { id: "p1-1-3", tema: 1, nivel: 1, pregunta: "Que componente es considerado el cerebro de la computadora?", opciones: ["Disco duro", "Monitor", "CPU", "Memoria RAM"], correcta: 2 },
  { id: "p1-1-4", tema: 1, nivel: 1, pregunta: "Cual de estos es un dispositivo de almacenamiento?", opciones: ["Mouse optico", "Escaner de mesa", "Webcam HD", "Disco duro"], correcta: 3 },
  { id: "p1-1-5", tema: 1, nivel: 1, pregunta: "Para que sirve principalmente un teclado?", opciones: ["Ver imagenes en pantalla", "Ingresar texto y comandos", "Guardar archivos del equipo", "Navegar por paginas web"], correcta: 1 },

  // Nivel 2
  { id: "p1-2-1", tema: 1, nivel: 2, pregunta: "Que componente convierte la corriente alterna en continua para la PC?", opciones: ["Fuente de poder interna", "Tarjeta grafica dedicada", "Memoria RAM del sistema", "Disipador con ventilador"], correcta: 0 },
  { id: "p1-2-2", tema: 1, nivel: 2, pregunta: "Que dispositivo permite digitalizar documentos en papel?", opciones: ["Proyector", "Escaner", "Joystick", "Plotter"], correcta: 1 },
  { id: "p1-2-3", tema: 1, nivel: 2, pregunta: "Cual es una memoria volatil que pierde datos al apagar el equipo?", opciones: ["Disco SSD", "Disco duro", "Memoria RAM", "Memoria USB"], correcta: 2 },
  { id: "p1-2-4", tema: 1, nivel: 2, pregunta: "Cual es la funcion principal de la tarjeta grafica?", opciones: ["Administrar la conexion de red", "Regular el voltaje del equipo", "Almacenar archivos del sistema", "Procesar graficos e imagenes"], correcta: 3 },
  { id: "p1-2-5", tema: 1, nivel: 2, pregunta: "Que sigla en ingles corresponde a la Unidad Central de Procesamiento?", opciones: ["GPU", "CPU", "PSU", "HDD"], correcta: 1 },

  // Nivel 3
  { id: "p1-3-1", tema: 1, nivel: 3, pregunta: "Que elemento evita que el CPU se sobrecaliente?", opciones: ["Sistema de enfriamiento", "Fuente de poder interna", "Chipset de la placa base", "Memoria BIOS del equipo"], correcta: 0 },
  { id: "p1-3-2", tema: 1, nivel: 3, pregunta: "Cual de estos es un estandar moderno de memoria RAM?", opciones: ["SATA III", "DDR4", "PCIe 4.0", "NVMe"], correcta: 1 },
  { id: "p1-3-3", tema: 1, nivel: 3, pregunta: "Que interfaz se usa para conectar un SSD de alto rendimiento?", opciones: ["VGA", "HDMI", "NVMe", "RJ45"], correcta: 2 },
  { id: "p1-3-4", tema: 1, nivel: 3, pregunta: "Que significa que un componente sea hot-swappable?", opciones: ["Que alcanza altas temperaturas", "Que exige refrigeracion liquida", "Que solo funciona en frio extremo", "Que se cambia sin apagar nada"], correcta: 3 },
  { id: "p1-3-5", tema: 1, nivel: 3, pregunta: "Donde se instala el CPU en la placa madre?", opciones: ["En un zocalo dedicado", "En un puerto USB libre", "En una ranura PCIe x16", "En el conector SATA III"], correcta: 0 },

  // Nivel 4
  { id: "p1-4-1", tema: 1, nivel: 4, pregunta: "Que unidad dentro del CPU realiza operaciones aritmeticas y logicas?", opciones: ["ALU", "BIOS", "Chipset", "VRM"], correcta: 0 },
  { id: "p1-4-2", tema: 1, nivel: 4, pregunta: "Que arquitectura usa la misma memoria para instrucciones y datos?", opciones: ["La Harvard", "La Von Neumann", "La segmentada", "La hibrida"], correcta: 1 },
  { id: "p1-4-3", tema: 1, nivel: 4, pregunta: "Que tecnologia permite ejecutar dos hilos por nucleo?", opciones: ["El overclocking", "El undervolting", "Hyper-Threading", "El turbo boost"], correcta: 2 },
  { id: "p1-4-4", tema: 1, nivel: 4, pregunta: "Que magnitud mide la frecuencia de un procesador?", opciones: ["Bytes", "Voltios", "Vatios", "Hertz"], correcta: 3 },
  { id: "p1-4-5", tema: 1, nivel: 4, pregunta: "Que chip conectaba historicamente CPU, RAM y GPU en placas antiguas?", opciones: ["Northbridge", "Southbridge", "BIOS", "CMOS"], correcta: 0 },

  // Nivel 5
  { id: "p1-5-1", tema: 1, nivel: 5, pregunta: "Que nivel de cache esta mas cerca del nucleo del CPU?", opciones: ["L1", "L2", "L3", "RAM"], correcta: 0 },
  { id: "p1-5-2", tema: 1, nivel: 5, pregunta: "Que es el thermal throttling?", opciones: ["Subir la frecuencia al maximo", "Bajar la frecuencia por calor", "Apagar todos los ventiladores", "Elevar el voltaje del procesador"], correcta: 1 },
  { id: "p1-5-3", tema: 1, nivel: 5, pregunta: "Que tecnica ejecuta varias etapas de instrucciones en paralelo?", opciones: ["Paginacion", "Fragmentacion", "Pipelining", "Encriptacion"], correcta: 2 },
  { id: "p1-5-4", tema: 1, nivel: 5, pregunta: "Que conector alimenta la placa madre moderna con 24 pines?", opciones: ["Conector Molex", "Conector SATA", "PCIe de 6 pines", "ATX de 24 pines"], correcta: 3 },
  { id: "p1-5-5", tema: 1, nivel: 5, pregunta: "Que significa full-duplex en un bus?", opciones: ["Envia y recibe a la vez", "Solo envia datos de salida", "Solo recibe datos de entrada", "Alterna envio y recepcion"], correcta: 0 },

  // Nivel 6
  { id: "p1-6-1", tema: 1, nivel: 6, pregunta: "Que registro del CPU guarda la direccion de la siguiente instruccion?", opciones: ["El acumulador central", "El program counter", "El registro de banderas", "El puntero de la pila"], correcta: 1 },
  { id: "p1-6-2", tema: 1, nivel: 6, pregunta: "Como se llama cuando dos procesos acceden a la misma memoria sin control?", opciones: ["Bloqueo por deadlock", "Saturacion por thrashing", "Condicion de carrera", "Error de paginacion"], correcta: 2 },
  { id: "p1-6-3", tema: 1, nivel: 6, pregunta: "Que es un page fault?", opciones: ["Una falla en la red del equipo", "Un error de sintaxis del codigo", "Una falla fisica del disco", "Pagina no presente en RAM"], correcta: 3 },
  { id: "p1-6-4", tema: 1, nivel: 6, pregunta: "Que tecnologia de almacenamiento no tiene partes moviles?", opciones: ["SSD", "HDD", "Disquete", "Cinta magnetica"], correcta: 0 },
  { id: "p1-6-5", tema: 1, nivel: 6, pregunta: "Que tecnica permite a la CPU predecir la siguiente instruccion a ejecutar?", opciones: ["Paginacion de memoria", "Cifrado de instrucciones", "Prediccion de saltos", "Compresion de codigo"], correcta: 2 },

  /* ===== TEMA 2: SOFTWARE ===== */
  // Nivel 1
  { id: "p2-1-1", tema: 2, nivel: 1, pregunta: "Que es el software?", opciones: ["La parte fisica del equipo", "Los programas y datos", "Un tipo de cable de red", "Un componente electronico"], correcta: 1 },
  { id: "p2-1-2", tema: 2, nivel: 1, pregunta: "Cual de estos es un sistema operativo?", opciones: ["Word", "Windows", "Excel", "Chrome"], correcta: 1 },
  { id: "p2-1-3", tema: 2, nivel: 1, pregunta: "Que programa se usa para escribir documentos de texto?", opciones: ["Photoshop", "Calculadora", "Procesador de texto", "Reproductor de musica"], correcta: 2 },
  { id: "p2-1-4", tema: 2, nivel: 1, pregunta: "Que significa software libre?", opciones: ["Que es gratuito para todos", "Que no tiene dueño legal", "Que es exclusivo de Linux", "Que se usa, estudia y reparte"], correcta: 3 },
  { id: "p2-1-5", tema: 2, nivel: 1, pregunta: "Cual de estos es un navegador web?", opciones: ["Firefox", "Windows", "Excel", "Antivirus"], correcta: 0 },

  // Nivel 2
  { id: "p2-2-1", tema: 2, nivel: 2, pregunta: "Que es una actualizacion de software?", opciones: ["Mejora o repara el programa", "Es un virus informatico", "Es un archivo de imagen", "Es un componente fisico"], correcta: 0 },
  { id: "p2-2-2", tema: 2, nivel: 2, pregunta: "Que programa sirve para ver paginas de internet?", opciones: ["Editor de video", "Navegador web", "Hoja de calculo", "Compresor"], correcta: 1 },
  { id: "p2-2-3", tema: 2, nivel: 2, pregunta: "Que es una licencia de software?", opciones: ["Un antivirus comercial", "Un tipo de memoria RAM", "El permiso legal de uso", "Un lenguaje de programacion"], correcta: 2 },
  { id: "p2-2-4", tema: 2, nivel: 2, pregunta: "Cual de estos es software de hoja de calculo?", opciones: ["Photoshop", "PowerPoint", "Bloc de notas", "Excel"], correcta: 3 },
  { id: "p2-2-5", tema: 2, nivel: 2, pregunta: "Que hace un antivirus?", opciones: ["Detecta programas maliciosos", "Acelera la conexion a internet", "Crea documentos de texto", "Repara la pantalla rota"], correcta: 0 },

  // Nivel 3
  { id: "p2-3-1", tema: 2, nivel: 3, pregunta: "Que es el firmware?", opciones: ["Programa interno del equipo", "Cable interno del equipo", "Red social de moda", "Modulo de memoria RAM"], correcta: 0 },
  { id: "p2-3-2", tema: 2, nivel: 3, pregunta: "Cual es la diferencia entre software de sistema y de aplicacion?", opciones: ["Ambos hacen lo mismo", "Sistema gestiona, app atiende", "App gratis, sistema pago", "Sistema es hardware"], correcta: 1 },
  { id: "p2-3-3", tema: 2, nivel: 3, pregunta: "Que es una maquina virtual?", opciones: ["Un equipo fisico compacto", "Un virus muy peligroso", "Una computadora virtual", "Una red de computadoras"], correcta: 2 },
  { id: "p2-3-4", tema: 2, nivel: 3, pregunta: "Que significa codigo abierto (open source)?", opciones: ["Que el codigo es secreto", "Que el programa cuesta dinero", "Que funciona sin internet", "Que el codigo es revisable"], correcta: 3 },
  { id: "p2-3-5", tema: 2, nivel: 3, pregunta: "Que es una API?", opciones: ["Enlace entre programas", "Antivirus de pago", "Pantalla de 15 pulgadas", "Lenguaje de marcas web"], correcta: 0 },

  // Nivel 4
  { id: "p2-4-1", tema: 2, nivel: 4, pregunta: "Que es un controlador (driver)?", opciones: ["Enlace sistema-hardware", "Tipo de memoria RAM volatil", "Cable de datos USB", "Red social popular"], correcta: 0 },
  { id: "p2-4-2", tema: 2, nivel: 4, pregunta: "Que significa deploy o despliegue en software?", opciones: ["Borrar el programa instalado", "Lanzar la app al publico", "Escribir el codigo fuente", "Diseñar la interfaz grafica"], correcta: 1 },
  { id: "p2-4-3", tema: 2, nivel: 4, pregunta: "Que es una version beta?", opciones: ["La version final y estable", "Una version antigua del año", "Una version de prueba", "Un parche de seguridad"], correcta: 2 },
  { id: "p2-4-4", tema: 2, nivel: 4, pregunta: "Que es el software como servicio (SaaS)?", opciones: ["Programa en disco local", "Hardware de la empresa", "Licencia perpetua", "App web por suscripcion"], correcta: 3 },
  { id: "p2-4-5", tema: 2, nivel: 4, pregunta: "Que es un bug?", opciones: ["Un fallo del programa", "Una mejora del sistema", "Un tipo de archivo", "Un dispositivo externo"], correcta: 0 },

  // Nivel 5
  { id: "p2-5-1", tema: 2, nivel: 5, pregunta: "Que es la deuda tecnica?", opciones: ["Deuda por codigo apresurado", "Prestamo para comprar software", "Licencia vencida hace meses", "Impuesto sobre el hardware"], correcta: 0 },
  { id: "p2-5-2", tema: 2, nivel: 5, pregunta: "Que es el refactoring?", opciones: ["Rehacer el programa entero", "Mejorar el codigo interno", "Borrar funciones en desuso", "Reducir el tamaño final"], correcta: 1 },
  { id: "p2-5-3", tema: 2, nivel: 5, pregunta: "Que es un entorno de desarrollo integrado (IDE)?", opciones: ["Servidor en internet", "Base de datos SQL", "Suite para programar", "Antivirus gratuito"], correcta: 2 },
  { id: "p2-5-4", tema: 2, nivel: 5, pregunta: "Que significa que un software sea escalable?", opciones: ["Que ocupa poco espacio", "Que es totalmente gratis", "Que tiene muchos colores", "Que soporta mas usuarios"], correcta: 3 },
  { id: "p2-5-5", tema: 2, nivel: 5, pregunta: "Que es un parche (patch)?", opciones: ["Parche que corrige errores", "Cable de conexion USB", "Pieza de la red local", "Lenguaje para programar"], correcta: 0 },

  // Nivel 6
  { id: "p2-6-1", tema: 2, nivel: 6, pregunta: "Que es la integracion continua (CI)?", opciones: ["Integrar y probar seguido", "Instalar programas en PC", "Usar una base de datos", "Comprimir el codigo final"], correcta: 0 },
  { id: "p2-6-2", tema: 2, nivel: 6, pregunta: "Que es un contenedor como Docker?", opciones: ["Equipo fisico real", "App empaquetada portable", "Lenguaje de programacion", "Base de datos SQL"], correcta: 1 },
  { id: "p2-6-3", tema: 2, nivel: 6, pregunta: "Que es la computacion en la nube?", opciones: ["Guardar todo en el disco", "Comprar hardware propio", "Usar recursos por internet", "Aprender a programar"], correcta: 2 },
  { id: "p2-6-4", tema: 2, nivel: 6, pregunta: "Que es un microservicio?", opciones: ["Un programa monolitico", "Un antivirus comun", "Un componente fisico", "Una app por partes"], correcta: 3 },
  { id: "p2-6-5", tema: 2, nivel: 6, pregunta: "Que es un rollback?", opciones: ["Volver a la version previa", "Acelerar el programa actual", "Instalar un driver nuevo", "Crear una base de datos"], correcta: 0 },

  /* ===== TEMA 3: PROGRAMACION ===== */
  // Nivel 1
  { id: "p3-1-1", tema: 3, nivel: 1, pregunta: "Que es una variable?", opciones: ["Guarda un valor", "Un tipo de bucle", "Un error del programa", "Una funcion del sistema"], correcta: 0 },
  { id: "p3-1-2", tema: 3, nivel: 1, pregunta: "Que estructura repite instrucciones?", opciones: ["Condicional", "Bucle", "Variable", "Comentario"], correcta: 1 },
  { id: "p3-1-3", tema: 3, nivel: 1, pregunta: "Que palabra clave suele indicar una condicion?", opciones: ["for", "print", "if", "return"], correcta: 2 },
  { id: "p3-1-4", tema: 3, nivel: 1, pregunta: "Que simbolo se usa comunmente para asignar un valor?", opciones: ["==", "!=", "+", "="], correcta: 3 },
  { id: "p3-1-5", tema: 3, nivel: 1, pregunta: "Que es un algoritmo?", opciones: ["Pasos para resolver algo", "Un lenguaje de programacion", "Un tipo de computadora", "Un archivo de texto"], correcta: 0 },

  // Nivel 2
  { id: "p3-2-1", tema: 3, nivel: 2, pregunta: "Que es una funcion?", opciones: ["Hace una tarea concreta", "Un tipo de dato texto", "Un error de codigo", "Una variable global"], correcta: 0 },
  { id: "p3-2-2", tema: 3, nivel: 2, pregunta: "Que tipo de dato representa verdadero o falso?", opciones: ["Entero", "Booleano", "Cadena", "Decimal"], correcta: 1 },
  { id: "p3-2-3", tema: 3, nivel: 2, pregunta: "Que es una cadena (string)?", opciones: ["Un numero entero", "Una lista de datos", "Texto puro", "Un bucle infinito"], correcta: 2 },
  { id: "p3-2-4", tema: 3, nivel: 2, pregunta: "Que hace una estructura if/else?", opciones: ["Repite bloques de codigo", "Almacena datos en memoria", "Crea funciones nuevas", "Elige segun condicion"], correcta: 3 },
  { id: "p3-2-5", tema: 3, nivel: 2, pregunta: "Que es un arreglo (array)?", opciones: ["Guarda varios datos", "Un tipo de bucle", "Un error de codigo", "Una funcion del sistema"], correcta: 0 },

  // Nivel 3
  { id: "p3-3-1", tema: 3, nivel: 3, pregunta: "Que es la recursion?", opciones: ["Se invoca a si misma", "Es un bucle infinito", "Es un tipo de variable", "Es un comentario"], correcta: 0 },
  { id: "p3-3-2", tema: 3, nivel: 3, pregunta: "Que es un puntero?", opciones: ["Un numero entero", "Apunta a memoria", "Un bucle simple", "Una funcion corta"], correcta: 1 },
  { id: "p3-3-3", tema: 3, nivel: 3, pregunta: "Que complejidad tiene la busqueda binaria?", opciones: ["O(n)", "O(n2)", "O(log n)", "O(1)"], correcta: 2 },
  { id: "p3-3-4", tema: 3, nivel: 3, pregunta: "Que estructura usa LIFO (ultimo en entrar, primero en salir)?", opciones: ["Cola", "Lista", "Arbol", "Pila"], correcta: 3 },
  { id: "p3-3-5", tema: 3, nivel: 3, pregunta: "Que estructura usa FIFO (primero en entrar, primero en salir)?", opciones: ["Cola", "Pila", "Arbol binario", "Grafo"], correcta: 0 },

  // Nivel 4
  { id: "p3-4-1", tema: 3, nivel: 4, pregunta: "Que es la programacion orientada a objetos?", opciones: ["Usa clases y objetos", "Un lenguaje concreto", "Un tipo de base de datos", "Un sistema operativo"], correcta: 0 },
  { id: "p3-4-2", tema: 3, nivel: 4, pregunta: "Que es la herencia en POO?", opciones: ["Salvar datos en disco", "Hija de otra clase", "Tipo de bucle for", "Funcion matematica"], correcta: 1 },
  { id: "p3-4-3", tema: 3, nivel: 4, pregunta: "Que es el polimorfismo?", opciones: ["La variable cambia de tipo", "Ocurre un error grave", "Un metodo, varios usos", "Es solo un comentario"], correcta: 2 },
  { id: "p3-4-4", tema: 3, nivel: 4, pregunta: "Que es la encapsulacion?", opciones: ["Parte el programa", "Comprime el codigo", "Documenta funciones", "Esconde los datos"], correcta: 3 },
  { id: "p3-4-5", tema: 3, nivel: 4, pregunta: "Que es una excepcion?", opciones: ["Corta el flujo normal", "Variable de alcance global", "Bucle de repeticion", "Comentario en codigo"], correcta: 0 },

  // Nivel 5
  { id: "p3-5-1", tema: 3, nivel: 5, pregunta: "Que es la compilacion?", opciones: ["Traduce todo el codigo", "Corre linea por linea", "Agrega comentarios", "Guarda el archivo"], correcta: 0 },
  { id: "p3-5-2", tema: 3, nivel: 5, pregunta: "Que es la interpretacion?", opciones: ["Compila antes de correr", "Traduce mientras ejecuta", "Es un tipo de error", "Es lenguaje de bajo nivel"], correcta: 1 },
  { id: "p3-5-3", tema: 3, nivel: 5, pregunta: "Que es un deadlock?", opciones: ["Un bucle que no termina", "Un error de sintaxis", "Dos procesos atorados", "Un tipo de variable"], correcta: 2 },
  { id: "p3-5-4", tema: 3, nivel: 5, pregunta: "Que es la memoizacion?", opciones: ["Libera la memoria", "Comprime los datos", "Cifra la informacion", "Guarda calculos hechos"], correcta: 3 },
  { id: "p3-5-5", tema: 3, nivel: 5, pregunta: "Que es la notacion Big-O?", opciones: ["Mide la eficiencia", "Un lenguaje nuevo", "Un tipo de variable", "Funcion sin uso real"], correcta: 0 },

  // Nivel 6
  { id: "p3-6-1", tema: 3, nivel: 6, pregunta: "Que es la concurrencia?", opciones: ["Tareas en paralelo", "Tipo de bucle for", "Error de compilacion", "Lenguaje moderno"], correcta: 0 },
  { id: "p3-6-2", tema: 3, nivel: 6, pregunta: "Que es un closure?", opciones: ["Bucle de repeticion", "Funcion con memoria", "Error de sintaxis", "Variable de tipo global"], correcta: 1 },
  { id: "p3-6-3", tema: 3, nivel: 6, pregunta: "Que es la inmutabilidad?", opciones: ["El valor cambia libre", "Es un tipo de bucle", "El valor ya no cambia", "Es funcion matematica"], correcta: 2 },
  { id: "p3-6-4", tema: 3, nivel: 6, pregunta: "Que es la recursion de cola (tail recursion)?", opciones: ["Recursion sin final", "Tipo de bucle for", "Error de codigo", "Llamada al final"], correcta: 3 },
  { id: "p3-6-5", tema: 3, nivel: 6, pregunta: "Que es la evaluacion perezosa (lazy evaluation)?", opciones: ["Calcula solo si se usa", "Calcula todo al inicio", "Es un tipo de error", "Es funcion de orden mayor"], correcta: 0 },

  /* ===== TEMA 4: REDES E INTERNET ===== */
  // Nivel 1
  { id: "p4-1-1", tema: 4, nivel: 1, pregunta: "Que es internet?", opciones: ["La gran red mundial", "Un programa de PC", "Un aparato fisico", "Una marca de laptops"], correcta: 0 },
  { id: "p4-1-2", tema: 4, nivel: 1, pregunta: "Que permite conectarse a internet sin cables?", opciones: ["USB", "WiFi", "HDMI", "VGA"], correcta: 1 },
  { id: "p4-1-3", tema: 4, nivel: 1, pregunta: "Que es una pagina web?", opciones: ["Archivo de musica", "Dispositivo movil", "Pagina web visible", "Cable de red"], correcta: 2 },
  { id: "p4-1-4", tema: 4, nivel: 1, pregunta: "Que significa la sigla WWW?", opciones: ["Web Web Web", "Wide Web World", "World Work Web", "World Wide Web"], correcta: 3 },
  { id: "p4-1-5", tema: 4, nivel: 1, pregunta: "Que es el correo electronico?", opciones: ["Mensajeria electronica", "Red social de fotos", "Navegador de paginas", "Buscador de Google"], correcta: 0 },

  // Nivel 2
  { id: "p4-2-1", tema: 4, nivel: 2, pregunta: "Que es un navegador?", opciones: ["Programa para navegar", "Cable de red largo", "Modem del hogar", "Servidor en la nube"], correcta: 0 },
  { id: "p4-2-2", tema: 4, nivel: 2, pregunta: "Que es una URL?", opciones: ["Clase de red local", "Direccion web exacta", "Protocolo de correo", "Antivirus gratis"], correcta: 1 },
  { id: "p4-2-3", tema: 4, nivel: 2, pregunta: "Que es un buscador?", opciones: ["Navegador conocido", "Servidor de correo", "Motor de busqueda", "Cable de red largo"], correcta: 2 },
  { id: "p4-2-4", tema: 4, nivel: 2, pregunta: "Que dispositivo distribuye internet a varios equipos en casa?", opciones: ["Monitor", "Impresora", "Teclado", "Router"], correcta: 3 },
  { id: "p4-2-5", tema: 4, nivel: 2, pregunta: "Que es la banda ancha?", opciones: ["Internet rapido", "WiFi hogareño", "Navegador veloz", "Servidor remoto"], correcta: 0 },

  // Nivel 3
  { id: "p4-3-1", tema: 4, nivel: 3, pregunta: "Que es una direccion IP?", opciones: ["Numero de un equipo", "Cable de red largo", "Protocolo de correo", "Antivirus gratis"], correcta: 0 },
  { id: "p4-3-2", tema: 4, nivel: 3, pregunta: "Que protocolo se usa para cargar paginas web?", opciones: ["FTP", "HTTP", "SMTP", "SSH"], correcta: 1 },
  { id: "p4-3-3", tema: 4, nivel: 3, pregunta: "Que significa LAN?", opciones: ["Red de area amplia", "Un lenguaje de red", "Red de area local", "Un protocolo"], correcta: 2 },
  { id: "p4-3-4", tema: 4, nivel: 3, pregunta: "Que protocolo traduce nombres de dominio a direcciones IP?", opciones: ["HTTP", "FTP", "SMTP", "DNS"], correcta: 3 },
  { id: "p4-3-5", tema: 4, nivel: 3, pregunta: "Que es un servidor?", opciones: ["Atiende a otros equipos", "Recibe los servicios", "Conecta con cables", "Muestra paginas web"], correcta: 0 },

  // Nivel 4
  { id: "p4-4-1", tema: 4, nivel: 4, pregunta: "Que es un firewall?", opciones: ["Bloquea trafico malo", "Cable de red largo", "Navegador seguro", "Base de datos SQL"], correcta: 0 },
  { id: "p4-4-2", tema: 4, nivel: 4, pregunta: "Que es la mascara de subred?", opciones: ["IP publica fija", "Marca red y host", "Protocolo de correo", "Antivirus gratis"], correcta: 1 },
  { id: "p4-4-3", tema: 4, nivel: 4, pregunta: "Que es DHCP?", opciones: ["Protocolo de correo", "Lenguaje de paginas", "Reparte IPs solo", "Tipo de cable UTP"], correcta: 2 },
  { id: "p4-4-4", tema: 4, nivel: 4, pregunta: "Que es la latencia?", opciones: ["Tasa de descarga", "Ancho de banda", "Usuarios en linea", "Tiempo de respuesta"], correcta: 3 },
  { id: "p4-4-5", tema: 4, nivel: 4, pregunta: "Que es HTTPS?", opciones: ["HTTP con cifrado", "Un correo nuevo", "Un tipo de red", "Un navegador"], correcta: 0 },

  // Nivel 5
  { id: "p4-5-1", tema: 4, nivel: 5, pregunta: "Que es una VPN?", opciones: ["Tunel privado seguro", "WiFi publico abierto", "Navegador privado", "Protocolo de correo"], correcta: 0 },
  { id: "p4-5-2", tema: 4, nivel: 5, pregunta: "Que es NAT?", opciones: ["Cable de red UTP", "Traduce las IPs", "Protocolo de correo", "Antivirus gratis"], correcta: 1 },
  { id: "p4-5-3", tema: 4, nivel: 5, pregunta: "Que es un ataque DDoS?", opciones: ["Robo de contraseñas", "Virus muy dañino", "Colapsar un servidor", "Correo fraudulento"], correcta: 2 },
  { id: "p4-5-4", tema: 4, nivel: 5, pregunta: "Que es el enrutamiento?", opciones: ["Cifra la informacion", "Comprime los paquetes", "Asigna direcciones IP", "Define rutas de red"], correcta: 3 },
  { id: "p4-5-5", tema: 4, nivel: 5, pregunta: "Que es un paquete en redes?", opciones: ["Fragmento de datos", "Cable de cobre", "Programa pequeño", "Direccion IP"], correcta: 0 },

  // Nivel 6
  { id: "p4-6-1", tema: 4, nivel: 6, pregunta: "Que modelo divide la comunicacion en 7 capas?", opciones: ["OSI", "TCP", "HTTP", "IP"], correcta: 0 },
  { id: "p4-6-2", tema: 4, nivel: 6, pregunta: "Que protocolo garantiza la entrega ordenada de datos?", opciones: ["UDP", "TCP", "IP", "ARP"], correcta: 1 },
  { id: "p4-6-3", tema: 4, nivel: 6, pregunta: "Que es ARP?", opciones: ["Protocolo de correo", "Tipo de cifrado", "Une IP con MAC", "Tipo de cable"], correcta: 2 },
  { id: "p4-6-4", tema: 4, nivel: 6, pregunta: "Que es una direccion MAC?", opciones: ["Direccion logica", "Marca del equipo", "Protocolo web", "Codigo de la tarjeta"], correcta: 3 },
  { id: "p4-6-5", tema: 4, nivel: 6, pregunta: "Que es el subnetting?", opciones: ["Crear subredes", "Cifrar la red", "Cambiar el cable", "Otro navegador"], correcta: 0 },

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
  { id: "p5-3-3", tema: 5, nivel: 3, pregunta: "Cual es el idioma con mas hablantes nativos?", opciones: ["El ingles", "El español", "El mandarin", "El hindi"], correcta: 2 },
  { id: "p5-3-4", tema: 5, nivel: 3, pregunta: "Que civilizacion construyo las piramides de Giza?", opciones: ["Los mayas", "Los romanos", "Los griegos", "Los egipcios"], correcta: 3 },
  { id: "p5-3-5", tema: 5, nivel: 3, pregunta: "Quien escribio Cien años de soledad?", opciones: ["G. Garcia Marquez", "M. Vargas Llosa", "J. Cortazar", "I. Allende"], correcta: 0 },

  // Nivel 4
  { id: "p5-4-1", tema: 5, nivel: 4, pregunta: "Que muro dividio una ciudad alemana hasta 1989?", opciones: ["El Muro de Berlin", "La Gran Muralla", "El Muro de Adriano", "El Muro de los Lamentos"], correcta: 0 },
  { id: "p5-4-2", tema: 5, nivel: 4, pregunta: "Quien lidero la independencia de la India mediante la no violencia?", opciones: ["Nelson Mandela", "Mahatma Gandhi", "Martin Luther King", "Jawaharlal Nehru"], correcta: 1 },
  { id: "p5-4-3", tema: 5, nivel: 4, pregunta: "En que año llego el ser humano a la Luna?", opciones: ["1972", "1965", "1969", "1961"], correcta: 2 },
  { id: "p5-4-4", tema: 5, nivel: 4, pregunta: "Que pais regalo la Estatua de la Libertad a Estados Unidos?", opciones: ["Reino Unido", "España", "Italia", "Francia"], correcta: 3 },
  { id: "p5-4-5", tema: 5, nivel: 4, pregunta: "Quien pinto La noche estrellada?", opciones: ["V. van Gogh", "C. Monet", "S. Dali", "P. Picasso"], correcta: 0 },

  // Nivel 5
  { id: "p5-5-1", tema: 5, nivel: 5, pregunta: "Que acontecimiento detono la Primera Guerra Mundial en 1914?", opciones: ["Magnicidio en Sarajevo", "Caida del Muro de Berlin", "Ataque a Pearl Harbor", "Revolucion Rusa"], correcta: 0 },
  { id: "p5-5-2", tema: 5, nivel: 5, pregunta: "Quien fue el primer presidente de los Estados Unidos?", opciones: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], correcta: 1 },
  { id: "p5-5-3", tema: 5, nivel: 5, pregunta: "Cual es el desierto calido mas grande del mundo?", opciones: ["Gobi", "Kalahari", "Sahara", "Atacama"], correcta: 2 },
  { id: "p5-5-4", tema: 5, nivel: 5, pregunta: "Que cientifico propuso la evolucion por seleccion natural?", opciones: ["Gregor Mendel", "Louis Pasteur", "Galileo Galilei", "Charles Darwin"], correcta: 3 },
  { id: "p5-5-5", tema: 5, nivel: 5, pregunta: "En que pais se invento el papel?", opciones: ["China", "Egipto", "Grecia", "India"], correcta: 0 },

  // Nivel 6
  { id: "p5-6-1", tema: 5, nivel: 6, pregunta: "Que emperador frances fue exiliado en la isla de Santa Elena?", opciones: ["Napoleon", "Luis XVI", "Carlomagno", "Robespierre"], correcta: 0 },
  { id: "p5-6-2", tema: 5, nivel: 6, pregunta: "Que tratado puso fin a la Primera Guerra Mundial en 1919?", opciones: ["Tratado de Tordesillas", "Tratado de Versalles", "Tratado de Roma", "Paz de Westfalia"], correcta: 1 },
  { id: "p5-6-3", tema: 5, nivel: 6, pregunta: "Quien fue la primera mujer en ganar un Premio Nobel?", opciones: ["Rosalind Franklin", "Ada Lovelace", "Marie Curie", "Jane Austen"], correcta: 2 },
  { id: "p5-6-4", tema: 5, nivel: 6, pregunta: "Que antigua civilizacion desarrollo la escritura cuneiforme?", opciones: ["Los egipcios", "Los griegos", "Los mayas", "Los sumerios"], correcta: 3 },
  { id: "p5-6-5", tema: 5, nivel: 6, pregunta: "En que año termino la Segunda Guerra Mundial?", opciones: ["1945", "1939", "1918", "1950"], correcta: 0 },

  /* ===== TEMA 6: CURIOSIDADES TECNOLOGICAS ===== */
  // Nivel 1
  { id: "p6-1-1", tema: 6, nivel: 1, pregunta: "Que significa la sigla www en una direccion web?", opciones: ["World Wide Web", "Web World Wide", "Wide World Web", "World Web Wide"], correcta: 0 },
  { id: "p6-1-2", tema: 6, nivel: 1, pregunta: "Cuantos bits forman un byte?", opciones: ["4", "8", "16", "32"], correcta: 1 },
  { id: "p6-1-3", tema: 6, nivel: 1, pregunta: "Que empresa creo el sistema operativo Windows?", opciones: ["Apple Inc", "IBM Corp", "Google LLC", "Microsoft"], correcta: 3 },
  { id: "p6-1-4", tema: 6, nivel: 1, pregunta: "Que es un emoji?", opciones: ["Archivo adjunto", "Icono expresivo", "Lenguaje tecnico", "Correo normal"], correcta: 1 },
  { id: "p6-1-5", tema: 6, nivel: 1, pregunta: "Que red social es conocida por videos cortos y musica?", opciones: ["TikTok", "LinkedIn", "Wikipedia", "Gmail"], correcta: 0 },

  // Nivel 2
  { id: "p6-2-1", tema: 6, nivel: 2, pregunta: "Que significan las siglas IA?", opciones: ["Inteligencia Artificial", "Internet Avanzado", "Informacion Automatica", "Interfaz de Audio"], correcta: 0 },
  { id: "p6-2-2", tema: 6, nivel: 2, pregunta: "Que es un meme en internet?", opciones: ["Un virus de moda", "Humor que circula", "Archivo multimedia", "Nueva red social"], correcta: 1 },
  { id: "p6-2-3", tema: 6, nivel: 2, pregunta: "Que es WiFi?", opciones: ["Tipo de cable", "Navegador web", "Red sin cables", "Servidor local"], correcta: 2 },
  { id: "p6-2-4", tema: 6, nivel: 2, pregunta: "Cuantos colores tiene tradicionalmente el arcoiris?", opciones: ["5", "6", "8", "7"], correcta: 3 },
  { id: "p6-2-5", tema: 6, nivel: 2, pregunta: "Que significa estar online?", opciones: ["En linea", "Apagado", "Guardado", "Sin bateria"], correcta: 0 },

  // Nivel 3
  { id: "p6-3-1", tema: 6, nivel: 3, pregunta: "Que es la nube en informatica?", opciones: ["Granja de servidores", "Nubes en el cielo", "Red de cables", "App instalada"], correcta: 0 },
  { id: "p6-3-2", tema: 6, nivel: 3, pregunta: "Que significa bug informatico?", opciones: ["Parche menor", "Error de codigo", "Antivirus pago", "Memoria RAM"], correcta: 1 },
  { id: "p6-3-3", tema: 6, nivel: 3, pregunta: "De donde viene el termino bug segun la anecdota famosa?", opciones: ["De un raton", "De un virus", "De una polilla", "De un programa"], correcta: 2 },
  { id: "p6-3-4", tema: 6, nivel: 3, pregunta: "Que es un hacker de sombrero blanco?", opciones: ["Delincuente digital", "Vendedor de cursos", "Diseñador grafico", "Experto en seguridad"], correcta: 3 },
  { id: "p6-3-5", tema: 6, nivel: 3, pregunta: "A cuanto equivale aproximadamente un gigabyte?", opciones: ["Miles de millones", "Miles de bytes", "Millones de bits", "Cientos de bytes"], correcta: 0 },

  // Nivel 4
  { id: "p6-4-1", tema: 6, nivel: 4, pregunta: "Cual fue el primer lenguaje de programacion de alto nivel?", opciones: ["Fortran", "Python", "Java", "C++"], correcta: 0 },
  { id: "p6-4-2", tema: 6, nivel: 4, pregunta: "Que empresa creo el primer iPhone?", opciones: ["Samsung", "Apple", "Google", "Nokia"], correcta: 1 },
  { id: "p6-4-3", tema: 6, nivel: 4, pregunta: "Que significa beta en un software?", opciones: ["La final", "La vieja", "La de prueba", "La de pago"], correcta: 2 },
  { id: "p6-4-4", tema: 6, nivel: 4, pregunta: "Que dice la Ley de Moore?", opciones: ["Norma de transito", "Ley de la fisica", "Regla de internet", "Mas transistores"], correcta: 3 },
  { id: "p6-4-5", tema: 6, nivel: 4, pregunta: "Que asistente virtual pertenece a Amazon?", opciones: ["Alexa", "Siri", "Cortana", "Google Assistant"], correcta: 0 },

  // Nivel 5
  { id: "p6-5-1", tema: 6, nivel: 5, pregunta: "Que es el phishing?", opciones: ["Pesca de datos", "Red privada", "Lenguaje web", "Pieza fisica"], correcta: 0 },
  { id: "p6-5-2", tema: 6, nivel: 5, pregunta: "Que es un deepfake?", opciones: ["Archivo de video", "Video falso con IA", "Antivirus nuevo", "Red social nueva"], correcta: 1 },
  { id: "p6-5-3", tema: 6, nivel: 5, pregunta: "Que significa streaming?", opciones: ["Guardar archivos", "Usar un cable", "Ver sin descargar", "Abrir el navegador"], correcta: 2 },
  { id: "p6-5-4", tema: 6, nivel: 5, pregunta: "Cual es el buscador mas usado del mundo?", opciones: ["Bing", "Yahoo", "DuckDuckGo", "Google"], correcta: 3 },
  { id: "p6-5-5", tema: 6, nivel: 5, pregunta: "Que significa login?", opciones: ["Iniciar sesion", "Cerrar sesion", "Descargar", "Compartir"], correcta: 0 },

  // Nivel 6
  { id: "p6-6-1", tema: 6, nivel: 6, pregunta: "Que es la computacion cuantica?", opciones: ["Usa qubits", "PC ultrarapida", "Lenguaje nuevo", "Red social"], correcta: 0 },
  { id: "p6-6-2", tema: 6, nivel: 6, pregunta: "Que es el machine learning?", opciones: ["Pieza de hardware", "Aprende de datos", "Navegador web", "Lenguaje de codigo"], correcta: 1 },
  { id: "p6-6-3", tema: 6, nivel: 6, pregunta: "Que es un bitcoin?", opciones: ["Una red social", "Un tipo de antivirus", "Una criptomoneda", "Un navegador"], correcta: 2 },
  { id: "p6-6-4", tema: 6, nivel: 6, pregunta: "Que es la blockchain?", opciones: ["Cable de red", "Navegador web", "Lenguaje nuevo", "Cadena de bloques"], correcta: 3 },
  { id: "p6-6-5", tema: 6, nivel: 6, pregunta: "Que es un algoritmo de recomendacion?", opciones: ["Recomienda contenido", "Antivirus nuevo", "Pieza de hardware", "Lenguaje de codigo"], correcta: 0 },
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { TEMAS, NIVELES, PREGUNTAS };
}
