import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { fetchDay } from '../actions';
import { connect } from 'react-redux';

class NasaDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  handleChange = (date) => {
    const formatedDate = this.formatDate(date);
    this.props.fetchDay(formatedDate);
    this.setState({
      startDate: date,
    });
  };

  render() {
    return (
      <div className="dp-container">
        <p>Select a different image of the day</p>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default connect(null, { fetchDay })(NasaDatePicker);
