//things to do
//responsive text vw
//navbar responsive

document.querySelector("button").onclick = function(){
    window.alert("hola");
}

// var workEl = document.querySelector("#workDiv");
//     workEl.onclick = function(){
//         window.alert("hello");
//         document.querySelector("#work").style.background = "yellow";
//     }
// document.querySelector("button").onmouseover

$(document).ready(function() {
    $(".fa").click(open);  
    $(".projects").click(()=>{
        window.location.href = "blog1.html";
    })
    
    $(".ansContent").click((value)=>{
        let classN = value.currentTarget.classList[1];
        console.log(classN);
        if(classN=="blog1"){
            window.location.href = "blog1.html";
        }
        else if(classN=="blog2"){
            window.location.href = "blog2.html";
        }
        else if(classN=="blog3"){
            window.location.href = "blog3.html";
        }
        else{console.log("error class")}
    })
})

function open(){
    $(".hamburgerMenu").width("100%");
}