import React, { Component } from 'react';
import './../../App.css';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import './SiteFrame.css';


class SiteFrame extends Component {
    
    render() {
        return (
            <div className="SiteFrame">
                <Header history={this.props.history}/>
                <main className="container">
                    {this.props.children}
                </main>
                <Footer/> 
            </div>
        );
    }
}
export default SiteFrame;

