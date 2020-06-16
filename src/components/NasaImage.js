import React from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';

const NasaImage = (props) => {
  let { hdurl, title, date, explanation } = props.photoOftheDay;
  return (
    <div className="image">
      <img src={hdurl} alt={title} />
      <div className="info">
        <div className="sticky">
          <small className="date">{date}</small>
          <p className="title">{title}</p>
        </div>
        <p className="explanation">{explanation}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {})(NasaImage);
