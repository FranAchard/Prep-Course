 // En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = hola;
var miNombre= 'Francisco Achard';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = null;
var miEdad= 20;

// Crea una variable booleana:
const nuevoBool = null;
var soyMayor= true

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - null === 5;
Math(10 - 5);//5
// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * null === 40 ;
Math(10 * 4);//40
// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === null;
Math(21 % 5); // 1

// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
 var saludo= 'Hola Como estas?';
  return saludo;
} 
devolverString()
'Hola Como estas?';


function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var cuenta= x + y;
  return cuenta;
}
suma(10, 5)
15;


function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var cuentaRestar = x - y;
return cuentaRestar
}
resta (10, 5)
5;


function multiplica(x, y) {
if (x == y) 
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var multiplicar = x * y;
  return multiplicar
}
multiplica(2, 2)
4;

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var dividir= x / y;
return dividir
}
divide(8, 8)
1;

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
    {return true}
  return false
}
sonIguales(1, 10)
false;
sonIguales(1, 1)
true;


function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length === str2.length) 
    {return true}
  return false
}
tienenMismaLongitud('hola', 'hola' )
true;
tienenMismaLongitud('hola', 'hol' )
false;



function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num <90 ) {
    return true
  }
  return false
}
menosQueNoventa(10)
true;
menosQueNoventa(100)
false;


function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num >50) {
    return true
  }
  return false
}
mayorQueCincuenta(100)
true;
mayorQueCincuenta(10)
false;



function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
var resto= x % y;
return resto  
}
obtenerResto(25 , 5)
0;

function  esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  var division=num % 2;
  if (division == 0) {
    return true
  }
  return false
}
esPar(4)
true;
esPar(3)
false;

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  var division=num % 2;
  if (division == 1) {
    return true
  }
  return false
}
esImpar(10)
false;
esImpar(5)
true;


  function elevarAlCuadrado(num) {
    // Devuelve el valor de "num" elevado al cuadrado
    // ojo: No es raiz cuadrada!
    // Tu código:
    var cuenta =Math.pow(num , 2)
    return cuenta
  }
elevarAlCuadrado(2)
4;


function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
 var cuenta= Math.pow (num , 3)
 return cuenta
}
elevarAlCubo(3)
27;


function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
   var cuenta= Math.pow (num , exponent)
 return cuenta

}
elevar(2, 5)
32;

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var redondeo = Math.round (num);
  return redondeo
}
redondearNumero(5.2)
5;
redondearNumero(5.7)
6;

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var haciaArriba = Math.ceil (num);
  return haciaArriba
}
redondearHaciaArriba(7.1)
8;

function numeroRandom(num) {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  var numero= Math.random(num);
  return numero
}
numeroRandom(5)
0.5432824528733315;


function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero >= 0) {
    return 'Es positivo'
  }
  return 'Es negativo'
}
esPositivo(-10)
'Es negativo';
esPositivo(10)
'Es positivo';


function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  var agrega = str + '!'
  return agrega
}
agregarSimboloExclamacion('Buenaaaas')
'Buenaaaas!';

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var junte = nombre + ' ' + apellido
  return junte
}
combinarNombres('Francisco' , 'Achard' )
'Francisco Achard'


function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var saludo= "Hola "+ nombre + "!";
  return saludo
}
obtenerSaludo("Francisco")
'Hola Francisco!';

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var rectangulo = alto * ancho ;
  return rectangulo
}
obtenerAreaRectangulo (15, 30)
450;


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  var perimetro = lado * 4;
  return perimetro
}
retornarPerimetro(20)
80;

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
var area= base * altura;  
var lados= area / 2;
return lados 
}
areaDelTriangulo(10, 15)
75;

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var valor= euro * 1.20;
return valor
}
deEuroAdolar(50)
60;

function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  
if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o'  || letra === 'u') {
  return "Dato incorrecto"
}
return "Dato incorrecto"
}
esVocal("a")
'Dato incorrecto';
esVocal('SPLÑMZNV')
'Dato incorrecto';


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
