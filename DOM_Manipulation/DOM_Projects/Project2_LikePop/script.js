var card = document.querySelector(".card");
var icon = document.querySelector("i")

card.addEventListener("dblclick", function(){
    icon.style.transform = 'translate(-50%,-50%) scale(1)'
    icon.style.opacity = 0.8;
    setTimeout(() => {
        icon.style.opacity = 0;
    }, 1000);

    setTimeout(() => {
        icon.style.transform = 'translate(-50%,-50%) scale(0)'
        icon.style.opacity = 0.8;
    }, 2000);
})
