import React, { Component} from 'react';
import ActivityFeed from  './../../Components/ActivityFeed/ActivityFeed';
import Carousel from './../../Components/carousel/Carousel';
import "./HomePage.css"


class HomePage extends Component{
    render(){
        return(
            <div>
                <div className='padding-lg'>
                    <Carousel slides={5}/>
                </div>

                <div className='flexbox'>
                    <div className='flex-grow-2 padding-lg'>
                        <ActivityFeed/>
                    </div>
                    <div className='flex-grow-1 padding-lg'>upcoming releases</div>
                </div>

            </div>
        );
    }
}

export default HomePage;