/**
 * Created by abelamadou on 12/22/15.
 */
/*Can grab any tag*/
//the getElementBytag method build a node list, similar to array
function changeStyle(){
    var parTag = document.getElementsByTagName("p"); //Get all <p> tag in html document

    //parTag[0].style.background ="red";
    //var changeParText = parTag[1].style.fontStyle = "italic";
    //parTag[3].style.fontStyle = "italic";
    for(var i = 1; i<parTag.length; i+=2){
        parTag[i].style.background ="red";
        parTag[i].style.fontStyle = "italic";
        parTag[i-1].style.background ="blue";
        parTag[i-1].style.fontWeight= "bold";
    }
}