import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Row, Col, Icon } from 'react-materialize';


class RatingsHeader extends React.Component {

  render() {
    return (
      <div class="container">
      <div class="row"> <div class="divider"></div></div>
      <div class="row">
        <div class="col s12 m8 rev-title">
          <span class="title-text">311 Reviews</span>
          <div class="title-stars">
            <i class="material-icons icon-star small">star</i>
            <i class="material-icons icon-star small">star</i>
            <i class="material-icons icon-star small">star</i>
            <i class="material-icons icon-star small">star</i>
            <i class="material-icons icon-star small">star</i>
          </div>
        </div>
        <div class="col s12 m4">
          <input class="rev-search" placeholder="Search reviews"></input>
        </div>
      </div>
      <div class="row"> <div class="divider"></div></div>
      <div class="row avgs">
        <div class="col s12 m6 rating">
            <div class="accuracy ">Accuracy</div>
            <div>
                <i class="material-icons icon-star">star</i>
                <i class="material-icons icon-star">star</i>
                <i class="material-icons icon-star">star</i>
                <i class="material-icons icon-star">star</i>
                <i class="material-icons icon-star">star</i>
            </div>
          </div>
          <div class="col s12 m6 rating">
            <div class="location ">Location</div>
            <div>
                <i class="material-icons icon-star">star</i>
                <i class="material-icons icon-star">star</i>
                <i class="material-icons icon-star">star</i>
                <i class="material-icons icon-star">star</i>
                <i class="material-icons icon-star">star</i>
            </div>
          </div>
        <div class="col s12 m6 rating">
          <div class="communication ">Communication</div>
          <div>
            <i class="material-icons icon-star">star</i>
            <i class="material-icons icon-star">star</i>
            <i class="material-icons icon-star">star</i>
            <i class="material-icons icon-star">star</i>
            <i class="material-icons icon-star">star</i>
          </div>
        </div>    
        <div class="col s12 m6 rating">
            <div class="check-in">Check In</div>
            <div>
              <i class="material-icons icon-star">star</i>
              <i class="material-icons icon-star">star</i>
              <i class="material-icons icon-star">star</i>
              <i class="material-icons icon-star">star</i>
              <i class="material-icons icon-star">star</i>
            </div>
          </div>   
          <div class="col s12 m6 rating">
              <div class="cleanliness">Cleanliness</div>
              <div>
                <i class="material-icons icon-star">star</i>
                <i class="material-icons icon-star">star</i>
                <i class="material-icons icon-star">star</i>
                <i class="material-icons icon-star">star</i>
                <i class="material-icons icon-star">star</i>
              </div>
            </div>   
                <div class="col s12 m6 rating">
          <div class="value">Value</div>
          <div>
            <i class="material-icons icon-star">star</i>
            <i class="material-icons icon-star">star</i>
            <i class="material-icons icon-star">star</i>
            <i class="material-icons icon-star">star</i>
            <i class="material-icons icon-star">star</i>
          </div>
        </div>         
      </div>
    </div>
    )
  }
}

export default RatingsHeader;