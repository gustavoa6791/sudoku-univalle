import React, { Component } from "react";
import Tablero from "./Tablero";
import { connect } from 'react-redux'
import { estadoInicial, deshacerRehacer } from '../redux/actions/index'
import { leerArchivo } from '../utils/reader'
import ayuda from '../utils/ayuda'

class Juego extends Component {

  constructor(props) {
    super(props)
    this.state = {
      casilla: ""
    }
  }

  onFocus(e) {
    this.setState({
      casilla: e.target.name
    })

  }

  handle(e) {
    leerArchivo(e.target.files[0])
      .then(estado => {
        this.props.estadoInicial({
          inicial: estado[0],
          resuelto: estado[1]
        })

        for (let i = 0; i < this.props.actual.length; i++) {
          if (this.props.actual[i] != null) {
            document.getElementById(i.toString()).disabled = true
            document.getElementById(i.toString()).className += " inicial"
          }

        }
      })



  }

  handleClick1() {
    if (this.props.posicion > 1) {
      this.props.deshacerRehacer("deshacer");
    }
  }

  handleClick2() {
    if (this.props.posicion < (this.props.historia.length) - 1) {
      this.props.deshacerRehacer("rehacer");
    }
  }

  handleClick3(event) {
    const numerosAyuda = ayuda(this.state.casilla, this.props.actual)
    alert(`Los numeros que puedes ingresar son ${numerosAyuda}`)

  }

  render() {

    var  jugadaslist = ""

    for (let i = 0; i < this.props.jugadas.length; i++) {
      jugadaslist = `tipo de entrada: ${this.props.jugadas[i][0]}, en celda ${parseInt(this.props.jugadas[i][1]) + 1}, con valor ${this.props.jugadas[i][2]} \n` + jugadaslist


    }
    if ( document.getElementById("jugadas") != null) {
      document.getElementById("jugadas").value = jugadaslist
      
    }

    

    return (
      <div className="sudoku">
        <div className="game">

          <div><input type="file" id="file-input" onChange={() => this.handle(event)} /></div>

          <Tablero
            juegoactual={this.props.actual}
            onFocus={() => { this.onFocus(event) }}
            onChange={() => { this.onChange() }}
          />

          <div className="controles">
            <button onClick={() => this.handleClick1()}>Deshacer</button>
            <button onClick={() => this.handleClick2()}>Rehacer</button>
            <button onClick={() => this.handleClick3(event)}>Ayuda</button>
          </div>



        </div>

        <div className="jugadas">

          <textarea className="jugadas" id="jugadas" ></textarea>

        </div>


      </div>

    )
  }
}

const mapDispatchToProps = {
  estadoInicial,
  deshacerRehacer
};

const mapStateToProps = (state) => {
  return {
    actual: state.actual,
    posicion: state.ubicacion,
    historia: state.historia,
    jugadas: state.historiaGrafica
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Juego);
