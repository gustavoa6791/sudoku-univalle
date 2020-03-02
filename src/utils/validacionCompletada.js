export default function completado(actual, resuelto) {

  let completado = actual.indexOf(null);

  if (completado == (-1)) {
    let errores = [];
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] != resuelto[i]) {
        errores.push(i);
      }
    }
    return [true, errores];
  }

  return [false, []];
}
