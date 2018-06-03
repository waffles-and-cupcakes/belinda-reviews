import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import s from './../css/ratingsHeader.css';

import Search from './search.jsx';

class RatingsHeader extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = this.averageRatings();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.reviews !== this.props.reviews) {
      this.setState(this.averageRatings());
    }
  }

  // returns object with all criteria's ratings, plus the average
  averageRatings() {
    var result = {
      'Accuracy': 0,
      'Location': 0,
      'Communication': 0,
      'Check In': 0,
      'Cleanliness': 0,
      'Value': 0,
      'Overall': 0
    };

    this.props.reviews.forEach((r) => {
      result['Accuracy'] += r.accuracy;
      result['Location'] += r.location;
      result['Communication'] += r.communication;
      result['Check In'] += r.check_in;
      result['Cleanliness'] += r.cleanliness;
      result['Value'] += r.value;
      result['Overall'] += (r.accuracy + r.location + r.communication + r.check_in + r.cleanliness + r.value) / 6;
    })

    for (var criteria in result) {
      var avg = result[criteria] / this.props.reviews.length;
      avg = Math.round(avg * 2) / 2;
      result[criteria] = avg;
    }
    return result;
  }

  //returns array of 5 icons consisting of star, star_border, star_half
  stars(criteria) {
    var rating = this.state[criteria];
    var arr = [];
    for (var i = 1; i <= 5; i++) {
      if (rating >= i) {
        arr.push(<i key={`${criteria}-star-${i}`} className={`material-icons small ${s['icon-star']}`}>star</i>);
      } else {
        if (Math.ceil(rating) === i) {
          arr.push(<i key={`${criteria}-star-${i}`} className={`material-icons small ${s['icon-star']}`}>star_half</i>);
        } else {
          arr.push(<i key={`${criteria}-star-${i}`} className={`material-icons small ${s['icon-star']}`}>star_border</i>);
        }
      }
    }
    return arr;
  }

  render() {
    const criteria = ['Accuracy', 'Location', 'Communication', 'Check In', 'Cleanliness', 'Value'];
    
    return (
    <div className="container">

      <div className="row"> <div className="divider"></div></div>
      <div className="row">
        <div className={`col s12 m8 ${s['rev-title']}`}>
          <span className={s['title-text']}>{this.props.reviews.length} Reviews</span>
          <div>
            {this.stars('Overall')}
          </div>
        </div>
        <Search {...this.props}/>
      </div>

      <div className="row"> <div className="divider"></div></div>
      <div className={`row ${s.avgs}`}>
        {criteria.map((criteria, i) => (
          <div key={`criteria-${String(i)}`} className={`col s12 m6 ${s.rating}`}>
              <div>{criteria}</div>
              <div>
                {this.stars(criteria)}
              </div>
            </div>
        ))}
      </div>

    </div>
    )
  }
}

RatingsHeader.propTypes = {
  reviews: PropTypes.array.isRequired,
  filterReviews: PropTypes.func.isRequired
};

export default RatingsHeader;