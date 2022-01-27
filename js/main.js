let firstButton1 = document.getElementById("add-button");

console.log(firstButton1)

firstButton1.addEventListener('click', function() {

let newLi = document.createElement("li");
document.getElementById("todo-list").append(newLi);

let input = document.createElement("input");
input.value = document.getElementById("input-syssla").value;
newLi.append(input);

let changeButton = document.createElement("button");
changeButton.innerHTML = "Ändra";
newLi.append(changeButton);
})