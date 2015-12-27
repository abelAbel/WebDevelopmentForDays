/**
 * Created by abelamadou on 12/23/15.
 */


function removeElement(){
    var h1E = document.getElementsByTagName("h1")[3]; /*this is going to give us all 'h2' elements,
                but we want a specific one*/ /*Thus why we need to specify a position*/
    var parent = h1E.parentNode;/*this will get the element parent node*/
    parent.removeChild(h1E);/*Now we can remove the child element of parent node*/
    var pE = document.getElementsByTagName("p")[1];
    parent.removeChild(pE);
}




function newParagraph(){
// This creates a heading
    var headingE = document.createElement("h1");
    //headingE.style.fontWeight = "bold";
    //headingE.style.fontSize = "20px";
    headingE.innerHTML ="Big Tittle";
    var main = document.getElementById("main");
    main.appendChild(headingE);



//This creates a paragraph
    /*Child element*/
    var element = document.createElement("p");/*pass in the element we want to create*/
    element.style.border = "4px solid red";
    element.style.background="yellow";

    /*attach element to div*/
    /*Parent element*/
    //var main= document.getElementById("main"); /*Don't need this now since it is up there*/
    main.appendChild(element);/*appent 'p' element to 'div' element*/ /*Automatically going to add it to the last element */

    /*Create text node (lowest element you can get to)*/
    var text = document.createTextNode(" Hello my minions");
    /*attach text node to the p element (The text node is the child of p element node) */
    element.appendChild(text);

    /*Or you can do it this way*/
    //element.innerHTML = " Hello my minions number two or three";


}