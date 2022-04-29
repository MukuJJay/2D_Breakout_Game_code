
export function paddleCollision (ballObj, paddleProps, sound){
    
    if ( ballObj.y + ballObj.rad > paddleProps.yPOSI && ballObj.y - ballObj.rad < paddleProps.yPOSI + paddleProps.y && ballObj.x + ballObj.rad > paddleProps.xPOSI && ballObj.x - ballObj.rad < paddleProps.xPOSI+paddleProps.x){
        let collidepoint = ballObj.x - (paddleProps.xPOSI+paddleProps.x/2);
        collidepoint = collidepoint/(paddleProps.x/2);
        let angle = collidepoint * (Math.PI/3);
        ballObj.dx = Math.sin(angle) * ballObj.speed;
        ballObj.dy = -Math.cos(angle) * ballObj.speed;
        sound.play();
    }

}
