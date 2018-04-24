//add function
var add = function(number1, number2) {
       return number1 + number2;
     };

     var number1 = parseInt(prompt("Enter a number:"));
     var number2 = parseInt(prompt("Enter another number:"));
     var result = add(number1, number2);
     alert(result);

  // subtract function
var subtract=function(num1,num2){
  return num1-num2;
};
var num1=parseInt(prompt("enter first number:"));
var num2=parseInt(prompt("Enter second number"));
var result=subtract(num1, num2);
alert(result);

//bmi function
var bmi=function(w,h){
  return w/(h*h);
};
var w=parseFloat(prompt("enter weight:"));
var h=parseFloat(prompt("Enter height"));
var result=bmi(w, h);
alert(result);
