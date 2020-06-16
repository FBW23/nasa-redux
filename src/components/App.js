import React from 'react';
import '../sass/App.scss';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import NasaImage from './NasaImage';
import NasaVideo from './NasaVideo';
import NasaDatePicker from './NasaDatePicker';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    let { media_type } = this.props.photoOftheDay;

    return (
      <div className="app">
        {media_type === 'image' ? (
          <NasaImage></NasaImage>
        ) : (
          <NasaVideo></NasaVideo>
        )}
        <NasaDatePicker></NasaDatePicker>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { fetchData })(App);
