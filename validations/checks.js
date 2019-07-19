'use strict'

const GeojsonUtils = require('geojson-utils')

const MAX_DISTANCE_IN_METERS = 75000

const isDistanceSmallerThan75KM = (point1, point2) => {
    const distance = GeojsonUtils.pointDistance(
        {
            'type': 'Point',
            'coordinates': [point1.lng, point1.lat]
        },
        {
            'type': 'Point',
            'coordinates': [point2.lng, point2.lat]
        }
    )

    return distance <= MAX_DISTANCE_IN_METERS
}

module.exports = {
    isDistanceSmallerThan75KM
}