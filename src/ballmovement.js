export function ballMovement (ctx, ballObj){
    ball(ctx, ballObj.x, ballObj.y, ballObj.rad);
    ballObj.x += ballObj.dx;
    ballObj.y += ballObj.dy
}

function ball (ctx, x, y, rad){
    ctx.beginPath();
    ctx.fillStyle = "GreenYellow";
    ctx.strokeStyle = "DeepPink";
    ctx.lineWidth = 5;
    ctx.arc(x, y, rad, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

