var adventure = {
    yCoord: 0,
    xCoord: 0,
    endX: 2,
    endY: 2,
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
}
};
