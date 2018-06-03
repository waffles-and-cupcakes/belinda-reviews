import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import s from './../css/app.css';

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
    var roomNum = window.location.pathname.split('/')[2];
    // axios.get(`http://13.56.58.150:80/rooms/${roomNum}/reviews`) // for docker
    axios.get(`/rooms/${roomNum}/reviews`) 
    .then((res) => {
      this.setState({
        reviews: res.data,
        filtered: res.data
      });
    })
    .catch((err) => {
      console.log(`Error for GET /rooms/${roomNum}/reviews: `, err);
    });
  }

  changePage(newPage) {
    this.setState({activePage: newPage});
  }

  filterReviews(term) {
    term = term.toLowerCase();
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