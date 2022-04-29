
export function paddle (ctx,paddleProps){
    ctx.beginPath();
    ctx.rect(paddleProps.xPOSI, paddleProps.yPOSI, paddleProps.x, paddleProps.y)
    ctx.fillStyle = paddleProps.fillColor;
    ctx.strokeStyle = paddleProps.strokeColor;
    ctx.lineWidth = 4;
    ctx.fill();
    ctx.stroke();

    


}
