/*
------------------------------------DOM : Document Object Model ---------------------------
4 Pillars of DOM
    - Selecton of an element
    - Changing HTML
    - Changing CSS
    - Event Listener
*/


    // Selecton of an element
var a = document.querySelector("h1") // In " " , we can select by any tag e.g h1, class e.g .class_name, id e.g. #id_name
// Note : querySelector will select only first instance of h1, for selecting all instances use querySelectorAll

    // Changing HTML
a.innerHTML = "Changed";    //This will change the text that was there in h1 tag in html to "Changed"
    //Changing CSS
a.style.backgroundColor = "green";
    //Event Listener
a.addEventListener("click",function(){
    //Here i can do changes whatever i want (in html, css or anything else)
    a.innerHTML = "Changed by function"; //Now when i click the text it will be changed
}) 

//-------------------Some other functions -----------------
var b = document.getElementById("id"); //Here we don't need to use #id
var c = document.getElementsByClassName("class_name"); //Here we don't need to use #id

//b.textContent

