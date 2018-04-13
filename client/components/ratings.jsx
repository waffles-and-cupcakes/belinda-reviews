import React from 'react';
import ReactDOM from 'react-dom';


class Ratings extends React.Component {

  render() {
    var stars = (<img className="stars" src="./stars.png" />);
    return (
    <section className="ratings-container">
      <div className="header-container">
        <div>
          <span className="title">311 Reviews</span>
          {stars}
        </div>
        <input className="search" placeholder="Search reviews" />
      </div>
      {/* <div className="break"></div> */}
      <div className="avgs-container">
        <div className="accuracy">Accuracy{stars}</div>
        <div className="location">Location{stars}</div>
        <div className="communication">Communication{stars}</div>
        <div className="check_in">Check In{stars}</div>
        <div className="cleanliness">Cleanliness{stars}</div>
        <div className="value">Value{stars}</div>
      </div>
    </section>
    )
  }
}

export default Ratings;