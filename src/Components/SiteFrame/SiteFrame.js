import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './../../App.css';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Movie from '../movie/Movie';
import LandingPage from '../Views/HomePage/HomePage';
import MovieSearch from '../movieAPI/MovieSearch';
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
                  <Route path='/Landing' component={ LandingPage }/>
                  <Route path='/MovieSearch' component={ MovieSearch }/>
                  <Route path='/MyProfile' component={ProfilePage}/>
                {/* <main className='container'>
                    {this.props.children}
<<<<<<< HEAD
                    <div>
                        <Movie />
                    </div>
                    <div className='body'>
                        <NewMovies />
                    </div>
                </main> */}
=======
                </main>
>>>>>>> master
                <Footer/>
            </div>
        );
    }
}
export default SiteFrame;

