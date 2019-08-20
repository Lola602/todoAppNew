import React, { Component } from "react";

import axios from '../axios';

import TodoButtons from './TodoButtons';

class Todo extends Component {
  renderDescription = () => {
    const { description } = this.props.todo;
    if (!description) return null;

    return (
      <div className="card-text" dangerouslySetInnerHTML={{ __html: description }} />
    )
  };

  handleShow = async () => {
    await axios.patch('/todos/' + this.props.todo.id, {
      showed: true
    });
    this.props.onShow();
  };

  handleRemove = async () => {
    await axios.delete('/todos/' + this.props.todo.id);
    this.props.onRemove();
  };

  render() {
    const { createdAt, title, showed, state, year, length, imgUrl } = this.props.todo;
    let classes = 'film card mb-3';
    if (showed) classes += ' border-success';

    return (
      <div className={classes} style={{maxWidth: 540}}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={imgUrl} className="card-img" alt={`${title} film`} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{state}</p>
              <p className="card-text">{year}</p>
              <p className="card-text">{length}</p>
              <div className="card-text">{this.renderDescription()}</div>
              <p className="card-text"><small className="text-muted">Created at {createdAt}</small></p>
              <TodoButtons todo={this.props.todo} onShow={this.handleShow} onRemove={this.handleRemove} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
