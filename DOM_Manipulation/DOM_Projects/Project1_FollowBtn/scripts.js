var btn = document.getElementById("btn1")
var status = 0;
btn.addEventListener("click",function(){
    if(status == 0){
        btn.innerHTML = "Following";
        btn.style.backgroundColor = "green";
        btn.style.color = "white";
        btn.style.borderStyle = "hidden";
        status = 1;
    }
    else{
        btn.innerHTML = "Follow";
        btn.style.backgroundColor = "white";
        btn.style.color = "black";
        btn.style.borderStyle = "inset";
        status = 0;
    }
})