import React, { Component } from 'react';
import MyReviewsList from './../../components/myReviewsList/MyReviewList';
import MyWatchList from './../../components/myWatchList/MyWatchList';
import './profilePage.css';

export default class Profile extends Component {
    render(){
        return(
            <div className="flexbox">
                <div className="flex-grow-2 padding-lg">
                    <div className="bold text-lg padding-md">
                        My Reviews
                    </div>
                    <MyReviewsList />
                </div>
                <div className="flex-grow-1 padding-lg">
                    <div className="bold text-lg padding-md">
                        Watchlist
                    </div>
                    <MyWatchList userId="1"/>
                </div>
            </div>
        );
    }
}
