var LivingCreature = require(".class.LivingCreature");
module.exports = class amen {
    constructor(x, y, index,side) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.energy = 8;
        this.side = side;


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