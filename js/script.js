

// function sayHello(username, lastName) {  // le function sono mini programmi che vengono richiamati durante l'esecuzione del codice per non riscrivere altri algoritmi.
//   console.log('Hello ' + username + ' ' + lastName); // dentro alle parentesi delle function, vengono dichiarate le variabili che possono essere usate solo all'interno delle funzioni.
// }
//
// sayHello('Gustav', 'Sus');
// sayHello('Francesco', 'Lel');
//
//
// var elem = sayHello('Guybrush', 'Threepwood');
// console.log(value);







// function sum(value1, value2) {
//   return value1 + value2;
// }
// function div(value1, value2) {
//   if (value2 == 0) {
//     return 'errore';
//   }
//   console.log('calculating');
//
//   return value1 / value2;
// }
//
// var divRes = div(15, 3);
//
// if (divRes === 'errore') {
//   console.log('dati in ingresso non validi');
// } else {
//   console.log('risultato della divisione ' + divRes);
// }
//
// function changeBackColor(color) {
//   document.getElementById('title').style.background = color;
// }
//
// changeBackColor(yellow);
//
// var res = sum(10, 20);
// document.getElementById('title').innerHTML = res;









function getRnd(min, max){

  var minRnd = min;
  var maxRnd = max - minRnd + 1;

  var rnd = Math.floor(Math.random() * maxRnd) + minRnd;

  return rnd;

}

var res = getRnd(58, 163);
console.log(res);

var res = getRnd(10, 20);
console.log(res);
