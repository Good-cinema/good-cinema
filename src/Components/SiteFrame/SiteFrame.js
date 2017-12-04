import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './../../App.css';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Movie from '../movie/Movie';
import LandingPage from '../../views/LandingPage/LandingPage';
import MovieSearch from '../SearchResults/SearchResults';
import ProfilePage from '../movieAPI/MovieUpcoming';
import './SiteFrame.css';
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

