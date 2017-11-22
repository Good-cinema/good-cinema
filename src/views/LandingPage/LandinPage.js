import React, { Component} from 'react';
import ActivityFeed from  './../../components/ActivityFeed/ActivityFeed';
import Carousel from './../../components/Carousel/Carousel';
import './LandingPage.css';
import  MovieUpcoming from './../../components/movieAPI/MovieUpcoming';


class LandingPage extends Component{
    render(){
        return(
            <div>
                <div className='padding-lg'>
                    <Carousel slides={5}/>
                </div>
                <div className='flexbox landing-area'>
                    <div className='flex-grow-2 padding-lg'>
                        <ActivityFeed/>
                    </div>
                    <div className='flex-grow-1 padding-lg'>
                        <MovieUpcoming/>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;