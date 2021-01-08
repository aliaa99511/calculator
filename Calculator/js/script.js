

var same = document.getElementsByClassName("same");
var i;

for (i = 0; i < same.length; i++) {

        
    same[i].addEventListener("click",function(){
        var history=document.getElementById("history")

        history.innerHTML +=this.value;
    })
}
/*************************************************************** */

var equal=document.getElementById("equal");

equal.addEventListener("click",function(){

    var history=document.getElementById("history")
    var output=document.getElementById("output")

    output.innerHTML = eval(history.innerHTML)
    history.innerHTML=" "
})
/******************************************************************* */

var myc=document.getElementById("myc");

myc.addEventListener("click",function(){

    history.innerHTML=" "
    output.innerHTML=" "
})
/********************************************************* */

