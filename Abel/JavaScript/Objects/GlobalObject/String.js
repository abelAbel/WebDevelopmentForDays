/**
 * Created by abelamadou on 12/22/15.
 */
document.write("-------------------String---------------------<br/>")
var hello = "Hello how are you doing today!?";

hello = hello.toUpperCase(); /*takes all character and make them uper case (same with toLowerCase)*/
document.write(hello + "<br/>");

var h = hello.length; /*array inder, counts each characters */
document.write(h + "<br/>");

document.write(hello.charAt(0)+ "<br/>");
document.write(hello.replace("HELLO", "NOOOO")+ "<br/>"); /*first argument is the word that you want to change, and second is what to change it to*/
document.write(hello.bold()+ "<br/>");
document.write(hello.italics()+ "<br/>");
var randStr = "A long " + "string that " + "goes on and on";
var randStrArray = randStr.split(" "); /*Split string into an array*/
document.write("randStrArray -> "+ randStrArray + "<br/>");
randStr = randStr.trim(); /*To trim any white space off the begining or the end*/


//String Object in JavaScript