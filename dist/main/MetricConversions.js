"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricConversions = void 0;
class MetricConversions {
    degreesToRadians(degrees) {
        const radians = degrees * (Math.PI / 180);
        return radians;
    }
    _toKilometers(distanceInKm) {
        this.finalDistance = distanceInKm
            .toPrecision(5);
        return `${this.finalDistance} km`;
    }
    _toMeters(distanceInKm) {
        this.finalDistance = (distanceInKm * 1000)
            .toPrecision(5);
        return `${this.finalDistance} m`;
    }
    _toMiles(distanceInKm) {
        this.finalDistance = (distanceInKm * 0.62137)
            .toPrecision(5);
        return `${this.finalDistance} mi`;
    }
    _toYards(distanceInKm) {
        this.finalDistance = (distanceInKm * 1093.6)
            .toPrecision(5);
        return `${this.finalDistance} yd`;
    }
    _toFeet(distanceInKm) {
        this.finalDistance = (distanceInKm * 1093.6)
            .toPrecision(5);
        return `${this.finalDistance} ft`;
    }
}
exports.MetricConversions = MetricConversions;
