import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 5,
      reviews: []
    }
  }

  componentDidMount() {
    axios.get('/rooms/1/reviews')
    .then((res) => {
      console.log('RESPONSE: ', res);
      this.setState({
        reviews: res.data
      });
    })
    .catch((err) => {
      console.log('error GET-ing /rooms/1/reviews')
    })
  }

  render() {
    return (
      <div> {JSON.stringify(this.state.reviews)}</div>
    );
  }
}

export default Reviews;