'use strict'

const GeojsonUtils = require('geojson-utils')

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

    return distance <= 75000
}

module.exports = {
    isDistanceSmallerThan75KM
}