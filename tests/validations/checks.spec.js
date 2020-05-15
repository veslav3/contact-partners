'use strict';

const Checks = require('../../validations/checks');

test('Not smaller than 75 km.', () => {
    expect(Checks.isDistanceSmallerThan75KM(WEBBIO_LOCATION, FAR_LOCATION)).toBe(false)
});

test('Smaller than 75 km.', () => {
    expect(Checks.isDistanceSmallerThan75KM(WEBBIO_LOCATION, CLOSE_LOCATION)).toBe(true)
});

const WEBBIO_LOCATION = {
    lat: 51.839549,
    lng: 5.87837
};

const FAR_LOCATION = {
    lat: 53.217957402184865,
    lng: 6.56707763671875
};

const CLOSE_LOCATION = {
    lat: 51.8406408,
    lng: 5.866327699999999
};
