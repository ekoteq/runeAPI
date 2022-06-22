'use strict';

class Miniquest {
    constructor(data) {
        this.name = data.name;
        this.members = data.members ?? false;
    };
};

module.exports = Miniquest;