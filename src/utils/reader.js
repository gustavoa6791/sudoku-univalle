let SudokuSolver = require('sudoku-solver-js');

export function leerArchivo(e) {
  return new Promise(resolve => {

    let solver = new SudokuSolver();
    let cadenaFinal;
    let archivo = e;

    if (!archivo) {
      return;
    }

    let lector = new FileReader();
    lector.readAsArrayBuffer(archivo);

    lector.onload = function (e) {

      let contenido = e.target.result;
      let view = new Int8Array(contenido).filter(invalid);
      let enc = new TextDecoder('utf-8');
      let decodificado = enc.decode(view);
      let cadena = Array.from(decodificado);
      let cadenazero = [];

      cadena.forEach(element => {
        if (element === "." || element === "-") {
          cadenazero.push(null)
        } else {
          cadenazero.push(parseInt(element))
        }
      });

      let resuelto = solver.solve(decodificado, {result: 'array'});
      cadenaFinal = [cadenazero, resuelto];

      resolve(cadenaFinal);
    };

    function invalid(e) {
      return e !== 10 && e !== 13;

    }

  });
}



