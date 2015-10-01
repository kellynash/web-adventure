function Adventure(yCoord, xCoord, endX, endY, bound) {
    this.yCoord = yCoord;
    this.xCoord = xCoord;
    this.endX = endX;
    this.endY = endY;
    this.bound = bound;
};

var adventure = new Adventure (0, 0, 2, 2, 8);
var newAbe = new Adventure (2, 3, 2, 2, 8);
    
Adventure.prototype.killAbe = function(){
    document.getElementById(this.endY.toString() + 
        this.endX.toString()).innerHTML = "<img src=\"dead.jpg\"></img>";
};

Adventure.prototype.target = function(){
    document.getElementById(this.endY.toString() + 
        this.endX.toString()).innerHTML = "<img src=\"retire.png\"></img>";
};

Adventure.prototype.movAbe = function(){
    document.getElementById(this.yCoord.toString() + 
        this.xCoord.toString()).innerHTML = "<img src=\"small_abe.png\"></img>";
};

Adventure.prototype.hideAbe = function(xChange, yChange){
    document.getElementById((this.yCoord + yChange).toString() + 
        (this.xCoord + xChange).toString()).innerHTML = "";
};

Adventure.prototype.mov = function(xDel, yDel, x, y){
    if(this.xCoord + x === this.endX
        && this.yCoord + y === this.endY) {
        this.xCoord += x;
    this.yCoord += y;
    this.hideAbe(xDel, yDel);  
    this.killAbe();
    dead.play();
    alert("Whuuthaa!!??");
}
else if (this.yCoord + y < 0 || this.yCoord + y === this.bound + 1) {
    holdon.play();
    alert("D'oh!!!");
}
else if (this.xCoord + x < 0 || this.xCoord + x === this.bound + 1) {
    coon.play();
    alert("D'oh!!!");
}
else {
    this.xCoord += x;
    this.yCoord += y;
    this.hideAbe(xDel, yDel);
    this.movAbe();
};
};

Adventure.prototype.movDown = function(){
    this.mov(0, -1, 0, 1);
}; 

Adventure.prototype.movUp = function() {
    this.mov(0, 1, 0, -1);
}; 

Adventure.prototype.movLeft = function() {
    this.mov(1, 0, -1, 0);
}; 

Adventure.prototype.movRight = function() {
    this.mov(-1, 0, 1, 0);
};

Adventure.prototype.reset = function() {
    this.hideAbe(0,0);
    this.xCoord = 0;
    this.yCoord = 0;
    this.movAbe();
    this.target();
};

