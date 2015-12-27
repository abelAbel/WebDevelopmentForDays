/**
 * Created by abelamadou on 12/22/15.
 */
/*To identify a function type the key word 'function'*/
//Usually with function you are tying functions to a particular event(mouse click, keystroke etc.. to make it interactive)

/*Vid 6*/
function saySomething(){
    alert("This is my first function");
}
//saySomething();

/*Vid 7*/
function addSomething(/*place holder, don't have to put 'var'*/ num, strg){
    var add = num + strg;
    document.write(add);
}

//addSomething("50"," year old");
//addSomething(20," year old");

/*Vid 14 - Return Statement*/
function add(x,y){
    var result = x * y;
    return result;
}

document.write(add(2,5));