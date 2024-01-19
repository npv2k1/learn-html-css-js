
var r, g, b;
r = Math.floor((Math.random() * 255) + 0);
g = Math.floor((Math.random() * 255) + 0);
b = Math.floor((Math.random() * 255) + 0); 
    
var i;  
var point=0;    

function play() {
    r = Math.floor((Math.random() * 255) + 0);
    g = Math.floor((Math.random() * 255) + 0);
    b = Math.floor((Math.random() * 255) + 0);
    var color = "rgb(" + r + "," + g + "," + b + ")";
    var b1, tmp;
    tmp = Math.floor((Math.random() * 10) + 3);
    b1 = b + tmp;
    while (b1 > 255) {
        b = Math.floor((Math.random() * 255) + 0);
        tmp = Math.floor((Math.random() * 25) + 5);
        b1 = b + tmp;
    }
    var color1 = "rgb(" + r + "," + g + "," + b1 + ")";
    i = Math.floor((Math.random() * 4) + 1);
    document.getElementById('btn1').style.backgroundColor = color;
    document.getElementById('btn2').style.backgroundColor = color;
    document.getElementById('btn3').style.backgroundColor = color;
    document.getElementById('btn4').style.backgroundColor = color;
    
    switch (i) {
        case 1:
            document.getElementById('btn1').style.backgroundColor = color1;
            break;
        case 2:
            document.getElementById('btn2').style.backgroundColor = color1;
            break;
        case 3:
            document.getElementById('btn3').style.backgroundColor = color1;
            break;
        case 4:
            document.getElementById('btn4').style.backgroundColor = color1;
            break;
    }

}

function Click1() {
    if (i == 1) {
        point = point + 1;
        document.getElementById("diem").innerHTML = point;
    } 
    play();
      

}
function Click2() {
    if (i == 2) {
        point = point + 1;
        document.getElementById("diem").innerHTML = point;

    }
    play();
   

}
function Click3() {
    if (i == 3) {
        point = point + 1;
        document.getElementById("diem").innerHTML = point;

    }
    play();
    

}
function Click4() {
    if (i == 4) {
        point = point + 1;
        document.getElementById("diem").innerHTML = point;
    }

    play();
    
}

