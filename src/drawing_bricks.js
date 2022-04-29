export function drawBricks(bricks, brickObj, ctx){
    for (let r = 0; r<brickObj.row; r++){
      for (let c = 0; c<brickObj.column; c++){
        let b = bricks[r][c];
        if(b.status){
          ctx.fillStyle = brickObj.fillColor;
          ctx.fillRect(b.x, b.y, brickObj.width, brickObj.height);
          ctx.strokeStyle = brickObj.strokeColor;
          ctx.strokeRect(b.x, b.y, brickObj.width, brickObj.height);
        }      
      }   
    }
  }