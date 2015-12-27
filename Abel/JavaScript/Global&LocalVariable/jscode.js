/**
 * Created by abelamadou on 12/22/15.
 */
var name = "Henry"; //Variable outside of function -> Global variable
                    //Will stay alive as long as the page is loaded
                    //Get's reloaded each time page is reloaded

function printName(){
    //var name2 ="Sarah"; //Local variable ; Will disappear when function is done doing what it is doing
    name2 = "Mike"; // if don't have 'var' it threat it as global variable
}

printName();
document.write(name2);