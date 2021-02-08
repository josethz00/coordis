"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coordis = void 0;
const MetricConversions_1 = require("./MetricConversions");
class Coordis extends MetricConversions_1.MetricConversions {
    constructor() {
        super();
        this.radius = 6371;
    }
    calculate(positionOne, positionTwo) {
        const radians = {
            latitude: this.degreesToRadians(positionOne.latitude - positionTwo.latitude),
            longitude: this.degreesToRadians(positionOne.longitude - positionTwo.longitude)
        };
        const firstOperation = Math.sin(radians.latitude / 2)
            * Math.sin(radians.latitude / 2)
            + Math.cos(this.degreesToRadians(positionOne.latitude))
                * Math.cos(this.degreesToRadians(positionOne.latitude))
                * Math.sin(radians.longitude / 2)
                * Math.sin(radians.longitude / 2);
        const secondOperation = 2 * Math.atan2(Math.sqrt(firstOperation), Math.sqrt(1 - firstOperation));
        const final = (this.radius * secondOperation * 1000) / 1000;
        return final;
    }
    toMeters(positionOne, positionTwo) {
        return super._toMeters(this.calculate(positionOne, positionTwo));
    }
    toKilometers(positionOne, positionTwo) {
        return super._toKilometers(this.calculate(positionOne, positionTwo));
    }
    toMiles(positionOne, positionTwo) {
        return super._toMiles(this.calculate(positionOne, positionTwo));
    }
    toYards(positionOne, positionTwo) {
        return super._toYards(this.calculate(positionOne, positionTwo));
    }
    toFeet(positionOne, positionTwo) {
        return super._toFeet(this.calculate(positionOne, positionTwo));
    }
}
const coordis = new Coordis();
exports.coordis = coordis;
