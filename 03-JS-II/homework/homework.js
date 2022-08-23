// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if(x > y){
    return x
  }else if( y > x){
    return y
  }else if(x === y){
    return x || y};
}
obtenerMayor(10, 9)
10;
obtenerMayor(10, 12)
12;
obtenerMayor(10, 10)
10;

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
if (edad >= 18) {
  return "Allowed"
}else{
  return "Not allowed"
}
}
mayoriaDeEdad(15)
'Not allowed';
mayoriaDeEdad(19)
'Allowed';
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
if (status === 1) {
  return "Online"
}else if (status === 2) {
  return "Away"
}else{
  return "Offline"}
}
conection(1)
"Online";
conection(2)
"Away";
conection(0)
'Offline';

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
if (idioma === "aleman") {
  return "Guten Tag!"
}else if (idioma === "ingles") {
 return "Hello!"
} else if (idioma === "mandarin") {
  return "Ni Hao!"
} else{ 
  return undefined;}
}
saludo("ingles")
"Hello!";
saludo("aleman")
'Guten Tag!';
saludo("mandarin")
'Ni Hao!';
saludo("otro")
undefined;

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch (color) {
    case  "blue":
      return "This is blue"
      break;
  case "red":
   return "This is red"
   break;
   case "green":
    return "This is green"
    break;
    case "orange":
      return "This is orange"
      break;
    default : null 
     return "Color not found"
      break;
  }
}
colors("")
'Color not found';
colors("orange")
'This is orange';
colors("blue")
'This is blue';
colors("green")
'This is green';
colors("red")
'This is red';

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero === 10 || numero === 5) {
    return true
  }
  else{
    return false
  }
}
esDiezOCinco(10)
true
esDiezOCinco(5)
true
esDiezOCinco(9)
false;

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero > 20 && numero < 50  ) {
   return true
  }
  else{
    return false
  }
}
estaEnRango(30)
true;
estaEnRango(10)
false;

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  var cuentaEnteros = Math.floor(numero) % 1 ;
  if (numero === Math.floor(numero)) {
    return true
    
  }
    return false
  
}
esEntero(0.6)
false;
esEntero(10)
true;


function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if (numero % 3  ===0 && numero % 5 === 0) {
    return "fizzbuzz"}
  else if (numero % 3 ===0) {
    return "fizz"
  }
  else if (numero % 5 === 0) {
    return "buzz"}
    return numero
} 
fizzBuzz(15)
'fizzbuzz';
fizzBuzz(9)
'fizz';
fizzBuzz(10)
'buzz';
fizzBuzz(11)
11;

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  if (num1 < 0 || num2 < 0 || num3 <0 ) {
    return  "hay negativos"
  } 
  if (num1 === 0 || num2 === 0 || num3 === 0) {
    return "Error"
  }
  if (num1 > num2 && num1 > num3 && num1 > 0) {
  return  "Número 1 es mayor y positivo"
} 
if (num3 > num1 && num3 > num2 && num3 > 0) {
  var suma= num3 + 1;
  return suma
}
return false
}
operadoresLogicos(10, 8, 11)
12;
operadoresLogicos(10, 8, 9)
'Número 1 es mayor y positivo';
operadoresLogicos(10, 8, -9)
'hay negativos';
operadoresLogicos(10, 8, 0)
'Error';
operadoresLogicos()
false;

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if (numero === 0 || numero === 1) {
    return false
  }
  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false
    }
    return true
  }
}
esPrimo(0, 1)
false;
esPrimo(20)
false;
esPrimo(13)
true;

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí

  if (valor) {
  return  "Soy verdadero"
}
else{ 
return "Soy falso"}
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí    

  var array= [];
  for (var i = 0; i < 11; i++) {
    array.push(6 * i)
    
  }
  return array
}
tablaDelSeis()
(11) [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60]

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  
  var str= numero +"";
  var digitos=str.length;
  if (digitos === 3) {
    return true}
  else{
    return false}
}
tieneTresDigitos(10)
false;
tieneTresDigitos(100)
true;

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var acc= 1;
  var resultado= numero;
  do {
   resultado = resultado +5;
      acc = acc +1;
  } while (acc < 9);
  return resultado;
}
doWhile(1)
41;


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
