import React, { Component } from 'react';
import './../../App.css';
import Header from './../header/Header';
import Footer from './../footer/Footer';
import './siteFrame.css';
import { withRouter } from 'react-router-dom';


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
export default withRouter(SiteFrame);

