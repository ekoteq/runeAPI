'use strict';

class Quest {
    constructor(data) {
        this.name = data.name;
        this.release = data.release;
        this.members = data.members ?? false;
        this.difficulty = data.difficulty;
    };
};

module.exports = Quest;