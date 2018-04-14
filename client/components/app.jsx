import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Ratings from './ratings';
import Reviews from './reviews';

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
        <Ratings reviews={this.state.reviews} />
        <br></br>
        <Reviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;