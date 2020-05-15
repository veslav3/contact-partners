'use strict';

class Partner {
    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.location = null;
    }

    addLocation(location) {
        this.location = location
    }
}

module.exports = Partner;
