class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
    chooseCell(num) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < u[0].length && y >= 0 && y < u.length) {
                if (u[y][x] == num) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }
    mul() {
        this.multiply++
        var newCell = random(this.chooseCell(0));
        if (newCell && this.multiply >= 5) {
            var newX = newCell[0];
            var newY = newCell[1];
            u[newY][newX] = new Grass(newX, newY, 1);
            this.multiply = 0;
        }
    }
}





class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.acted = false;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(num) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < u[0].length && y >= 0 && y < u.length) {
                if (u[y][x] == num) {
                    found.push([x, y]);
                }
                else if (u[y][x].index == num) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }

    mul() {
        var newGe = random(this.chooseCell(0));
        if (newGe) {
            var newX = newGe[0];
            var newY = newGe[1];
            u[newY][newX] = new GrassEater(newX, newY, 2);
        }
    }
    die() {
        if (this.energy <= 0) {
            u[this.y][this.x] = 0;
        }
    }
    eat() {
        if (this.acted == false) {
            var ea = random(this.chooseCell(1));
            if (ea) {
                var newX = ea[0];
                var newY = ea[1];
                u[newY][newX] = u[this.y][this.x];
                u[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
                this.energy++;
                if (this.energy >= 12) {
                    this.mul();
                    this.energy = 6;
                }
                this.acted = true;
            }
            else {
                this.move();
            }
        }

    }
    move() {
        if (this.acted == false) {
            var newGe = random(this.chooseCell(0));
            if (newGe && this.energy >= 0) {
                var newX = newGe[0];
                var newY = newGe[1];
                u[newY][newX] = u[this.y][this.x];
                u[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
                this.energy--;
                if (this.energy <= 0) {
                    this.die();
                }
                this.acted = true;

            }
        }
    }

}





class gishat {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.energy = 8;


    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x - 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y - 2],
            [this.x + 1, this.y - 2]
        ];
    }
    chooseCell(num) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {

            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < u[0].length && y >= 0 && y < u.length) {

                if (u[y][x] == num) {
                    found.push([x, y]);
                }
                else if (u[y][x].index == num) {
                    found.push([x, y]);
                }

            }
        }

        return found;
    }
    mul() {
        var newGe = random(this.chooseCell(0));
        if (newGe && this.multiply >= 20) {
            var newX = newGe[0];
            var newY = newGe[1];
            u[newY][newX] = new gishat(newX, newY, 3);
        }
    }
    die() {

        u[this.y][this.x] = 0;

    }
    eat() {
        if (this.acted == false) {
            var ea = random(this.chooseCell(2));
            if (ea) {
                var newX = ea[0];
                var newY = ea[1];
                u[newY][newX] = u[this.y][this.x];
                u[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
                this.energy++;
                if (this.energy >= 12) {
                    this.mul();
                    this.energy = 6
                }
                this.acted = true;

            }
            else {
                this.move();
            }
        }
    }
    move() {
        if (this.acted == false) {
            var newg = random(this.chooseCell(0));
            var newgi = random(this.chooseCell(1));
            if (newg) {
                var newX = newg[0];
                var newY = newg[1];
                u[newY][newX] = u[this.y][this.x];
                u[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
                this.energy -= 2;
                if (this.energy <= 0) {
                    this.die();

                }
                this.acted = true
            }
            else if (newgi) {
                var newX = newgi[0];
                var newY = newgi[1];
                u[newY][newX] = u[this.y][this.x];
                u[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
                this.energy -= 2;
                if (this.energy <= 0) {
                    this.die();
                }
                this.acted = true;
            }
        }
    }
}



class amen {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.energy = 8;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x - 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y - 2],
            [this.x + 1, this.y - 2]
        ];
    }
    chooseCell(num) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {

            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < u[0].length && y >= 0 && y < u.length) {

                if (u[y][x] == num) {
                    found.push([x, y]);
                }
                else if (u[y][x].index == num) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }
    mul() {
        var newGe = random(this.chooseCell(0));
        if (newGe && this.energy >= 20) {
            var newX = newGe[0];
            var newY = newGe[1];
            u[newY][newX] = new amen(newX, newY, 4);
            this.energy++;
        }
    }
    die() {

        u[this.y][this.x] = 0;

    }
    eat() {
        if (this.acted == false) {
            var ea = random(this.chooseCell(2));
            var eae = random(this.chooseCell(3));
            var eay = random(this.chooseCell(1));
            if (ea || eae || eay) {
                if (ea) {
                    var newX = ea[0];
                    var newY = ea[1];
                    u[newY][newX] = u[this.y][this.x];
                    u[this.y][this.x] = 0;
                    this.x = newX;
                    this.y = newY;
                    this.energy++;
                    if (this.energy >= 12) {
                        this.mul();
                        this.energy = 6
                    }
                    this.acted = true;

                }
                else if (eae) {
                    var newX = eae[0];
                    var newY = eae[1];
                    u[newY][newX] = u[this.y][this.x];
                    u[this.y][this.x] = 0;
                    this.x = newX;
                    this.y = newY;
                    this.energy++;
                    if (this.energy >= 12) {
                        this.mul();
                        this.energy = 6
                    }
                    this.acted = true;
                }
                else if (eay) {
                    var newX = eay[0];
                    var newY = eay[1];
                    u[newY][newX] = u[this.y][this.x];
                    u[this.y][this.x] = 0;
                    this.x = newX;
                    this.y = newY;
                    this.energy++;
                    if (this.energy >= 20) {
                        this.mul();
                        this.energy = 6;
                    }
                    this.acted = true;
                }
            }
            else {
                this.move();
            }
        }
    }
    move() {
        if (this.acted == false) {
            var newg = random(this.chooseCell(0));
            if (newg) {
                var newX = newg[0];
                var newY = newg[1];
                u[newY][newX] = u[this.y][this.x];
                u[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
                this.energy -= 2;
                if (this.energy <= 0) {
                    this.die();

                }
                this.acted = true
            }
        }
    }
}
class andzrev {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    die() {
        u[this.y][this.x] = 0;
}
    chooseCell(num) {
        var found = [];
        for (var i in this.directions) {

            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < u[0].length && y >= 0 && y < u.length) {

                if (u[y][x] == num) {
                    found.push([x, y]);
                }
                else if (u[y][x].index == num) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }
    createGrass(){
        var datarkner = this.chooseCell(0);
        for (var i in datarkner){
            var x = datarkner[i][0];
            var y = datarkner[i][1];
            u[y][x] = new Grass(x,y,1);
        }
        this.die();
    }
}