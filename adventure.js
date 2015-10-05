function Grid(numRow, numCol) {
    this.numRow = numRow;
    this.numCol = numCol;
    this.makeGrid = function () {
        for (i = 0; i < this.numRow; i++) {
            document.write('<div class="row">');
            for (j = 0; j < this.numCol; j++) {
                document.write('<div id="' + i.toString() + j.toString() + '" class="col-xs-3 cell"></div>');
            }
            document.write("</div>");
        }
        document.write("</div>");
    };
}

var adventure;
var newAbe;

function newGrid() {
    adventure = new Adventure(0, 0, 3, 3, 3);
    //newAbe = new Adventure (2, 3, 2, 2, 3);
    var newGrid = new Grid(adventure.size, adventure.size);
    newGrid.makeGrid();
    adventure.movAbe();
    adventure.target();

};




function Adventure(startY, startX, endY, endX, bound) {
    this.startY = startY;
    this.startX = startX;
    this.endX = endX;
    this.endY = endY;
    this.bound = bound;
    this.size = bound + 1;
};

function Monster(startY, startX, endY, endX) {
    this.startX= this.startX;
    this.startY= this.startY;
    this.endX = this.endX;
    this.endY = this.endY;
    this.avatar = "<img src=\"small_abe.png\"></img>";
};




Adventure.prototype.killAbe = function(){
    document.getElementById(this.endY.toString() + 
        this.endX.toString()).innerHTML = "<img src=\"dead.jpg\"></img>";
};

Adventure.prototype.target = function(){
    document.getElementById(this.endY.toString() + 
        this.endX.toString()).innerHTML = "<img src=\"retire.png\"></img>";
};

Adventure.prototype.movAbe = function(){
    document.getElementById(this.startY.toString() + 
        this.startX.toString()).innerHTML = this.Monster.avatar;
};

Adventure.prototype.hideAbe = function(xChange, yChange){
    document.getElementById((this.startY + yChange).toString() + 
        (this.startX + xChange).toString()).innerHTML = "";
};

Adventure.prototype.mov = function(xDel, yDel, x, y){
    if(this.startX + x === this.endX
        && this.startY + y === this.endY) {
            this.startX += x;
            this.startY += y;
            this.hideAbe(xDel, yDel);  
            this.killAbe();
            dead.play();
            alert("Whuuthaa!!??");
    }
    else if (this.startY + y < 0 || this.yCoord + y === this.bound + 1) {
        holdon.play();
        alert("D'oh!!!");
    }
    else if (this.startX + x < 0 || this.startX + x === this.bound + 1) {
        coon.play();
        alert("D'oh!!!");
    }
    else {
        this.startX += x;
        this.startY += y;
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
    this.startX = 0;
    this.startY = 0;
    this.movAbe();
    this.target();
};
