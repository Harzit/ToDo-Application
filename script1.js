let currentIndex = 4;

function onDelete(i){
    const ele = document.getElementById("todo" + i);
    ele.parentNode.removeChild(ele);
}

function onAdd(){
    const elem = document.getElementById("taska");
    const betaNode = document.createElement("div");
    betaNode.innerHTML = "<div id='todo" + currentIndex + "'><h4>" + elem.value + '</h4> <button onclick="onDelete('+ currentIndex + ')">DELETE</button>';
    const papaNode = document.getElementById("todos");
    papaNode.appendChild(betaNode);
    
    currentIndex = currentIndex + 1;

}