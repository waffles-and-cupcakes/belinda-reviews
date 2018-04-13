import React from 'react';
import ReactDOM from 'react-dom';


class Reviews extends React.Component {

  render() {
    return (
      <section className="review-container"> 

        <div className="detail-container">
          <img className="user-photo" src="./pfp.jpg" />
          <div className="x-detail-container">
            <p> Kristen </p>
            <p> June 2017 </p>
          </div>
        </div>

        <div className="review-body"> 
          A beautiful space! We loved all the attention to 
          detail and local recommendations. Would love to se all
            their properties!
        </div>

      </section> 
    )
    
  }
}

export default Reviews;