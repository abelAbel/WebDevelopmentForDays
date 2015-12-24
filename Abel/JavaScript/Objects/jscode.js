/**
 * Created by abelamadou on 12/22/15.
 */
var org = {
    /*called properties*/
    color:"red", /*don't specify 'var' and use ':' instead of '=' and ',' instead of ';'*/
    height: 30,
    stomachFulll:true,

    /*called method instead of function*/
    sound: function(){
        return "sjadkfsdlkfjlsdk";
    }

};


document.write(org.color);
document.write("<br/>");

document.writeln(org.sound());
org.stomachFulll = false;
document.write("<br/>"+org.stomachFulll);

/*Can change data type of properties*/
org.color =400;
document.write("<br/>"+org.color+"<br/>");

/* Can add new property as long as the property does not already excist*/
org.hair="brown";
document.write(org.hair + "<br/>");

/*Can delete property*/
delete org.hair;
document.write(org.hair + "<br/>");/*Get undefined if you write a property that does not excist*/
org.hair;/*can just add the name of property and not assign it e.g '*/

