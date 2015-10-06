function mov(xChange, yChange) {
	
	if(xCoord === (endX + xChange) && yCoord === (endY + yChange)) {
        yCoord++;
        hideAbe(xHChange, yChange);	
        killAbe();
        alert("Whuuthaa!!??");
	}
	else if (yCoord === 2) {
        alert("D'oh!!!");
    }
        else {
        yCoord++;
		hideAbe(xChange, yChange);
		movAbe();
	};
}

movDown(0, -1);
movUp(0, 1, );
movLeft(1, 0);
movRight(-1, 0);