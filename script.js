var canvas;
var contex;

window.onload = function(){
    canvas = document.getElementById('drawingCanvas');
    context = canvas.getContext("2d");

    canvas.onmousedown = startDrawing;
    canvas.onmouseup = stopDrawing;
    canvas.onmouseout = stopDrawing;
    canvas.onmousemove = draw;
};

function changeColor(color){
    context.strokeStyle = color ;
    console.log(color)
}

function changeThickness(wight) {
    context.lineWidth = wight;
    console.log(wight)
}


function  startDrawing (e) {
    isDrawing = true;
    contex.beginPath();
    contex.moveTo(e.pageX - canvas.offsetLeft,
                  e.pageY - canvas.offsetTop);
}

function draw(e) {
    if(isDrawing = true){
        var x = e.pageX - canvas.offsetLeft;
        var y = e.pageY - canvas.offsetTop;

        contex.lineTo(x,y);
        contex.stroke();
    }
}
function  stopDrawing() {
    isDrawing = false;
}