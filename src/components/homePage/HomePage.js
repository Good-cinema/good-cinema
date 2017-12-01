import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Carousel from '../Carousel/Carousel';
import logoICON from '../../img/goodcinemalogo.png';

import './homePage.css';

export default class HomePage extends Component {

    render() {
        return(
            <div className='fullPage'>
                <div className='homePageTopPageBckGrnd'>

                    <div className='logoICON'>
                        <img src={ logoICON } alt='logo' />
                    </div>

                    <div className='homeForms'>
                        <input className='inputSignIn' type='text' placeholder='Email Address' name='name'/>
                        <input className='inputSignIn' type='text' placeholder='Password' />
                        <Link to='/SiteFrame'>
                            <button
                            className='buttonControl'
                            >Sign In</button>
                        </Link>

                        <br/><br/>

                        <input className='inputReg' type='text' placeholder='Name' />
                        <br/>
                        <input className='inputReg' type='text' placeholder='Email Address' />
                        <br/>
                        <input className='inputReg' type='text' placeholder='Password' />
                        <br/>
                        <Link to='/SiteFrame'>
                            <button className='buttonControl' >Sign Up</button>
                        </Link>
                    </div>
                </div>

                <div className='carouselMid'>
                    <Carousel/>
                </div>
            </div>
        );
    }
}