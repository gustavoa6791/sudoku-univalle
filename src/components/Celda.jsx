import React, { Component } from 'react';

class Celda extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { value, index } = this.props;

    return (
      <input
        type="number"
        id={index}
        className="celda"
        name={this.props.index}
        onChange={() => { this.props.onChange() }}
        onFocus={() => { this.props.onFocus() }}
        value={value == null ? "" : value.toString()}
        autoComplete="off"
      />
    );
  }
}

export default Celda;
