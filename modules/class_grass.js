var LivingCreature = require(".class.LivingCreature");
module.exports = class Grass extends LivingCreature  {
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