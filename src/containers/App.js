import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary"
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(Response => Response.json())
      .then(users => {
        this.setState({ robots: users });
      });
  }

  render() {
    const {robots, searchField} = this.state;  
    const filteredKittens = robots.filter(kitten =>
      kitten.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      robots.length ?
      <div className="tc">
        <h1 className="f1">Kitty Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredKittens} />
          </ErrorBoundary>
        </Scroll>
      </div> :
      <h1 className="f1 tc">Loading...</h1>
    );
  }
}

export default App;
