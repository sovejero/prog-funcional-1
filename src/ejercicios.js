export function multiplicarPor10(array) {
  return array.map( x => x*10 );
}

export function soloPares(array) {
  return array.filter( x => x%2===0 );
}

export function moverALaDerecha(array) {
  //slice returns shallow copy
  return array.slice(-1).concat(array.slice(0,-1));
}

export function soloUnaPalabra(array) {
  return array.filter(x => !/\s/.test(x));
}

export function soloArraysPositivos(array) {
  return array.filter(x => !(x.some( i => i<=0 )) );
}

export function soloVocales(array) {
  return array.map(x => {
    if (/[^aeiou]+/.test(x)){
      return x.replace(/[^aeiou]+/g, "");
    } else { return x; }
  })
}

export function todasVocalesIguales(array) {
  return array.filter(x => {
    if (/[aeiou]+/.test(x)){
      const vowels = x.match(/[aeiou]+/g);
      const uniqueVowels = new Set(vowels);
      if (uniqueVowels.size > 1){
        return false;
      }
      else {
        return true;
      }
    } else { return true; }
  })
}

export function duplicarMatriz(array) {
  return array.map(x => x.map( i => i*2 ));
}

export function mayoresDeEdadValidados(array) {
  return array.map( x => {
    const object = {...x};
    object.mayor = (object.edad > 18);
    return object;
  });
}

export function transformarObjetoEnArray(objeto) {
  const keys = Object.keys(objeto);
  return keys.map(key => {
    const copyObjeto = {...objeto[key]};
    copyObjeto.id = key;
    return copyObjeto;
  });
}
