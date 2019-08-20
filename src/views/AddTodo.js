import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class AddTodo extends Component {
  state = {
    imgUrl: '',
    title: '',
    description: '',
    genre: 'drama',
    state: 'washington',
    year: '',
    length: ''
  };

  handleSubmit = async event => {
    event.preventDefault();
    await this.props.onAdd(this.state);
    this.setState({
      imgUrl: '',
      title: '',
      description: '',
      genre: 'drama',
      state: 'washington',
      year: '',
      length: ''
    });
    this.props.history.push("/");
  };

  handleChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  render() {
    const { imgUrl, title, description, genre, state, year, length } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="imgUrl"
          type="text"
          value={imgUrl}
          onChange={this.handleChange}
          className="form-control mb-2"
          placeholder="Image URL"
          required
        />
        <input
          name="title"
          type="text"
          value={title}
          onChange={this.handleChange}
          className="form-control mb-2"
          placeholder="Title"
          required
        />
        <textarea
          name="description"
          value={description}
          onChange={this.handleChange}
          className="form-control mb-2"
          placeholder="Description (html tags allowed)"
        />
        <select
          name="genre"
          value={genre}
          onChange={this.handleChange}
          className="form-control mb-2"
          required
        >
          <option value="drama">Drama</option>
          <option value="fantasy">Fantasy</option>
          <option value="scifi">Scifi</option>
          <option value="comedy">Comedy</option>
        </select>
        <select
          name="state"
          value={state}
          onChange={this.handleChange}
          className="form-control mb-2"
          required
        >
          <option value="washington">Washington</option>
          <option value="czechRepublic">Czech republic</option>
          <option value="malaysia">Malaysia</option>
        </select>
        <input
          name="year"
          type="number"
          value={year}
          onChange={this.handleChange}
          className="form-control mb-2"
          placeholder="Year"
          required
        />
        <input
          name="length"
          type="number"
          value={length}
          onChange={this.handleChange}
          className="form-control mb-2"
          placeholder="Length"
          required
        />
        <button
          type="submit"
          className="btn btn-outline-success"
          disabled={!title}
        >
          Save
        </button>
      </form>
    );
  }
}

export default withRouter(AddTodo);
