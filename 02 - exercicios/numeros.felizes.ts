
export function numbersSplits(value: number): number[] {
    
    let digitSplit = value.toString().split("")
    return digitSplit.map(Number)
}

export function squareSumOfNumbers(value: number[]): number {
    return value
        .map(number => number * number)
        .reduce((number, accumulator) => number + accumulator, 0)
}

export function thisNumberExistInArray(value: number, arr: number[]) : boolean {
    return arr.some(number => number === value)
}

export function numberHappy(value: number, arr: Array<number> = []): string {    
    
    let digits = numbersSplits(value)
    let sum = squareSumOfNumbers(digits)
    // return isNumberHappy(sum, arr) ? "Numero feliz" : "Numero não é feliz"
    if(sum !== 1){
        const result = arr.some(number => number === sum)
        arr.push(sum)

        return result ? "Numero não é feliz" : numberHappy(sum, arr)
    }
    
    return "Numero feliz"
}