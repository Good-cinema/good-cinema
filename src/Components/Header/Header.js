import React, { Component } from 'react';
import './../../App.css';
import './Header.css';
import downArrow from './../../img/down_arrow.svg';


class Header extends Component {
    render() {
        return (
            <div className='Header flexbox'>
                <div className="input-group add-on">
                    <input type="text" className="form-control" placeholder="Search" name="srch-term"   id="srch-term"></input>
                    <div className="input-group-btn">
                        <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                    </div>
                </div>

                    <div className="btn-group">
                        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Welcome, Saundra <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a href="#">My profile</a></li>
                            <li role="separator" className="divider"></li>
                            <li><a href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
                );
    }
}

export default Header;