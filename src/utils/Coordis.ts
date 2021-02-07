import { IPosition } from "../interfaces/IPosition";
import { MetricConversions } from "./MetricConversions";


class Coordis extends MetricConversions {

    private radius: number;

    constructor () {
        super();
        this.radius = 6371;
    }

    private calculate (
        positionOne: IPosition,
        positionTwo: IPosition
    ): number {
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

    public toMeters (
        positionOne: IPosition,
        positionTwo: IPosition
    ): string {
        return super._toMeters(this.calculate(positionOne, positionTwo));
    }

    public toKilometers (
        positionOne: IPosition,
        positionTwo: IPosition
    ): string {
        return super._toKilometers(this.calculate(positionOne, positionTwo));
    }

    public toMiles (
        positionOne: IPosition,
        positionTwo: IPosition
    ): string {
        return super._toMiles(this.calculate(positionOne, positionTwo));
    }

    public toYards (
        positionOne: IPosition,
        positionTwo: IPosition
    ): string {
        return super._toYards(this.calculate(positionOne, positionTwo));
    }

    public toFeet (
        positionOne: IPosition,
        positionTwo: IPosition
    ): string {
        return super._toFeet(this.calculate(positionOne, positionTwo));
    }
}

const coordis = new Coordis();

export { coordis };
