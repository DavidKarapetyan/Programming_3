module.exports = class LivingCreature {
    constructor(x, y, index,side) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.side = side;
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
                else if (u[y][x].index == num) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }
}