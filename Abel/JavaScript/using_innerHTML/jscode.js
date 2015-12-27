/**
 * Created by abelamadou on 12/22/15.
 */
/*innerHTML it is a property and not a method*/
function changeStyle(){
    var paraClass = document.getElementsByClassName('para');
    var firstParaText = paraClass[0].innerHTML;
    var secondParaText = paraClass[1].innerHTML;
    var addThem = document.getElementsByClassName("para2")[0].innerHTML=firstParaText+" + "+secondParaText;
    paraClass[0].innerHTML = ''; /*changing the text nod in <p> tag*/
    paraClass[1].innerHTML = '';


}