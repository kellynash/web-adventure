function Grid(numRow, numCol) {
    this.numRow = numRow;
    this.numCol = numCol;
    this.makeGrid = function (numRow, numCol) {
        var numRow = prompt("How many rows would you like?");
        var numCol = prompt("How many columns would you like?");
        document.write("<table border=1 width=80% height=80%>");
        for (i = 0; i < numRow; i++) {
            document.write("<tr>");
            for (j = 0; j < numCol; j++) {
                document.write("<td width=40 height=80>" + "" + "</td>");
            }
            document.write("</tr>");
        }
        document.write("</table border>");
    };
}

var newGrid = new Grid(10, 10);