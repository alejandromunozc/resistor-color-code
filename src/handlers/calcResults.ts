import { bandColors, multiplierbandColors, toleranceBandColors, toleranceBandValues } from "./values"

const calcBandResult = {
    color: 'bg-black',
    nextColor: 1,
    prevColor: 9,
}

const commonBand = (value:number) => {
    calcBandResult.color = bandColors[value]
    calcBandResult.nextColor = value >= 9 ? 0 : value + 1
    calcBandResult.prevColor = value <= 0 ? 9 : value - 1
}

const multiplyBand = (value:number) => {
    calcBandResult.color = multiplierbandColors[value]
    calcBandResult.nextColor = value >= 11 ? 0 : value + 1
    calcBandResult.prevColor = value <= 0 ? 11 : value - 1
}

const toleranceBand = (value:number) => {
    calcBandResult.color = toleranceBandColors[value]
    calcBandResult.nextColor = value >= 11 ? 0 : value + 1
    calcBandResult.prevColor = value <= 0 ? 11 : value - 1
}

const ppmBand = (value:number) => {

}

export const fourBands = (band:number, value:number) => {
    switch(band){
        case 1:
            commonBand(value)
            break;
        case 2:
            commonBand(value)
            break;
        case 3:
            multiplyBand(value)
            break;
        case 6:
            toleranceBand(value)
            break;
        default:
            break
    }
    return calcBandResult
}

export const fiveBands = (band:number, value:number) => {
    switch(band){
        case 1:
            commonBand(value)
            break
        case 2:
            commonBand(value)
            break
        case 3:
            commonBand(value)
            break
        case 4:
            multiplyBand(value)
            break
        case 6:
            toleranceBand(value)
            break
        default:
            break
    }
}

export const sixBands = (band:number, value:number) => {
    switch(band){
        case 1:
            commonBand(value)
            break
        case 2:
            commonBand(value)
            break
        case 3:
            commonBand(value)
            break
        case 4:
            multiplyBand(value)
            break
        case 5:
            toleranceBand(value)
            break
        case 6:
            ppmBand(value)
            break
        default:
            break
    }
}