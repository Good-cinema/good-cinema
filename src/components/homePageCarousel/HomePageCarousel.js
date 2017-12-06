// React Slick Slider
import React, { Component } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import StarRatingComponent from 'react-star-rating-component';
// This is the default CSS for the carousel.
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
// This is the CSS I made that overrides the default CSS for certain settings.
import "./homePageCarousel.css";

// This is the slider component.
class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
        requestFailed: false
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/get-new-movies')
    .then(res => {   
        this.setState({
            movieAPI: res.data
        })
    }, () => {
    this.setState({
      requestFailed: true
    })
  })
}

  render() {
    // This is where you add the settings for the slider itself. There are many options.
    var settings = {
      accessibility: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      centerMode: true,
      centerPadding: "20px",
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };

    if (!this.state.movieAPI) return <p>Loading...</p>
    const results = this.state.movieAPI.results;
    const listItems = results.map((result) =>
      <div> 
          <img src={'https://image.tmdb.org/t/p/w300' + result.poster_path} 
          alt="images"/>
          <span style={{ fontSize: 34}}> 
          <StarRatingComponent
            value={result.vote_average/2} 
            starColor={'yellow'} 
            editing={false}  
          /> </span> 
      </div>
    );
    return (
      // This is where the slider and the settings themselves are initiated along with the actual slides.
      <Slider {...settings}>
          {listItems}
      </Slider>
    );
  }
}

export default SimpleSlider;