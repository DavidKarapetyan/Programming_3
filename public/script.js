var u = [];
var side = 10;
var n = 80;
var xotQanak = 70;
var xotakerQanak = 20;
var gishatichQanak = 5;
var adQanak = 1;
var andzQanak = 1;
var xoteriMinTokos = 10*n*n/100;
var q = n * n;

function setup() {

    for (var k = 0; k < n; k++) {
        u.push([]);
        for (var l = 0; l < n; l++) {
            u[k][l] = 0;
        }
    }

    u[8][8] = 5;

    var p = 0;
    
    var xot_qanak = q * xotQanak / 100;
    while (p < xot_qanak) {
        var g = Math.floor(random(0, n));
        var f = Math.floor(random(0, n));
        if (u[g][f] == 0) {
            u[g][f] = 1;
            p++;
        }
    }

    p = 0;
    var xotaker_qanak = q * xotakerQanak / 100;
    while (p < xotaker_qanak) {
        var g = Math.floor(random(0, n));
        var f = Math.floor(random(0, n));
        if (u[g][f] == 0) {
            u[g][f] = 2;
            p++;
        }
    }
    p = 0;
    var gishatich_qanak = q * gishatichQanak / 100;
    while (p < gishatich_qanak) {
        var g = Math.floor(random(0, n));
        var f = Math.floor(random(0, n));
        if (u[g][f] == 0) {
            u[g][f] = 3;
            p++;
        }
    }
    p = 0;
    var ad_qanak = q * adQanak / 100;
    while (p < ad_qanak) {
        var g = Math.floor(random(0, n));
        var f = Math.floor(random(0, n));
        if (u[g][f] == 0) {
            u[g][f] = 4;
            p++;
        }
    }
    var andz_qanak = q * andzQanak / 100;
    var p = 0;
    while (p < andz_qanak) {
        var g = Math.floor(random(0, n));
        var f = Math.floor(random(0, n));
        if (u[g][f] == 0) {
            u[g][f] = 5;
            p++;
        }
    }
    for (var y = 0; y < u.length; y++) {
        for (var x = 0; x < u[y].length; x++) {
            if (u[y][x] == 1) {
                u[y][x] = new Grass(x, y, 1);
            }
            else if (u[y][x] == 2) {
                u[y][x] = new GrassEater(x, y, 2);
            }
            else if (u[y][x] == 3) {
                u[y][x] = new gishat(x, y, 3);
            }
            else if (u[y][x] == 4) {
                u[y][x] = new amen(x, y, 4);
            }
            else if (u[y][x] == 5) {
                u[y][x] = new andzrev(x, y, 5);
            }

        }
    }
    console.log(u);
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
    for (var y = 0; y < u.length; y++) {
        for (x = 0; x < u[y].length; x++) {
            if (u[y][x].index == 1) {
                count++;
                u[y][x].mul();
            }
            else if (u[y][x].index == 2) {
                u[y][x].eat();
            }
            else if (u[y][x].index == 3) {
                u[y][x].eat();
            }
            
            else if (u[y][x].index == 5) {
                u[y][x].createGrass();
            }
        }

    }
}