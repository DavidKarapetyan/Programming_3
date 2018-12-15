var matr = require("../modules/matrix");

function setup(){
    createCanvas(u[0].length * side, u.length * side);
    background('#acacac');
    frameRate(10);
}
var count = 0;
function draw() {
    if(count != 0 && count <= xoteriMinTokos){
        var andz_qanak = q * andzQanak / 100;
        var p = 0;
        while (p < andz_qanak) {
            var g = Math.floor(random(0, n));
            var f = Math.floor(random(0, n));
            if (u[g][f] == 0) {
                u[g][f] = new andzrev(f,g, 5);  
                p++;
            }
        }
    }

       
    for (var y = 0; y < u.length; y++) {
        for (x = 0; x < u[y].length; x++) {
            if (u[y][x].index == 1) {
                fill("green");
                rect(side * x, side * y, 50, 50);
            }
            else if (u[y][x].index == 2) {
                fill("yellow");
                rect(side * x, side * y, 50, 50);
                u[y][x].acted = false;
            }
            else if (u[y][x].index == 3) {
                fill("red");
                rect(side * x, side * y, 50, 50);
                u[y][x].acted = false;
            }
            else if (u[y][x].index == 4) {
                fill("black");
                rect(side * x, side * y, 50, 50);
                u[y][x].eat();
                u[y][x].acted = false;
            }
            else if (u[y][x].index == 5) {
                fill("white");
                rect(side * x, side * y, 50, 50);
            }
            else if (u[y][x] == 0) {
                fill("grey");
                rect(side * x, side * y, 50, 50);
            }
        }
    }
    count = 0;
}