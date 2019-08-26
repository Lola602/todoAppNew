import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import moment from "moment";
import findIndex from "lodash/findIndex";
import type { Match } from 'react-router-dom';

import axios from "./axios";

import AddFilm from "./views/AddFilm";
import FilmList from "./views/FilmList";
import Navbar from "./components/Navbar";
import Details from "./components/FilmDetail";

class App extends Component {
  state = {
    films: []
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

  render() {
    const films = this.state.films;
    return (
      <HashRouter>
        <div className="App">
          <Navbar />

          <div className="p-3">
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <FilmList
                  films={films}
                  onEdit={this.editFilm}
                  onRemove={this.removeFilm}
                />
              )}
            />
            <Route
              path="/add"
              render={() => <AddFilm onAdd={this.addFilm} />}
            />
            <Route
              path="/film-detail/:id"
              render={() =>
              const selectedFilm = this.state.films.find((film) => props.match.params.id === film.id);
              return <FilmDetail film={selectedFilm} />
              }
            />
          </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
