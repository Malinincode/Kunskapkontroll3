let firstButton1 = document.getElementById("button1");

console.log(firstButton1)

firstButton1.addEventListener('click', function() {

let sysslor = document.createElement("li");
document.getElementById("todo").append(sysslor);

let sysslorSomLista = document.createElement("input");
sysslorSomLista.value = document.getElementById("input-syssla").value;
sysslor.append(sysslorSomLista);

let button2
console.log(document.getElementById("todo"))

})