//hypotenuse calculation
var aref = document.getElementById("side-a");
var bref = document.getElementById("side-b");
var btnhypref = document.querySelector("#hypotenuse-calc");
btnhypref.addEventListener("click", calcHypotenuse);
 var hypresponse = document.querySelector("#hypotenuse-response");
function calcHypotenuse(){
    var a = aref.value;
    var b = bref.value;
    var c= Math.sqrt(Number(a*a) + Number(b*b));
    hypresponse.innerText = "The length of the hypotenuse is : "+c;
}