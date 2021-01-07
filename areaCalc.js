//Triangle area calculation
var areaResult = document.querySelector("#area-response");

//m1 height & base
var m1href = document.getElementById("calc-m1-height");
var m1bref = document.getElementById("calc-m1-base");
var btnm1ref = document.querySelector("#area-m1-calc");

btnm1ref.addEventListener("click",calcAreaM1);

function calcAreaM1(){
 var h = m1href.value;
 var b = m1bref.value;
 var area = Math.round(0.5*(b*h));
 areaResult.innerText = "Area of the Triangle is: " + area;

}

//m2 side length
var m2sref = document.getElementById("calc-m2-side");
var btnm2ref = document.querySelector("#area-m2-calc");
btnm2ref.addEventListener("click",calcAreaM2);

function calcAreaM2(){
    var s = m2sref.value;
    var area = (Math.sqrt(3)/4)*s*s;
    areaResult.innerText = "Area of the Triangle is: " + area;
}

//m3 3 sides
var m3s1ref = document.getElementById("calc-m3-side1");
var m3s2ref = document.getElementById("calc-m3-side2");
var m3s3ref = document.getElementById("calc-m3-side3");
var btnm3ref = document.querySelector("#area-m3-calc");

btnm3ref.addEventListener("click",calcAreaM3);

function calcAreaM3(){
    var s1 = m3s1ref.value;
    var s2 = m3s2ref.value;
    var s3 = m3s3ref.value;
    var semip = Number(s1)+Number(s2)+Number(s3)/2;
    var val = semip*(semip-s1)*(semip-s2)*(semip-s3);
    var area = Math.sqrt(val)
    areaResult.innerText = "Area of the Triangle is: " + area;
}

