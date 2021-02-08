import { IPosition } from "../interfaces/IPosition";
import { MetricConversions } from "./MetricConversions";
declare class Coordis extends MetricConversions {
    private radius;
    constructor();
    private calculate;
    toMeters(positionOne: IPosition, positionTwo: IPosition): string;
    toKilometers(positionOne: IPosition, positionTwo: IPosition): string;
    toMiles(positionOne: IPosition, positionTwo: IPosition): string;
    toYards(positionOne: IPosition, positionTwo: IPosition): string;
    toFeet(positionOne: IPosition, positionTwo: IPosition): string;
}
declare const coordis: Coordis;
export { coordis };
