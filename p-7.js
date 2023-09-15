/**1.You are given three numbers 134, 79 and 45.Write a program that will print the largest number using if else
 * 
 * 
 * 2.You are given a traingle with the sides 9, 8, 9. Write a program to chek whether a traingle is isosceles or or not using if else.
 * Isoscles = two sides are equal
 */

//1
var num1 = 913;
var num2 = 779;
var num3 = 345;
if(num1 >= num2 && num1>= num3){
    console.log("num1 is largest"); 
   
}
else if(num2>= num1 && num2 >= num3) {
    console.log("num2 is largest");
}
else{
    console.log("num3 is largest"); 
}

//2 
var side1 = 9;
var side2 =  8;
var side3 = 9;
if (side1 == side2 || side1 == side3 || side2== side3 ){
    console.log('traingle is isosceles');
}
else {
    console.log('traingle is not isosceles');
}