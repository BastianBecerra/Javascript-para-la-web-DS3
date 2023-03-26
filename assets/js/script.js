function pintar(element, color = "green"){
    element.style.backgroundColor = color;
}

ele = document.getElementById("ele1");
ele.addEventListener("click", () => pintar(ele,));