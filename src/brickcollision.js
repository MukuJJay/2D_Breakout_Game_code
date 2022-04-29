export function brickCollsion(brickObj, bricks, ballObj, player, sound){
    for (let r = 0; r<brickObj.row; r++){
        for (let c = 0; c<brickObj.column; c++){
            let b = bricks[r][c];
            if (b.status){
                if (ballObj.x+ballObj.rad > b.x && ballObj.x-ballObj.rad < b.x+brickObj.width && ballObj.y+ballObj.rad > b.y && ballObj.y-ballObj.rad < b.y+brickObj.height){
                    b.status = false;
                    ballObj.dy *=-1;
                    player.score += 1;
                    sound.play();
                }
            }
        }
    }
}