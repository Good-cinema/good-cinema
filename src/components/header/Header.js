import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './../../App.css';
import './header.css';
import Logo from './../../img/logo-01.svg';
import queryString from 'query-string';


class Header extends Component {
    showSearchResults(search){
        this.props.history.push('/MovieSearch?'+queryString.stringify({
            query: search
        }));
    }
    render() {
        return (
            <div className='Header flexbox'>

                <div className='logo'>
                    <a href="/Landing">
                    <img className='center-block' width='50' height='50' src={Logo} alt='Logo'></img>
                    </a>
                    
                </div>
                <div className='flex-2'>
                    <div className="input-group add-on ">
                        <input ref="search_box" type="text" className="form-control search-box" placeholder="Search" name="srch-term"   id="srch-term"></input>
                        <div className="input-group-btn">
                            <button className="btn btn-default" type="submit" onClick={()=>this.showSearchResults(this.refs.search_box.value)}><i className="glyphicon glyphicon-search"></i></button>
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <div className="btn-group">
                        <button type="button" className="btn btn-default dropdown-toggle" id='profile-btn' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {/* Welcome, Saundra */}
                            {this.props.value ? `Welcome, ${this.props.value}` : 'My Account'}&nbsp;&nbsp;
                            <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a href="/MyProfile">My profile</a></li>
                            <li role="separator" className="divider"></li>
                            <li><a href="/Login">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
                );
    }
}

export default Header;