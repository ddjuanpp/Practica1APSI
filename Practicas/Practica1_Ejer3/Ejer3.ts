function separador(s: string[]): string{
    let resultado1=s[0];
    let resultado2= "";
    for(let i=1; i<s.length; i++){
        if(s[i][0] < resultado1[0]){
            resultado1 = s[i];
        }
    }
    for(let j=0; j<resultado1.length;j++){
        resultado2=resultado2+resultado1[j]+' ';
    }
    return resultado2;
}

const ejemplo: string[] = ["hola", "aaa","tal"];
const resultado = separador(ejemplo);
console.log(resultado);