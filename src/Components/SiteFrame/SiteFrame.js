import React, { Component } from 'react';
import './../../App.css';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Movie from '../movie/Movie';
import './SiteFrame.css';
// import ActivityFeed from './../ActivityFeed/ActivityFeed';
import NewMovies from '../movieAPI/MovieNew';
import UpcomingMovies from '../movieAPI/MovieUpcoming';

class SiteFrame extends Component {
    render() {
        return (
            <div>
                <Header/>
                <main className='container'>
                    {this.props.children}
                    <div>
                        <Movie />
                    </div>
                    <div className="newMovies">
                        <NewMovies />
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }
}
export default SiteFrame;

