import React from 'react';
import ReactDOM from 'react-dom';
import s from './../css/reviewsList.css';

import Pagination from './pagination.jsx';
import Review from './review.jsx';

class ReviewsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activePage: '1'
    }
  }

  changePage(newPage) {
    this.setState({activePage: newPage});
  }

  renderReviews() {
    var result = [];
    var start = ((parseInt(this.state.activePage - 1)) * 7);
    // console.log('ACTIVE PAGE: ', this.state.activePage, 'NUM PAGES: ',  Math.ceil(this.props.reviews.length / 7));
    var end;
    if (this.state.activePage === (Math.ceil(this.props.reviews.length / 7)).toString()) {
      end = this.props.reviews.length;
    } else {
      end = parseInt(this.state.activePage) * 7;
    }
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

      <Pagination changePage={this.changePage.bind(this)} activePage={this.state.activePage} numPages={Math.ceil(this.props.reviews.length / 7)}/>
      </div>
    )
    
  }
}

export default ReviewsList;