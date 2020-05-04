import React, { Component } from "react";
import { connect } from 'react-redux';
import MainPage from "../components/MainPage";
import { setSearchFieldAction, requestKittenAction } from "../actions";

const mapStateToProps = state => ({ 
  searchField : state.searchKitten.searchField,
  kittens : state.requestKitten.kittens,
  isPending : state.requestKitten.isPending,
  error : state.requestKitten.error
})

const mapDispatchToProps = dispatch => ({
  onSearchChange : (event) => dispatch(setSearchFieldAction(event.target.value)),
  onRequestKitten : () => dispatch(requestKittenAction())
})

class App extends Component {

  render() {
    return (<MainPage {...this.props}/>); 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
