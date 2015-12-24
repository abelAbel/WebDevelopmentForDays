/**
 * Created by abelamadou on 12/22/15.
 */

/*You can alter any css property with javascript*/
function changeStyle(){
    //var text = document.getElementById("para1");/*Got the id*/
    var text = document.getElementById("para1").style.color="blue";/*going to style*/
    var text = document.getElementById("para1").style.backgroundColor="purple";/*going to style*/
}

function changeStyle2(){
    //var text = document.getElementById("para1");/*Got the id*/
    var text = document.getElementById("para1").style;/*going to style*/
    text.color=  "red";
    text.backgroundColor= "orange";
    text.fontStyle = "italic";
}