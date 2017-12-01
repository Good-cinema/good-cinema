import React, { Component} from 'react';
import ActivityFeed from  './../../components/activityFeed/ActivityFeed';
import Carousel from '../../components/carousel/Carousel';
import './landingPage.css';
import  MovieUpcoming from './../../components/movieAPI/MovieUpcoming';
import axios from 'axios';

class LandingPage extends Component{
    constructor(){
        super();
        this.state={
            newMovies: []
        };
    }
    componentDidMount(){
        axios.get('http://localhost:8080/api/get-new-movies')
        .then(res => {
            this.setState({
                newMovies: res.data.results
            })
        });
    }
    render(){
        console.log(this.props.match.params)
        return(
            <div>
                <div className='padding-lg'>
                    <Carousel slides={5} movies= {this.state.newMovies}/>
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