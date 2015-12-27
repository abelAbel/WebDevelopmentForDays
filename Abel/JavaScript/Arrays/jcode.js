/**
 * Created by abelamadou on 12/22/15.
 */

var roads = ["stone", "dirt", "cement", "tar"];
document.writeln(roads);
document.writeln("<br/>");
var roadTraveled ="element1: " + roads[1];
document.writeln(roadTraveled);

/*updating array*/
document.writeln("<br/>");
roads[1] = "HHHHHH";
document.write("element1: " + roads[1]);


/*Long way to write array*/
document.writeln("<br/>");
var roadNumb = [];
for(var i = 0; i<= 10; i++){
    roadNumb[i] = i;
}
document.write(roadNumb);