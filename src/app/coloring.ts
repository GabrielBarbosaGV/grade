export function invertRgb(rgb: string): string {
    let valueStrings: string[] = rgb.split(/[^\d]+/).filter(str => str !== "");
    let values: number[] = valueStrings.map(str => (255 - parseInt(str)));

    //return "rgb(" + values[0] + ", " + values[1] + ", " + values[2] + ")";
    return rgbfy(...values);
}

export function getRandomRgb(maxBrightness: number = 255): string {
    let rgb = [
        Math.round(Math.random() * maxBrightness),
        Math.round(Math.random() * maxBrightness),
        Math.round(Math.random() * maxBrightness)
    ]

    return rgbfy(...rgb);
}

export function rgbfy(...rgb: number[]): string {
    return "rgb(" + rgb.join(", ") + ")";
}