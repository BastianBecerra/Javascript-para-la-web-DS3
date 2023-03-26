green = document.querySelector('#div-1');
blue = document.querySelector('#div-2');
brown = document.querySelector('#div-3');
yellowgreen = document.querySelector('#div-4');

document.addEventListener('keydown', function(event){
    if(event.key === 'a'){
        color = 'red';
    }else if(event.key === 's'){
        color = 'silver'
    }else if(event.key === 'd'){
        color = 'yellow'
    }
})
function pintar(element){
    element.style.backgroundColor = color;
}

green.addEventListener("click", function(){
    green.style.backgroundColor = color;
})
blue.addEventListener("click", function(){
    blue.style.backgroundColor = color;
})
brown.addEventListener("click", function(){
    brown.style.backgroundColor = color;
})
yellowgreen.addEventListener("click", function(){
    yellowgreen.style.backgroundColor = color;
})