/**
 * Created by abelamadou on 12/23/15.
 */

function validateTexbox(){
    var nameBox = document.getElementById("username_id")
    var passwordBox = document.getElementById("password_id")

    if(nameBox.value == "" || passwordBox.value == ""){
        alert("One of the form is Empty please provide string")
        return false;/*It can only return true or false; false mean the attribute "onsubmit" will be interrupted, it will be stop
            *Stop the form from being submitted*/
    }
    else if(nameBox.value.length < 5 || passwordBox.value.length < 5){
        alert("You have not met the maximun lenght for name or password");
        nameBox.focus();/*Bring focus to the sepicy ofject field*/
        //passwordBox.focus();
        nameBox.style.border="2px solid red";
        passwordBox.style.border="2px solid red";
        return false;
    }

}
