var adventure = {
    yCoord: 0,
    xCoord: 0,
    endX: 8,
    endY: 8,
    killAbe: function(){
    document.getElementById(adventure.endY.toString() + adventure.endX.toString()).innerHTML = "<img src=\"dead.jpg\"></img>";
    },
    target: function(){
    document.getElementById(adventure.endY.toString() + adventure.endX.toString()).innerHTML = "<img src=\"retire.png\"></img>";
    },
    movAbe: function(){
    document.getElementById(adventure.yCoord.toString() + adventure.xCoord.toString()).innerHTML = "<img src=\"small_abe.png\"></img>";
    },
    hideAbe: function(xChange, yChange){
    document.getElementById((adventure.yCoord + yChange).toString() + (adventure.xCoord + xChange).toString()).innerHTML = "";
    },
    mov: function (xDel, yDel, x, y, bound) {
    
        if(adventure.xCoord === (adventure.endX + xDel) && adventure.yCoord === (adventure.endY + yDel)) {
            adventure.xCoord += x;
            adventure.yCoord += y;
            adventure.hideAbe(xDel, yDel);  
            adventure.killAbe();
            dead.play();
            alert("Whuuthaa!!??");
        }
        else if (adventure.yCoord === bound && yDel != 0) {
            holdon.play();
            alert("D'oh!!!");
        }
        else if (adventure.xCoord === bound && xDel != 0) {
            coon.play();
            alert("D'oh!!!");
        }
            else {
            adventure.xCoord += x;
            adventure.yCoord += y;
            adventure.hideAbe(xDel, yDel);
            adventure.movAbe();
        };
    },
        movDown: function() {
            adventure.mov(0, -1, 0, 1, 8);
        }, 
        movUp: function() {
            adventure.mov(0, 1, 0, -1, 0);
        }, 
        movLeft: function() {
            adventure.mov(1, 0, -1, 0, 0);
        }, 
        movRight: function() {
            adventure.mov(-1, 0, 1, 0, 8);
        },

        reset: function() {
            adventure.hideAbe(0,0);
            adventure.xCoord = 0;
            adventure.yCoord = 0;
            adventure.movAbe();
            adventure.target();
        }
};
