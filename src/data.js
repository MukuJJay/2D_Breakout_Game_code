export default {
    
    ballObj:{
        x:770,
        y:850,
        dx:-5,
        dy:-5,
        rad:10,
        speed:7.071067811865475,
    },

    brickObj:{
        row:2,
        column:12,
        offsetLeft:50,
        offsetTop:20,
        marginTop:50,
        width:window.innerWidth/18-1,
        height:20,
        fillColor:"orange",
        strokeColor:"white"
    },

    player:{
        lives:3,
        score:0,
        level:1
    },

    paddleProps:{
        xPOSI:700,
        yPOSI:window.innerHeight-60,
        x:180,
        y:25,
        fillColor:"brown",
        strokeColor:"white"
    }
}