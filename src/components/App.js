import React from 'react';
import '../sass/App.scss';
import { connect } from 'react-redux';

function App(props) {
  console.log(props);
  return <div className="app">agzx</div>;
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {})(App);
