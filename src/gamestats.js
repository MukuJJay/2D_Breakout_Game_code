export function showGameStats(ctx, text, textX, textY, img, imgX, imgY){
    ctx.fillStyle = "#FFF";
    ctx.font = "40px Patrick Hand";
    ctx.fillText(text, textX, textY);
    ctx.drawImage(img, imgX, imgY, 40, 40);
}

export function gameOver(player){
    if (player.lives < 0){
        alert("Game Over. Play Again?");
        player.lives++;
        window.location.reload();
    }
}

export function gameDone(player){
    if (player.level > 5){
        alert("You WIN !!!. Play Again?");
        player.level--;
        window.location.reload();
    }

}

export function onlyText(ctx, text, textX, textY){
    ctx.fillStyle = "#FFF";
    ctx.font = "20px Patrick Hand";
    ctx.fillText(text, textX, textY);
}