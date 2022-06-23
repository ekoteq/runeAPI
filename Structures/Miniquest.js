'use strict';

class Miniquest {
    constructor(data) {
        this.name = data.name;
        this.release = data.release;
        this.members = data.members ?? false;
        this.difficulty = data.difficulty;
        this.length = data.length;
    };
};

module.exports = Miniquest;