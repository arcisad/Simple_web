/**
 * Created by AMIRR on 12/11/2016.
 */
//function myFunc() {
function myFunc(Field) {
    //var x = document.getElementById("myText");
    var d= new Date();
    var t = d.getHours();

    if (t < 12) {
        //alert("Good morning dear " + myText.value);
        alert("Good morning dear " + Field.value);
    }else {
        //alert("Hello afternoon " + myText.value);
        alert("Good afternoon dear " + Field.value);
    }
    var y = document.createElement("AUDIO");

    if (y.canPlayType("audio/mpeg")) {
        y.setAttribute("src","jj.mp3");
        y.play();
    }
    y.setAttribute("controls", "controls");
    document.body.appendChild(y);
}

function timeSel(Field) {
    //var e = document.getElementById("myText");
    var d = new Date();
    var t = d.getHours();
    var m = d.getMinutes();

    if (t < 12) {
        Field.className = "myCss1";
        //Field.className += " pos";
    }else {
        Field.className = "myCss2";
        //Field.className += " pos";
    }

    var mm = m;
    if (mm < 10) mm = "0" + m;
    var x = document.createTextNode("It is " + t + ":" + mm + " now");
    document.body.appendChild(x);
}

function move_it(Field ,event) {
    Field.css.style.top = event.pageY;
    Field.css.style.left = event.pageX;
}

