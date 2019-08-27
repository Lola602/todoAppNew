import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import moment from "moment";
import findIndex from "lodash/findIndex";

import axios from "./axios";

import AddFilm from "./views/AddFilm";
import FilmList from "./views/FilmList";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    films: [],
    searchTerm: ''
  };

  async componentDidMount() {
    const result = await axios.get("/film");
    this.setState({films: result.data});
  }

  addFilm = async film => {
    const newFilm = {
      ...film,
      showed: false,
      createdAt: moment().format("DD.MM.YYYY")
    };
    const result = await axios.post("/film", newFilm);
    newFilm.id = result.data;

    this.setState(prevState => {
      return {
        films: prevState.films.concat(newFilm)
      };
    });
  };

  editFilm = (film) => {
    //returns index of first element in the array that satisfies the provided testing function
    const index = findIndex(this.state.films, { id: film.id })
    const films = [...this.state.films];
    films.splice(index, 1, film);
    this.setState({
      films: films
    });
  };

  removeFilm = (film) => {
    const index = findIndex(this.state.films, { id: film.id })
    const films = [...this.state.films];
    films.splice(index, 1);
    this.setState({
      films: films
    });
  };

  //react event listener
  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value })
  };

  render() {
    const films = this.state.films;
    return (
      <HashRouter>
        <div className="App">
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <>
                  <Navbar showSearch searchTerm={this.state.searchTerm} onSearch={this.handleSearchTermChange} />
                  <div className="p-3">
                    <FilmList
                      films={films}
                      onEdit={this.editFilm}
                      onRemove={this.removeFilm}
                      searchTerm={this.state.searchTerm}
                    />
                  </div>
                </>
              )}
            />
            <Route
              path="/add"
              render={() => (
              <>
                <Navbar searchTerm={this.state.searchTerm} onSearch={this.handleSearchTermChange} />
                <div className="p-3">
                  <AddFilm
                    onAdd={this.addFilm}
                  />
                </div>
              </>
              )}
            />
          </Switch>
          </div>
      </HashRouter>
    );
  }
}

export default App;
