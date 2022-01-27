let firstButton1 = document.getElementById("add-button");

console.log(firstButton1)

firstButton1.addEventListener('click', function() {

    /* Skapar ny li */
    let newLi = document.createElement("li");
    document.getElementById("todo-list").append(newLi);

    /* Skapar nya textrutan */
    let input = document.createElement("input");
    input.value = document.getElementById("input-syssla").value;
    input.setAttribute("disabled", true);
    input.setAttribute("placeholder", "tom syssla");
    newLi.append(input);

    /* Skapar ny ändra knapp */
    let changeButton = document.createElement("button");
    changeButton.innerHTML = "Ändra";
    newLi.append(changeButton);

    /* Skapar ny färdig knapp */
    let readyButton = document.createElement("button");
    readyButton.innerHTML = "Färdig";
    newLi.append(readyButton);

    /* Skapar ny radera knapp */
    let eraseButton = document.createElement("button");
    eraseButton.innerHTML = "Radera";
    newLi.append(eraseButton);

    /* Skapar ny addEventListener */
    changeButton.addEventListener('click', function(){
    
        /* Om låst, öppnar upp samt ändrar text */  
        if(input.disabled){
            input.disabled = false;
            changeButton.innerHTML = "Spara";
            
         /* Om öppen, stänger samt ändrar text */  
        } else {
            input.disabled = true;
            changeButton.innerHTML = "Ändra";
        }

    })
})