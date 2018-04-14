import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Row, Col, Icon, Pagination } from 'react-materialize';


class Reviews extends React.Component {

  render() {
    return (
      <div>
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
      <Pagination items={10} activePage={1} maxButtons={8} />
      </div>

    )
    
  }
}

export default Reviews;