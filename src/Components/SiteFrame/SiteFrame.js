import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './../../App.css';
import Header from './../header/Header';
import Footer from './../footer/Footer';
import Movie from '../movie/Movie';
import LandingPage from '../../views/landingPage/LandingPage';
import MovieSearch from '../searchResults/SearchResults';
import ProfilePage from '../movieAPI/MovieUpcoming';
import './siteFrame.css';
// import ActivityFeed from './../ActivityFeed/ActivityFeed';
import NewMovies from '../movieAPI/MovieNew';
import UpcomingMovies from '../movieAPI/MovieUpcoming';
import '../movieAPI/moviesidebar.css';


class SiteFrame extends Component {
    
    render() {
        return (
            <div>
                <Header/>
                <main className='container'>
                {this.props.children}
                </main>
                <Footer/> 
            </div>
        );
    }
}
export default SiteFrame;

