import React, { Component } from 'react';

class FilmButtons extends Component {
  render () {
    const { showed } = this.props.film;
    console.log(showed);
    let label;
    if(!showed) {
      label = (<label className="custom-control-label" htmlFor="customSwitch1">Not visible</label>);
    } else {
      label = (<label className="custom-control-label" htmlFor="customSwitch1">Visible</label>);
    }

    return (
      <>
        <button type="button" className="btn btn-light" onClick={this.props.onRemove}>
          Delete
        </button>
        <div className="custom-control custom-switch">
          <input type="checkbox" className="custom-control-input" id="customSwitch1" checked={showed} onChange={this.props.onShow} />
          {label}
        </div>
      </>
    )
  }
}

export default FilmButtons;
