import { render } from '@testing-library/react';
import React, { useEffect, useRef } from 'react';
import { ballMovement } from './ballmovement';
import { wallCollision } from './wallcollision';
import data from './data';
import './App.css';
import { paddle } from './paddle';
import { paddleCollision } from './paddlecollision';
import { ballReset } from './ballresetfunction';
import { createBricks } from './brick';
import { drawBricks } from './drawing_bricks';
import { brickCollsion } from './brickcollision';
import { gameDone, gameOver, onlyText, showGameStats} from './gamestats';
import pcsound from './sounds/pcSound.wav';
import bcsound from './sounds/bcSound.wav';
import wcsound from './sounds/wcSound.wav';
import newlife from './sounds/newLife.wav';
import newlevel from './sounds/newLevel.wav';

// creating variables

let {ballObj, paddleProps, player, brickObj} = data;
let bricks = [];

const heartPNG = new Image();
heartPNG.src = "./icons/heart5.png";
const scorePNG = new Image();
scorePNG.src = "./icons/score.png";
const levelPNG = new Image();
levelPNG.src = "./icons/level.png"

// audio variables

const pcSound = new Audio(pcsound);
const bcSound = new Audio(bcsound);
const wcSound = new Audio(wcsound);
const newLife = new Audio(newlife);
const newLevel = new Audio(newlevel);

// main react function

function App() {
  const canvasRef = useRef(null);
  useEffect(()=>{
    // setting up canvas
      
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // calling create bricks function 
    
    createBricks(bricks, brickObj);

    


    //looping function
    
    const looping = ()=>{

      //clrearing up the canvas
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      //calling drawBricks
    
      drawBricks(bricks, brickObj, ctx);

      //ball-brick collision

      brickCollsion(brickObj, bricks, ballObj, player, bcSound);
      
      // bringing up the ball 
            
      ballMovement(ctx, ballObj);

      // wallcollision of the ball 
      
      wallCollision(ballObj, canvas, wcSound);

      //bringing up the paddle

      paddle(ctx, paddleProps);
      
      //paddle collision of the ball

      paddleCollision(ballObj, paddleProps, pcSound);

      //resting the ball and decrementing life after bottom line collison of the ball
      
      if(ballObj.y+ballObj.rad > 930){
        player.lives--;
        ballReset(ballObj, newLife, player);
      }

      //stats in canvas
      
      showGameStats(ctx, player.level, 930, 45, levelPNG, 875, 10);
      showGameStats(ctx, player.score, 70, 45, scorePNG, 20, 10);
      showGameStats(ctx, player.lives, canvas.width-50, 45, heartPNG, canvas.width-100, 10);
      onlyText(ctx, 'click anywhere in the page to resume gamesounds', window.innerWidth-370, window.innerHeight-10);
      onlyText(ctx, 'optimized only for full HD monitors', 8, window.innerHeight-10);
      
      //GAME_OVER
      gameOver(player);

      //LEVEL_UP
      function levelUP(){
        let isLevelUP = true;
        for (let r = 0; r<brickObj.row; r++){
            for (let c = 0; c<brickObj.column; c++){
                isLevelUP = isLevelUP && !bricks[r][c].status;
            }
        }
        if(isLevelUP){
          player.level++;
          paddleProps.x -= 16;
          paddleProps.yPOSI -= 12;
          ballObj.speed += 0.6;
          brickObj.row++;
          createBricks(bricks, brickObj);
          ballReset(ballObj, newLevel, player);
        }
      }

      levelUP(brickObj);
      
      //GAME_DONE

      gameDone(player);





      requestAnimationFrame(looping); 
    }
    looping(); 
  },[]);

  //creating on mouse move function

  function mouseMove(e){
    paddleProps.xPOSI = e.clientX-paddleProps.x/2;
  }
  
  return (
    <canvas id = "canvas" ref = {canvasRef} onMouseMove = {mouseMove} width = {window.innerWidth} height= {window.innerHeight}>
    </canvas>
  );
}

export default App;
