import React, {Component} from 'react';
import './activityFeed.css';
import ActivityReview from '../activityReview/ActivityReview';
import ProfileImg from './../../img/user-gray.svg';

class ActivityFeed extends Component {
    constructor(){
        super();
        this.state={
            reviews:[
                {
                    poster_url:'https://image.tmdb.org/t/p/w92/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg',
                    profile_url: ProfileImg,
                    stars:5,
                    review_text:'this was the best movie ever and you should watch it',                    
                },
                {
                    poster_url:'https://image.tmdb.org/t/p/w92/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg',
                    profile_url: ProfileImg,
                    stars:3,
                    review_text:'This was the best movie ever and you should watch it'                    
                },
                {
                    poster_url:'https://image.tmdb.org/t/p/w92/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg',
                    profile_url: ProfileImg,
                    stars:4,
                    review_text:'this was the best movie ever and you should watch it',                    
                }

                ,
                {
                    poster_url:'https://image.tmdb.org/t/p/w92/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg',
                    profile_url: ProfileImg,
                    stars:4,
                    review_text:'this was the best movie ever and you should watch it',                    
                },
                {
                    poster_url:'https://image.tmdb.org/t/p/w92/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg',
                    profile_url: ProfileImg,
                    stars:4,
                    review_text:'this was the best movie ever and you should watch it',                    
                },
                {
                    poster_url:'https://image.tmdb.org/t/p/w92/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg',
                    profile_url: ProfileImg,
                    stars:4,
                    review_text:'this was the best movie ever and you should watch it',                    
                },
                {
                    poster_url:'https://image.tmdb.org/t/p/w92/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg',
                    profile_url: ProfileImg,
                    stars:4,
                    review_text:'this was the best movie ever and you should watch it',                    
                }
            ]
        }
    }
    render(){
        console.log(this.props);
        return(
            <div className='ActivityFeed' >  
                {
                    this.state.reviews.map(review => <ActivityReview review={review}/>)
                }
            </div>
        );
    }
}

export default ActivityFeed;