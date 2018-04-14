import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Row, Col, Icon, Pagination } from 'react-materialize';


class ReviewsList extends React.Component {

  render() {
    return (
      <div class="container reviews">
      <ul class="row collection">
        <li class="i collection-item avatar">
          <img src="./pfp.jpg" alt="" class="circle" />
          <span class="title">Shiyao</span>
          <p>June 2017</p>
          <a href="#!" class="secondary-content"><i class="material-icons icon-flag">flag</i></a>
          <p class="comment">A beautiful space! We loved all the attention to detail and local recommendations.
              Would love to se all their properties!</p>
        </li>
        <li class="collection-item avatar">
          <i class="material-icons circle">folder</i>
          <span class="title">Belinda</span>
          <p>June 2017</p>
          <a href="#!" class="secondary-content"><i class="material-icons icon-flag">flag</i></a>
          <p class="comment">A beautiful space! We loved all the attention to detail and local recommendations.
              Would love to se all their properties!</p>
        </li>
        <li class="collection-item avatar">
          <i class="material-icons circle green">insert_chart</i>
          <span class="title">Anthony</span>
          <p>June 2017</p>
          <a href="#!" class="secondary-content"><i class="material-icons icon-flag">flag</i></a>
          <p class="comment">A beautiful space! We loved all the attention to detail and local recommendations.
              Would love to se all their properties!</p>
        </li>
        <li class="collection-item avatar">
          <i class="material-icons circle red">play_arrow</i>
          <span class="title">Steve</span>
          <p>June 2017</p>
          <a href="#!" class="secondary-content"><i class="material-icons icon-flag">flag</i></a>
          <p class="comment">A beautiful space! We loved all the attention to detail and local recommendations.
              Would love to se all their properties!</p>
        </li>
      </ul>
      <div class="row divider"></div>
    
      <ul class="row pagination">
        <li class="disabled pg-arrow"><a href="#!"><i class="material-icons icon-arrow-left">arrow_drop_down</i></a></li>
        <li class="pg-active pg-num"><a href="#!">1</a></li>
        <li class="pg-num"><a href="#!">2</a></li>
        <li class="pg-num"><a href="#!">3</a></li>
        <li class="">...</li>
        <li class="pg-num"><a href="#!">10</a></li>
        <li class="pg-arrow"><a href="#!"><i class="material-icons icon-arrow-right">arrow_drop_down</i></a></li>
      </ul>
      </div>
    )
    
  }
}

export default ReviewsList;