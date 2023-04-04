// alert("hello");

var firstNumber = 50;

var secondNumber= 30;

var addition = firstNumber + secondNumber;
var subtraction = firstNumber - secondNumber;
var division = firstNumber / secondNumber;
var multiplication = firstNumber * secondNumber


document.getElementById("sum").innerHTML = addition;

if(subtraction <= 0){
    alert(subtraction + " is less than or equal to 0")
}else{document.getElementById("subtract").innerHTML = subtraction;
}

document.getElementById("divide").innerHTML = Math.round(division);
document.getElementById("multiply").innerHTML = multiplication;


for (var i=1; i <=15; i++){
    document.getElementById("square_numbers").innerHTML +=(i**2 + "<br>");
}
document.write("Fine elaborazione");


var typeNumber1 = parseInt(prompt("type first number"));


var typeNumber2 = parseInt(prompt("type second number"));

var calculateAddition = typeNumber1 + typeNumber2;
var calculateSubtraction = typeNumber1 - typeNumber2;
var calculateMultiply = typeNumber1 * typeNumber2;
var calculatDivide = typeNumber1 / typeNumber2;


document.getElementById("add").innerHTML= ("The addition is " + ":" + calculateAddition);
document.getElementById("sub").innerHTML= ("The subtraction is " + ":" + calculateSubtraction);
document.getElementById("multi").innerHTML= ("The multiplication is " + ":" + calculateMultiply);
document.getElementById("divi").innerHTML= ("The division is " + ":" + calculatDivide);





    


