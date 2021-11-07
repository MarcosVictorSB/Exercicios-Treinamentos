const letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function valueWord(value: string): number {
    return letras.indexOf(value) + 1
}