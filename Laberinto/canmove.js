/**
 * Created by kevin on 6/26/17.
 */
function canMoveTo(destX, destY) {
    var imgData = context.getImageData(destX, destY, 15, 15);
    var data = imgData.data;
    var canMove = 1; // 1 means: the rectangle can move
    if (destX >= 0 && destX <= mazeWidth - 15 && destY >= 0 && destY <= mazeHeight - 15) { // check whether the rectangle would move inside the bounds of the canvas
        for (var i = 0; i < 4 * 15 * 15; i += 4) { // look at all pixels
            if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0) { // black
                canMove = 0; // 0 means: the rectangle can't move
                break;
            }
            else if (data[i] === 0 && data[i + 1] === 255 && data[i + 2] === 0) { // lime: #00FF00
                canMove = 2; // 2 means: the end point is reached
                break;
            }
        }
    }
    else {
        canMove = 0;
    }
    return canMove;
}