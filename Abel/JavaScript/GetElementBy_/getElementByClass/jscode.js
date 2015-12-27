/**
 * Created by abelamadou on 12/22/15.
 */
/* getElementsByClassName method also creates a node list*/
/*When you have a method that is grabing multiple element, that node list is usually created*/
function changeStyle(){
    var paraClass = document.getElementsByClassName('para');
    paraClass[0].style.color = 'red';
    paraClass[1].style.color = 'red';
    paraClass[0].innerHTML = 'red'; /*innerHTML it is a property and not a method*/
    paraClass[1].innerHTML = 'red';


}