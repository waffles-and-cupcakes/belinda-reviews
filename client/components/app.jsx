import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import RatingsHeader from './ratingsHeader';
import ReviewsList from './reviewsList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
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
    // })
  }

  render() {
    return (
      <div>
        <RatingsHeader reviews={this.state.reviews} />
        <ReviewsList reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;