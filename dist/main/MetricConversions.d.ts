declare class MetricConversions {
    private finalDistance;
    protected degreesToRadians(degrees: number): number;
    protected _toKilometers(distanceInKm: number): string;
    protected _toMeters(distanceInKm: number): string;
    protected _toMiles(distanceInKm: number): string;
    protected _toYards(distanceInKm: number): string;
    protected _toFeet(distanceInKm: number): string;
}
export { MetricConversions };
