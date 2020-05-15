'use strict';

const Partner = require('../../models/partner');

test('Partner should be constructed correctly', () => {
    expect(new Partner(input.name, input.address)).toEqual(expected)
});

test('Partner should have no name', () => {
    let x;
    delete expected.name;
    expect(new Partner(x, input.address)).toEqual(expected)
});

const input = {
    "name": "Wavetech",
    "address": {
        "no": "185",
        "street": "Hagmolenbeekweg",
        "city": "Enschede",
        "country": "The Netherlands"
    }
};

const expected =  {
    "name": "Wavetech",
    "address": {
        "no": "185",
        "street": "Hagmolenbeekweg",
        "city": "Enschede",
        "country": "The Netherlands"
    },
    "location": null
};
