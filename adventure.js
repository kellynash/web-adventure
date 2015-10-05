function Grid(numRow, numCol) {
    this.numRow = numRow;
    this.numCol = numCol;
    this.makeGrid = function () {
        console.log("makeGrid");
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
var adventure;


function newGrid() {
    abe = new Player(0, 0, "abe", "<img src=\"small_abe.png\"></img>");
    frank = new Player(3, 3, "<img src=\"frank.png\"></img>");
    adventure = new Adventure (abe, 10, 10, 10);
    var newGrid = new Grid(adventure.size, adventure.size);
    newGrid.makeGrid();
    adventure.movChar();
    adventure.target();
    // frank.movChar();
    // frank.target();
};

function Player(x, y, name, avatar) {
    this.x = x;
    this.y = y;
    this.name = name;
    this.avatar = avatar;
};


function Adventure(abe, endY, endX, bound) {
    this.start = abe;
    this.endX = endX;
    this.endY = endY;
    this.bound = bound;
    this.size = bound + 1;
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
   
console.log("movChar: " + this.start.y.toString() + 
        this.start.x.toString())
    document.getElementById(this.start.y.toString() + 
        this.start.x.toString()).innerHTML = this.start.avatar;
};

Adventure.prototype.hideAbe = function(xChange, yChange){
    document.getElementById((this.start.y + yChange).toString() + 
        (this.start.x + xChange).toString()).innerHTML = "";
};

Adventure.prototype.mov = function(xDel, yDel, x, y){
    if(this.start.x + x === this.endX
        && this.start.y + y === this.endY) {
            this.start.x += x;
            this.start.y += y;
            this.hideAbe(xDel, yDel);  
            this.killAbe();
            dead.play();
            alert("Whuuthaa!!??");
    }
    else if (this.start.y + y < 0 || this.start.y + y === this.bound + 1) {
        holdon.play();
        alert("D'oh!!!");
    }
    else if (this.start.x + x < 0 || this.start.x + x === this.bound + 1) {
        coon.play();
        alert("D'oh!!!");
    }
    else {
        this.start.x += x;
        this.start.y += y;
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
    this.hideAbe(0, 0);
    this.start.x = 0;
    this.start.y = 0;
    this.movChar();
    this.target();
};
