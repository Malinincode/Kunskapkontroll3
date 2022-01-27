let firstButton1 = document.getElementById("add-button");

console.log(firstButton1)

firstButton1.addEventListener('click', function(e) {

    /* Skapar ny li */
    let li = document.createElement("li");
    e.target.nextSibling.nextSibling.childNodes[3].append(li);
    console.log(e.target.previousSibling.previousSibling)

    /* Skapar nya textrutan */
    let input = document.createElement("input");
    input.value = e.target.previousSibling.previousSibling.value;
    input.setAttribute("disabled", true);
    input.setAttribute("placeholder", "tom syssla");
    li.append(input);

    /* Skapar ny ändra knapp */
    let changeButton = document.createElement("button");
    changeButton.innerHTML = "Ändra";
    li.append(changeButton);

    /* Skapar ny färdig knapp */
    let readyButton = document.createElement("button");
    readyButton.innerHTML = "Färdig";
    li.append(readyButton);

    /* Skapar ny radera knapp */
    let eraseButton = document.createElement("button");
    eraseButton.innerHTML = "Radera";
    li.append(eraseButton);

    /* Skapar ny addEventListener */
    changeButton.addEventListener('click', function(e){
    
        /* Om låst, öppnar upp samt ändrar text */  
        if(e.target.previousSibling.disabled){
            e.target.previousSibling.disabled = false;
            e.target.innerHTML = "Spara";
            
        /* Om öppen, stänger samt ändrar text */  
        } else {
            e.target.previousSibling.disabled = true;
            e.target.innerHTML = "Ändra";
        }
    })

    /* Färdigknapp klar och flyttar över till sista listan, tar då bort färdigknappen*/  
    readyButton.addEventListener('click', function(e){
        /*  console.log(readyButton) */
        console.log(e.target.parentNode)
        console.log(e.target.parentNode.parentNode.parentNode.nextSibling.nextSibling.childNodes[3])
        e.target.parentNode.parentNode.parentNode.nextSibling.nextSibling.childNodes[3].append(e.target.parentNode);
        /*   console.log(document.getElementById("container")) */
        console.log(readyButton)
        e.target.remove();
    })

    /* Raderar via knappen Radera */  
    eraseButton.addEventListener('click', function(e){
        console.log(e.target.parentNode)
        e.target.parentNode.remove();
 
     })
})