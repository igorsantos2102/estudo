// function calculo(numero) {
//   return numero * numero;
// }

// console.log(calculo(2));

// let n1 = Number(prompt("Digite um numero"))

// if (n1 % 2 == 0) {

//   console.log("par");

// } else {

//   console.log("impar");

// }

function tabuada() {
  let n1 = prompt("Qual tabuada deseja saber ? ");

  while (n1 > 10 || n1 == 0) {
    alert("Digite um numero valido");
    n1 = prompt("Qual tabuada deseja saber ? ");
  }

  for (i = 1; i <= 10; i++) {
    res = n1 + " X " + i + " = " + n1 * i;
    console.log(res);
  }
}

tabuada();