/**
 * Created by abelamadou on 12/23/15.
 */
/*Just a different way of targeting Elements, just like the 'get methods'*/
/*Taversing DOM:Just using the parent child relationship within the DOM hierechy to move around and target elements; go to parent and target child, and also reversly*/
/*Can go upward, sideway, and downward*/

function changeText(){

/*From parent to child (Moving downward)*/
    var parent = document.getElementById("main");/*Got hold of it(element) so we can target the children*/
    /*'childNodes' This build a node list of all the nodes under the parent*/
    /*Does not say element node, so since their is alot of diffenet nodes, their is actually nodes for white space and other kind of node
    * So need to be carefull in determining the excat index child node we want to get*/
    var child = parent.childNodes[3];/*Create variable to hold the child node we want*/
    child.style.border ="2px solid red";

    var firstChild = parent.firstElementChild;/*This will give us first element is parent
    *  Don't need to worry about those nasty white space nodes, since it says 'Element */
    firstChild.style.border ="2px solid green";


    var lastChild = parent.lastElementChild;
    lastChild.style.border ="2px solid purple";

/* From child to parent(Moving upward)*/
    var childParagraph4 = document.getElementById("para4");
    //var bigParent = childParagraph4.parentNode;/*There is only one parent so don't need specific index*/
    var bigParent = childParagraph4.parentElement;/*Can also do it this way no difference*/
    bigParent.style.color="orange";

/* Going from sibling to sibling*/
    var para3 = document.getElementById("para3");
    var siblingR = para3.nextElementSibling;/*Going go to the right(next)*/
    siblingR.style.color="blue";
    var siblingL = para3.previousElementSibling;/*Going go to the left(previous)*/
    siblingL.style.color="green";


}
