export default function numberHappy(value: number, arr: Array<number> = []): string {
    
    let digitSplit = value.toString().split("")
    let digits = digitSplit.map(Number)

    let sum = digits
                .map(number => number * number)
                .reduce((number, accumulator) => number + accumulator, 0)
    
    if(sum !== 1){
        const result = arr.some(number => number === sum)
        arr.push(sum)

        return result ? "Numero não é feliz" : numberHappy(sum, arr)
    }
    
    return "Numero feliz"
}