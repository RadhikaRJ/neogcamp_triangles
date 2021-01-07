var angle1ref = document.getElementById("angle1");
var angle2ref = document.getElementById("angle2");
var angleResp = document.querySelector("#angle-response");
var anglebtnref = document.querySelector("#angle-calc");

anglebtnref.addEventListener("click",calcAngle);

function calcAngle(){
    var a1 = angle1ref.value;
    var a2 = angle2ref.value;
    var sum = Number(a1)+Number(a2);
    var ans = 180-Number(sum);
    angleResp.innerHTML = "The measure of 3rd Angle is: "+ ans +" degrees.";
}