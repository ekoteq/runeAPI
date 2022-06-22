'use strict';

class Quest {
    constructor(data) {
        this.name = data.name;
        this.members = data.members ?? false;
    };
};

module.exports = Quest;