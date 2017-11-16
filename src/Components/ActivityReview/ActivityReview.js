import React, {Component} from 'react';
import './ActivityReview.css';

class ActivityReview extends Component{
    render(){
        return(
           
            <div className='flexbox'>
                <div >
                    <img src={this.props.review.poster_url} width='80'></img>
                </div>
                <div className='padding'>
                    <img className='circle' src={this.props.review.profile_url} width='40' height='40'></img>
                </div>
                <div>
                    
                </div>

                

                
            </div>
        );

    }
}

export default ActivityReview;