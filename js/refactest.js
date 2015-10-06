function mov(adjacX, adjacY, xChange, yChange) {
	
	
	if(xCoord === (endX + adjacX) && yCoord === (endY + adjacY)) {
        yCoord++;
        hideAbe(yChange , xChange);	
        killAbe();
        alert("Whuuthaa!!??");
	}
	else if (yCoord === 2) {
        alert("D'oh!!!");
    }
        else {
        yCoord + ychange;
		hideAbeDown();
		movAbe();
	};
}

function movDown = mov(0, -1, 0, 1);
function movUp = mov(0, 1, 0, -1);
function movLeft = mov(1, 0, -1,0);
function movRight = mov(-1, 0, 1,0);