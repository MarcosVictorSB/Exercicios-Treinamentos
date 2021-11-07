import { numberHappy } from "../02 - exercicios/numeros.felizes";
// import {sumNaturalNumbersDivisible3Or5Below} from "../01 - exercicios/multiplos"

const letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function valueWord(value: string): number {
    
    let result = 0
    for (let i = 0; i < value.length; i++) {
        result += letras.indexOf(value[i]) + 1
        
    }
    return result
}

export function numbersOfDividers(value: number): number{
    let count = 0
    for (let i = 1; i <= value; i++) {
        if(value % i === 0){
            count += 1
        } 
    }
    return count

}

export function isPrimeNumber(value: number): string {
    const count = numbersOfDividers(value)
    if(count === 2){
        return "Primo"
    }
    return "Não primo"

}

export function isDivisible3Or5(value: number): boolean {
    return value % 3 === 0 || value % 5 === 0
}