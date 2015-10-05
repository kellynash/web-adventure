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

var abe;
var frank;

function newGrid() {
    abe = new Adventure(0, 0, 3, 3, 3, "<img src=\"small_abe.png\"></img>");
    frank = new Adventure(3, 3, 2, 2, 3, "<img src=\"frank.png\"></img>")
    //newAbe = new Adventure (2, 3, 2, 2, 3);
    var newGrid = new Grid(abe.size, abe.size);
    newGrid.makeGrid();
    abe.movChar();
    abe.target();
    frank.movChar();
    frank.target();
};




function Adventure(startY, startX, endY, endX, bound, avatar) {
    this.startY = startY;
    this.startX = startX;
    this.endX = endX;
    this.endY = endY;
    this.bound = bound;
    this.size = bound + 1;
    this.avatar = avatar;

};




Adventure.prototype.killAbe = function(){
    document.getElementById(this.endY.toString() + 
        this.endX.toString()).innerHTML = "<img src=\"dead.jpg\"></img>";
};

Adventure.prototype.target = function(){
    document.getElementById(this.endY.toString() + 
        this.endX.toString()).innerHTML = "<img src=\"retire.png\"></img>";
};

Adventure.prototype.movChar = function(){
    document.getElementById(this.startY.toString() + 
        this.startX.toString()).innerHTML = this.avatar;
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
        this.movChar();
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
    this.movChar();
    this.target();
};
