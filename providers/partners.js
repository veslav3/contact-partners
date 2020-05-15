'use strict';

const Fs = require('fs');

const Partner = require('../models/partner');

const readPartnerList = (fileLocation) => {
    const partners = [];

    const readPartners = Fs.readFileSync(fileLocation);
    const parsed = JSON.parse(readPartners);

    parsed.forEach(p => {
        partners.push(new Partner(p.name, p.address))
    });

    return partners
};

const writePartnerList = (partners, fileLocation) => {
    partners.sort((a, b) => a.name > b.name);

    Fs.writeFileSync(fileLocation, JSON.stringify(partners))
};

module.exports = {
    readPartnerList,
    writePartnerList
};
