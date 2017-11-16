import React, { Component } from 'react';
import './../../App.css';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import './SiteFrame.css';
import ActivityFeed from './../ActivityFeed/ActivityFeed';

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

