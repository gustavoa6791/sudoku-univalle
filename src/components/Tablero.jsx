import React, {Component} from "react";
import {connect} from 'react-redux'
import Celda from "./Celda";
import {ingresoValor, deshacerRehacer} from '../redux/actions/index'
import {jugadaInvalida } from '../utils/validacionJugada'
import completado from "../utils/validacionCompletada";

class Tablero extends Component {

  constructor(props) {
    super(props)
  }

  handle(e) {
    const f = jugadaInvalida(e.target.name, e.target.value, this.props.actual);

    if (f[3] === false) {
      this.props.ingresoValor({
        celda: e.target.name,
				valor: e.target.value,
				ingreso: ["nueva", e.target.name, e.target.value]
      })
    } else {
      alert(`este numero ya se encontraba en la fila, 
      columna o cuadro correspondiente a la celda`);
      e.target.value = null
		}
		
		setTimeout(() => {

			const c = completado(this.props.actual, this.props.resuelto);


			if ( c[0] ) {
				if (c[1].length == 0) {
					alert("este juego se ha completado, sin errores")
				} else {
					alert(`este juego se ha completado, 
					con errores en las celdas ${c[1]}`)
				}
			}
	
			
		}, 500);


    

  }

  render() {
    return (
      <div>
        <div className="tablero">
          {
            this.props.juegoactual.map((value, index) => {
              return (
                <Celda
                  key={index}
                  value={value}
                  onChange={() => {const f = this.handle(event) }}
                  onFocus={() => { this.props.onFocus() }}
                  index={index}
                />
              )
            })
          }
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    actual: state.actual,
    resuelto: state.resuelto
  }
};

const mapDispatchToProps = {
  ingresoValor,
  deshacerRehacer
};

export default connect(mapStateToProps, mapDispatchToProps)(Tablero);
