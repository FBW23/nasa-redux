import React from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';

const NasaVideo = (props) => {
  let { url, title, date, explanation } = props.photoOftheDay;
  return (
    <div className="video">
      <ReactPlayer url={url} width="100%" height="100%" />
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

export default connect(mapStateToProps, {})(NasaVideo);
