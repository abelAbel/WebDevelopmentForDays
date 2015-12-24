/**
 * Created by abelamadou on 12/22/15.
 */
/* the 'src' property works on the src attribute in <img>*/
function changeImage(){
    var getImageId = document.getElementById('image');
    getImageId.src= "cool-cat.jpg";
    getImageId.style.border= "5px solid red";
    getImageId.alt="cool cat";
}