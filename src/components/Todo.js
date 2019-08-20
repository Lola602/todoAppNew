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

  handleFinish = async () => {
    await axios.patch('/todos/' + this.props.todo.id, {
      finished: true
    });
    this.props.onFinish();
  };

  handleRemove = async () => {
    await axios.delete('/todos/' + this.props.todo.id);
    this.props.onRemove();
  };

  render() {
    const { createdAt, title, finished, state, year, length, imgUrl } = this.props.todo;
    let classes = 'card';
    if (finished) classes += ' border-success';

    return (
      <>
      <div className="todo mb-2">
        <div className={classes}>
          <div className="card-body">
            <h5 className="card-title">
              {title}
            </h5>
            <h6 className="card-subtitle text-muted mb-2">
              Created at {createdAt}
            </h6>
            {this.renderDescription()}
            <TodoButtons todo={this.props.todo} onFinish={this.handleFinish} onRemove={this.handleRemove} />
          </div>
        </div>
      </div>
      <div className="card mb-3" style={{maxWidth: 540}}>
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
              <p className="card-text">{this.renderDescription()}</p>
              <p className="card-text"><small className="text-muted">Created at {createdAt}</small></p>
              <TodoButtons todo={this.props.todo} onFinish={this.handleFinish} onRemove={this.handleRemove} />
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Todo;
