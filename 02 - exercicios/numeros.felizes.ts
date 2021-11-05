export default function numberHappy(value: number, arr: Array<number> = []): string {
    
    const arraySum = arr
    
    let sum = 0
    let digitSplit = value.toString().split('')
    let digits = digitSplit.map(Number)
    
    sum = digits
        .map(number => number * number) // [49] [16, 81] [81, 49] [1, 9, 0] [1, 0]
        .reduce((number, accumulator) => accumulator + number, 0) // [49] [97] [130] [10] [1]

    if(sum !== 1){
        const result = arraySum.some(number => number === sum)
        if(result){
            return "Numero não é feliz"
        }

        numberHappy(sum, arraySum)    
    }
    
    return "Numero feliz"
    
}