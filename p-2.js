/**
 * write a program to calculate the average marks to Mathematics , Biology , Chemistry, Physics and Bangla
 * 5b sub marks(75.25, 65, 80, 35.45, 99.50)
 * Print the result two decimal points
 * output: 71.04
 */
var math = 75.25;
var bio = 65;
var chem = 80;
var phy = 35.45;
var bang = 99.50;
var subTotal = (math+bio+chem+phy+bang);
subTotal /= 5;
var subFix = subTotal.toFixed(2);
var subAver= parseFloat(subFix);
 console.log(subAver);
