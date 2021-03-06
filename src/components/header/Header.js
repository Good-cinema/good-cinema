import { CancelToken } from 'axios';
import React, { Component } from 'react';
import './../../App.css';
import './header.css';
import Logo from './../../img/logo-01.svg';
import queryString from 'query-string';
import { Link } from 'react-router-dom';


class Header extends Component {
    constructor(){
        super();
        this.searchBoxKeyPressed = this.searchBoxKeyPressed.bind(this);
    }
    showSearchResults(search){
        this.props.history.push('/MovieSearch?'+queryString.stringify({
            query: search
        }));
    }
    searchBoxKeyPressed(e){
        if (e.key === 'Enter') {
            this.showSearchResults(this.refs.search_box.value);
        }
    }
    render() {
        return (
            <div className='Header flexbox'>

                <div className='logo'>
                    <Link to="/Landing">
                    <img className='center-block' width='50' height='50' src={Logo} alt='Logo'></img>
                    </Link>
                    
                </div>
                <div className='flex-2'>
                    <div className="input-group add-on ">
                        <input ref="search_box" type="text" className="form-control search-box" placeholder="Search" name="srch-term"   id="srch-term" onKeyPress={this.searchBoxKeyPressed}></input>
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
                            <li><Link to="/MyProfile">My profile</Link></li>
                            <li role="separator" className="divider"></li>
                            <li><Link to="/Login">Sign out</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
                );
    }
}

export default Header;
