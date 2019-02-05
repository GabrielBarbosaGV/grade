export function invertRgb(rgb: string): string {
    let valueStrings: string[] = rgb.split(/[^\d]+/).filter(str => str !== "");
    let values: number[] = valueStrings.map(str => (255 - parseInt(str)));

    //return "rgb(" + values[0] + ", " + values[1] + ", " + values[2] + ")";
    return rgbfy(...values);
}

export function getRandomRgb(): string {
    let rgb = [
        Math.round(Math.random() * 255),
        Math.round(Math.random() * 255),
        Math.round(Math.random() * 255)
    ]

    return rgbfy(...rgb);
}

export function rgbfy(...rgb: number[]): string {
    return "rgb(" + rgb.join(", ") + ")";
}