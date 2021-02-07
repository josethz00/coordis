class MetricConversions {

    private finalDistance!: string;

    protected degreesToRadians (degrees: number): number {
        const radians = degrees * (Math.PI / 180);

        return radians;
    }

    protected _toKilometers (distanceInKm: number): string {
        this.finalDistance = distanceInKm
            .toPrecision(5);

        return `${this.finalDistance} km`;
    }

    protected _toMeters (distanceInKm: number): string {
        this.finalDistance = (distanceInKm * 1000)
            .toPrecision(5);

        return `${this.finalDistance} m`;
    }

    protected _toMiles (distanceInKm: number): string {
        this.finalDistance = (distanceInKm * 0.62137)
            .toPrecision(5);

        return `${this.finalDistance} mi`;
    }

    protected _toYards (distanceInKm: number): string {
        this.finalDistance = (distanceInKm * 1093.6)
            .toPrecision(5);

        return `${this.finalDistance} yd`;
    }

    protected _toFeet (distanceInKm: number): string {
        this.finalDistance = (distanceInKm * 1093.6)
            .toPrecision(5);

        return `${this.finalDistance} ft`;
    }
}

export { MetricConversions };
