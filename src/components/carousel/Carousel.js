import React, { Component } from 'react';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./carousel.css";

class SimpleSlider extends Component {
  render() {
    var settings = {
      centerMode: true,
      centerPadding: "20px",
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true
    };
    return (
      <Slider {...settings}>
          <div className="fpmain"><img src={ require("../../img/ptposter.jpg") } alt="PT Poster" style={{width: 338, height: 500}}/></div>
          <div className="fpmain"><img src={ require("../../img/ramboposter.jpg") } alt="Rambo Poster" style={{width: 338, height: 500}}/></div>
          <div className="fpmain"><img src={ require("../../img/avengersposter.jpg") } alt="Avengers Poster" style={{width: 338, height: 500}}/></div>
          <div className="fpmain"><img src={ require("../../img/swposter.jpg") } alt="SW Poster" style={{width: 338, height: 500}}/></div>
          <div className="fpmain"><img src={ require("../../img/jumanjiposter.jpg") } alt="Jumanji Poster" style={{width: 338, height: 500}}/></div>
      </Slider>
    );
  }
}

export default SimpleSlider;