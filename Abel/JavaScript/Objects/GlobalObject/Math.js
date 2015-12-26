/**
 * Created by abelamadou on 12/22/15.
 */
document.write("<br/><br/>-------------------Math---------------------<br/>");
// Math Object

var number = 4.3;
var newNumber = 26 + Math.round(number); /*round to the nearest closest integer*/
document.write(newNumber + "<br/>");

var newNumber = 26 + Math.ceil(number); /*round up*/
document.write(newNumber+"<br/>");

var newNumber = 26 + Math.floor(number); /*round down*/
document.write(newNumber+"<br/>");

document.write(Math.sqrt(16)+"<br/>");

/*Get random value*/
document.write("Random # (1-10) = ", Math.floor((Math.random()*10)+1));/*need to floor it because it gives us decimal, and need to add 1, because it usually start at 0*/


