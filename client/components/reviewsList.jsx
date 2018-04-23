import React from 'react';
import ReactDOM from 'react-dom';
import s from './../css/reviewsList.css';

import Pagination from './pagination.jsx';
import Review from './review.jsx';

class ReviewsList extends React.Component {

  constructor(props) {
    super(props);
  }

  changePage(newPage) {
    this.setState({activePage: newPage});
  }

  renderReviews() {
    if ((Math.ceil(this.props.reviews.length / 7)) === 0) return;
    var result = [];
    var start = ((parseInt(this.props.activePage - 1)) * 7);
    // console.log('ACTIVE PAGE: ', this.props.activePage, 'NUM PAGES: ',  (Math.ceil(this.props.reviews.length / 7)).toString());
    var end;
    if (this.props.activePage === (Math.ceil(this.props.reviews.length / 7)).toString()) {
      end = this.props.reviews.length;
    } else {
      end = parseInt(this.props.activePage) * 7;
    }
    // console.log(start, end)
    for (var i = start; i < end; i++) {
      result.push(<Review key={i} review={this.props.reviews[i]}/>);
    }
    return result;
  }

  render() {
    return (
      <div className="container">
      <ul className={`row collection ${s.collection}`}>
        {this.renderReviews()}
      </ul>
      <div className="row divider"></div>

      <Pagination changePage={this.props.changePage} activePage={this.props.activePage} numPages={Math.ceil(this.props.reviews.length / 7)}/>
      </div>
    )
    
  }
}

export default ReviewsList;