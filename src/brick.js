export function createBricks(bricks, brickObj){
    for (let r = 0; r<brickObj.row; r++){
      bricks[r] = [];
      for (let c = 0; c<brickObj.column; c++){
        bricks[r][c] = {
          x: c*(brickObj.offsetLeft+brickObj.width)+brickObj.offsetLeft,
          y: r*(brickObj.offsetTop+brickObj.height)+(brickObj.offsetTop+brickObj.marginTop),
          status: true
        }
      }
    }
  }

