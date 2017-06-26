/**
 * Created by kevin on 6/26/17.
 */
function moveRect(e) {
    var newX;
    var newY;
    var canMove;
    e = e || window.event;
    switch (e.keyCode) {
        case 38:   // arrow up key
        case 87: // W key
            newX = currRectX;
            newY = currRectY - 3;
            break;
        case 37: // arrow left key
        case 65: // A key
            newX = currRectX - 3;
            newY = currRectY;
            break;
        case 40: // arrow down key
        case 83: // S key
            newX = currRectX;
            newY = currRectY + 3;
            break;
        case 39: // arrow right key
        case 68: // D key
            newX = currRectX + 3;
            newY = currRectY;
            break;
        default: return;
    }
    movingAllowed = canMoveTo(newX, newY);
    if (movingAllowed === 1) {      // 1 means 'the rectangle can move'
        drawRectangle(newX, newY, "#0000FF");
        currRectX = newX;
        currRectY = newY;
    }
    else if (movingAllowed === 2) { // 2 means 'the rectangle reached the end point'
        clearInterval(intervalVar); // we'll set the timer later in this article
        makeWhite(0, 0, canvas.width, canvas.height);
        context.font = "40px Arial";
        context.fillStyle = "blue";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText("Congratulations!", canvas.width / 2, canvas.height / 2);
        window.removeEventListener("keydown", moveRect, true);
    }
}
