import React, { Component } from 'react';
import './../../App.css';
import './Header.css';
import Logo from './../../img/logo-01.svg';


class Header extends Component {
    render() {
        return (
            <div className='Header flexbox'>
                <div className='logo'>
                    <img className='center-block' width='50' height='50' src={Logo}></img>
                </div>
                <div className='flex-2'>
                    <div className="input-group add-on ">
                        <input type="text" className="form-control search-box" placeholder="Search" name="srch-term"   id="srch-term"></input>
                        <div className="input-group-btn">
                            <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <div className="btn-group">
                        <button type="button" className="btn btn-default dropdown-toggle" id='profile-btn' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Welcome, Saundra <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a>My profile</a></li>
                            <li role="separator" className="divider"></li>
                            <li><a>Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
                );
    }
}

export default Header;