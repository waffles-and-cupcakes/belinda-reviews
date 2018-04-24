import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import RatingsHeader from './ratingsHeader';
import ReviewsList from './reviewsList';

import mockData from './../mockData';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: mockData,
      filtered: mockData,
      activePage: '1'
    }
  }

  componentDidMount() {
    // axios.get('/rooms/1/reviews')
    // .then((res) => {
    //   console.log('RESPONSE: ', res);
    //   this.setState({
    //     reviews: res.data
    //   });
    // })
    // .catch((err) => {
    //   console.log('error GET-ing /rooms/1/reviews')
    // });
  }

  changePage(newPage) {
    this.setState({activePage: newPage});
  }

  filterReviews(term) {
    term = term.toLowerCase();
    // console.log('reach app.jsx: ', term);
    var filtered = this.state.reviews.filter(review => review.body.toLowerCase().includes(term));
    this.setState({
      filtered: filtered,
      activePage: '1'
    });
  }

  render() {
    return (
      <div>
        <RatingsHeader reviews={this.state.reviews} filterReviews={this.filterReviews.bind(this)} />
        <ReviewsList changePage={this.changePage.bind(this)} activePage={this.state.activePage} reviews={this.state.filtered} />
      </div>
    );
  }
}

export default App;