import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import s from './../css/reviewsList.css';

import Pagination from './pagination.jsx';
import Review from './review.jsx';

function ReviewsList(props) {
  const renderReviews = function() {
    if ((Math.ceil(props.reviews.length / 7)) === 0) return;
    var result = [];
    var start = ((parseInt(props.activePage) - 1) * 7);
    var end;
    if (props.activePage === (Math.ceil(props.reviews.length / 7)).toString()) {
      end = props.reviews.length;
    } else {
      end = parseInt(props.activePage) * 7;
    }
    for (var i = start; i < end; i++) {
      result.push(<Review key={`review-${String(i)}`} review={props.reviews[i]}/>);
    }
    return result;
  };

  var numPages = Math.ceil(props.reviews.length / 7);

  return (
    <div className="container">
      <ul className={`row collection ${s.collection}`}>
        {renderReviews()}
      </ul>
      <div className="row divider"></div>
      <Pagination  numPages={numPages} changePage={props.changePage} activePage={props.activePage}/>
    </div>
  );
}

ReviewsList.propTypes = {
  changePage: PropTypes.func.isRequired,
  activePage: PropTypes.string.isRequired,
  reviews: PropTypes.array.isRequired
};

export default ReviewsList;