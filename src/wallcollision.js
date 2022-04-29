export function wallCollision(ballObj, canvas, sound){
    if (ballObj.y-ballObj.rad<=0){
        ballObj.dy *=-1;
        sound.play();
    }

    if (ballObj.x-ballObj.rad<=0 || ballObj.x+ballObj.rad>=canvas.width){
        ballObj.dx*=-1;
        sound.play();
    }
}