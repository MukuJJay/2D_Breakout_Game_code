export function ballReset(ballObj, sound, player){
    ballObj.y = 700;
    ballObj.x = 770;
    ballObj.dy = -5;
    ballObj.dx = -5*(Math.random()*2 -1);
    if (player.lives >= 0){
        sound.play();
    }
}