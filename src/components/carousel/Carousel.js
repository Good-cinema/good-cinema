import React, { Component } from 'react';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

class SimpleSlider extends Component {
  render() {
    var settings = {
      centerMode: true,
      centerPadding: "60px",
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true
    };
    return (
      <Slider {...settings}>
        <div>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;