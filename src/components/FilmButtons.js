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
          <div className="removeButton">
              <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={this.props.onRemove}
              ><span aria-hidden="true">&times;</span>
              </button>

          </div>
        <div className="custom-control custom-switch">
          <input type="checkbox" className="custom-control-input"
                 id="customSwitch1" checked={showed}
                 onChange={this.props.onShow} />
          {label}
        </div>
      </>
    )
  }
}

export default FilmButtons;
