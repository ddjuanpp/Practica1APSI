function multiplos(n: number): number[]{
    const multiplos: number[] = [];

    for(let i=0; i<=n ; i++){
        if(i%3==0 || i%5==0){
            multiplos.push(i);
        }
    }
    return multiplos;
}
const ejemplo = 23;
const result = multiplos(ejemplo);
console.log(result);