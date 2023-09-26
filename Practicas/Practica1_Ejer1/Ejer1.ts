function quickSort(array: number[]): number[] {
    if (array.length <= 1) {
      return array;
    }
  
    const auxiliar = array[0];
    const left: number[] = [];
    const right: number[] = [];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] < auxiliar) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
    const izquierda = quickSort(left);
    const derecha = quickSort(right);
    const resultado: number[] = [];
  
    izquierda.forEach((elem) => {
      resultado.push(elem);
    });
  
    resultado.push(auxiliar);
  
    derecha.forEach((elem) => {
      resultado.push(elem);
    });
  
    return resultado;
  }
  
  const arrayEjemplo: number[] = [23,5,8,12,2];
  const quickEjemplo: number[] = quickSort(arrayEjemplo);

  console.log(quickEjemplo);