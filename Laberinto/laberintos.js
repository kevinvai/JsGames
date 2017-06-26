/**
 * Created by kevin on 6/26/17.
 */
var canvas = document.getElementById("mazecanvas");
var context = canvas.getContext("2d");
var currRectX = 425;
var currRectY = 3;
var mazeWidth = 556;
var mazeHeight = 556;
var intervalVar;

function drawMazeAndRectangle(rectX, rectY) {
    makeWhite(0, 0, canvas.width, canvas.height);
    var mazeImg = new Image();
    mazeImg.onload = function () { //dibujar rectangulo y circulo cuando el mapa cargue
        context.drawImage(mazeImg, 0, 0);
        drawRectangle(rectX, rectY, "#0000FF", false, true);
        context.beginPath();
        context.arc(542, 122, 7, 0, 2 * Math.PI, false);
        context.closePath();
        context.fillStyle = '#00FF00';
        context.fill();
    };
    mazeImg.src = "Tesis.gif";
}
function drawRectangle(x, y, style) {
    makeWhite(currRectX, currRectY, 15, 15);
    currRectX = x;
    currRectY = y;
    context.beginPath();
    context.rect(x, y, 15, 15);
    context.closePath();
    context.fillStyle = style;
    context.fill();
}

function canMoveTo(destX, destY) {
    var imgData = context.getImageData(destX, destY, 15, 15);
    var data = imgData.data;
    var canMove = 1; // 1 significa el rectangulo se puede mover
    if (destX >= 0 && destX <= mazeWidth - 15 && destY >= 0 && destY <= mazeHeight - 15) { // check whether the rectangle would move inside the bounds of the canvas
        for (var i = 0; i < 4 * 15 * 15; i += 4) { // look at all pixels
            if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0) { // negro
                canMove = 0; // 0 significa que el recangulo no puede moverse
                break;
            }
            else if (data[i] === 0 && data[i + 1] === 255 && data[i + 2] === 0) { // lime: #00FF00
                canMove = 2; // 2 significa que se llego a la meta
                break;
            }
        }
    }
    else {
        canMove = 0;
    }
    return canMove;

    function moveRect(e) {
        var newX;
        var newY;
        var canMove;
        e = e || window.event;
        switch (e.keyCode) {
            //case 38:   // upkey
            case 87: // W key
                newX = currRectX;
                newY = currRectY - 20;
                break;
            //case 37: // leftkey
            case 65: // A key
                newX = currRectX - 20;
                newY = currRectY;
                break;
            //case 40: // downkey
            case 83: // S key
                newX = currRectX;
                newY = currRectY + 20;
                break;
            //case 39: // rightkey
            case 68: // D key
                newX = currRectX + 20;
                newY = currRectY;
                break;
            default:
                return;
        }
        movingAllowed = canMoveTo(newX, newY);
        if (movingAllowed === 1) {
            drawRectangle(newX, newY, "#0000FF");
            currRectX = newX;
            currRectY = newY;
        }
        else if (movingAllowed === 2) {
            //clearInterval(intervalVar);
            makeWhite(0, 0, canvas.width, canvas.height);
            context.font = "40px Arial";
            context.fillStyle = "Green";
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillText("¡TERMINASTE!", canvas.width / 2, canvas.height / 2);
            window.removeEventListener("keydown", moveRect, true);
        }
    }


    function makeWhite(x, y, w, h) {
        context.beginPath();
        context.rect(x, y, w, h);
        context.closePath();
        context.fillStyle = "white";
        context.fill();
    }
}
drawMazeAndRectangle(425, 3); // { 425, 3 } posicion del rectangulo azul
window.addEventListener("keydown", moveRect, true);