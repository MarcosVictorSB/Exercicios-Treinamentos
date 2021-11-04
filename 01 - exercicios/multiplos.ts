export default function sumNaturalNumbersBelow(value: number): number {
    let result = 0
    for(let i = 0; i < value; i++){
        const divisible3Or5 = i % 3 == 0 || i % 5 == 0
        if(divisible3Or5){
            result += i;
        }
    }
    
    return result
}