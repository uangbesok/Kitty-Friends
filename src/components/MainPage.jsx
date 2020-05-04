import React, { Component } from "react";
// import { connect } from 'react-redux';
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import ErrorBoundary from "./ErrorBoundary";
import "./MainPage.css";
// import { setSearchFieldAction, requestKittenAction } from "../actions";

// const mapStateToProps = state => ({ 
//   searchField : state.searchKitten.searchField,
//   kittens : state.requestKitten.kittens,
//   isPending : state.requestKitten.isPending,
//   error : state.requestKitten.error
// })

// const mapDispatchToProps = dispatch => ({
//   onSearchChange : (event) => dispatch(setSearchFieldAction(event.target.value)),
//   onRequestKitten : () => dispatch(requestKittenAction())
// })

class MainPage extends Component {

  // Use when state managed by native React method
  // constructor() {
  //   super();
  //   this.state = {
      // robots: [],
      // searchField: ""
  //   };
  // }

  // Use when state managed by native React method
  // onSearchChange = event => {
  //   this.setState({ searchField: event.target.value });
  // };

  componentDidMount() {
  // Use when state managed by native React method 
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(Response => Response.json())
  //     .then(users => {
  //       this.setState({ robots: users });
  //     });
      this.props.onRequestKitten();
  }

  filteredKittens = () => {
    return this.props.kittens.filter(kitten =>
        kitten.name.toLowerCase().includes(this.props.searchField.toLowerCase())
      );
  }

  render() {

    // Use when state managed by native React method
    // const {robots, searchField} = this.state;  
    // const {robots} = this.state;  
    
    const {kittens, isPending, onSearchChange} = this.props;    


    return (
      !isPending ?
      <div className="tc">
        <h1 className="f1">Kitty Friends</h1>

        {/* Use when state managed by native React method */}
        {/* <SearchBox searchChange={this.onSearchChange} /> */}

        <SearchBox searchChange={onSearchChange} />

        <Scroll>
          <ErrorBoundary>
            <CardList robots={this.filteredKittens()} />
          </ErrorBoundary>
        </Scroll>
      </div> :
      <h1 className="f1 tc">Loading...</h1>
    );
  }
}

export default MainPage;
