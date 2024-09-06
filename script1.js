let currentIndex = 4;

function onDelete(i){
    const ele = document.getElementById("todo" + i);
    ele.parentNode.removeChild(ele);
}

function onAdd(){
    const elem = document.getElementById("taska");
    const betaText = elem.value.trim();
    
    if (betaText === '') {
        alert('Please enter a todo item.');
        return;
    }
    
    const papaNode = document.getElementById("todos");
    
    //new div
    const betaNode = document.createElement("div");
    betaNode.setAttribute("id", 'todo'+currentIndex);

    //new heading
    const nayiHeading = document.createElement("h4");
    nayiHeading.textContent = currentIndex + '. ' + betaText;

    //new button
    const nayaButton = document.createElement("button");
    nayaButton.textContent = "DELETE";
    nayaButton.setAttribute("onclick", "onDelete("+currentIndex+")");
    
    //add
    betaNode.appendChild(nayiHeading);
    betaNode.appendChild(nayaButton);

    //final
    papaNode.appendChild(betaNode); 
    
    currentIndex++;

    elem.value="";

}