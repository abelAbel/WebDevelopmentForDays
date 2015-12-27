/**
 * Created by abelamadou on 12/22/15.
 */
document.write("<br/><br/>-------------------Date---------------------<br/>");
//Date Object
var todayDate = new Date();/*specific to the system*/
document.write(todayDate+"<br/>");

document.write(todayDate.toDateString()+"<br/>");/*convert to a more readable string */
todayDate.getYear();
document.write(todayDate+"<br/>");
todayDate.setYear(2019);
document.write(todayDate+"<br/>");
