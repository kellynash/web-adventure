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
var retirementHome;
var adventure;
 


function newGrid() {
    abe = new Player(0, 0, "abe", "<img src=\"small_abe.png\"></img>");
    frank = new Obstacle("<img src=\"frank.png\"></img>");
    retirementHome = new Goal("<img src=\"retire.png\"></img>")
    adventure = new Adventure (abe, 5, 5, 5);
    var newGrid = new Grid(adventure.size, adventure.size);
    newGrid.makeGrid();
    adventure.movChar();
    adventure.target();
    adventure.roadBlock();

};

function Player(x, y, name, avatar) {
    this.x = x;
    this.y = y;
    this.name = name;
    this.avatar = avatar;
};

function Goal(goalPic) {
    this.x = Math.floor((Math.random() * 5) + 1);
    this.y = Math.floor((Math.random() * 5) + 1);
    this.goalPic = goalPic;
};

function Obstacle (obPic) {
    this.x = Math.floor((Math.random() * 5) + 1);
    this.y = Math.floor((Math.random() * 5) + 1);
    this.obPic = obPic;
};

function Adventure(abe, end, bound, obstacle) {
    this.start = abe;
    this.end = retirementHome;
    this.obstacle = frank;
    this.bound = bound;
    this.size = bound + 1;
};


Adventure.prototype.killAbe = function(){
    document.getElementById(this.end.y.toString() + 
        this.end.x.toString()).innerHTML = "<img src=\"dead.jpg\"></img>";
};

Adventure.prototype.target = function(){
    document.getElementById(this.end.y.toString() + 
        this.end.x.toString()).innerHTML = this.end.goalPic;
};

Adventure.prototype.roadBlock = function(){
    document.getElementById(this.obstacle.y.toString() + 
        this.obstacle.x.toString()).innerHTML = this.obstacle.obPic;
};

Adventure.prototype.movChar = function(){
    document.getElementById(this.start.y.toString() + 
        this.start.x.toString()).innerHTML = this.start.avatar;
};

Adventure.prototype.hideAbe = function(xChange, yChange){
    document.getElementById((this.start.y + yChange).toString() + 
        (this.start.x + xChange).toString()).innerHTML = "";
};

Adventure.prototype.mov = function(xDel, yDel, x, y){
    if(this.start.x + x === this.end.x
        && this.start.y + y === this.end.y) {
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

    } else if(this.start.x + x === this.obstacle.x
        && this.start.y + y === this.obstacle.y) {
            this.start.x += x;
            this.start.y += y;
            this.hideAbe(xDel, yDel);  
            this.reset();
            dead.play();
            alert("Auuuughhh back to where you came from!")
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
    this.roadBlock();
};
