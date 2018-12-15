var LivingCreature = require(".class.LivingCreature");
module.exports =  class GrassEater extends LivingCreature {
    constructor(x, y, index) {
        super(x,y,index);
        this.energy = 8;
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
        return super.chooseCell(num);
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