export default class Divisible {    
    sumNaturalNumbersDivisible3Or5Below(value: number): number {
        let result = 0
        for(let i = 0; i < value; i++){
            const divisible3Or5 = i % 3 == 0 || i % 5 == 0
            if(divisible3Or5){
                result += i;
            }
        }
        
        return result
    }

    sumNaturalNumbersDivisible3And5Below(value: number): number {
        let result = 0
        for(let i = 0; i < value; i++){
            const divisible3And5 = i % 3 == 0 && i % 5 == 0
            if(divisible3And5){
                result += i;
            }
        }
        
        return result 
    }
}
