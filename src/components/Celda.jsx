import React, { Component } from 'react';
import {fila,colum} from '../utils/validacionJugada'

class Celda extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { value, index } = this.props;

    // const clase1 = clase()
    // const clase2 = clase()

    // function clase(){
    //  const l1 = fila[2].indexOf(index.toString)
    //  const l2 = fila[5].indexOf(index.toString)
    //  const l3 = colum[2].indexOf(index.toString)
    //  const l4 = colum[5].indexOf(index.toString)
    // }

    return (
      
        <input
          type="number"
          id={index}
          className="celda"
          name={this.props.index}
          onChange={() => { this.props.onChange() }}
          onFocus={() => { this.props.onFocus() }}
          value={value == null ? "" : value.toString()}
          autoComplete = "off"
        />
      
    );
  }

}

export default Celda;
