// React Slick Slider
import React, { Component } from 'react';
import Slider from 'react-slick';
// This is the default CSS for the carousel.
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
// This is the CSS I made that overrides the default CSS for certain settings.
import "./carousel.css";

// This is the slider component.
class SimpleSlider extends Component {
  render() {
    // This is where you add the settings for the slider itself. There are many options.
    var settings = {
      arrows: true,
      centerMode: true,
      centerPadding: "20px",
      className: "slick-arrow",
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,

    };
    return (
      // This is where the slider and the settings themselves are initiated along with the actual slides.
      <Slider {...settings}>
        <div className="fpmain">
          <img src={ require("../../img/ptposter.jpg") } 
          alt="PT Poster" 
          style={{width: 338, height: 500}}/>
        </div>
        <div className="fpmain">
          <img src={ require("../../img/ramboposter.jpg") } 
          alt="Rambo Poster" 
          style={{width: 338, height: 500}}/>
        </div>
        <div className="fpmain">
          <img src={ require("../../img/avengersposter.jpg") } 
          alt="Avengers Poster" 
          style={{width: 338, height: 500}}/>
        </div>
        <div className="fpmain">
          <img src={ require("../../img/swposter.jpg") } 
          alt="SW Poster" 
          style={{width: 338, height: 500}}/>
        </div>
        <div className="fpmain">
          <img src={ require("../../img/jumanjiposter.jpg") } 
          alt="Jumanji Poster" 
          style={{width: 338, height: 500}}/>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;