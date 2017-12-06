import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import Carousel from '../../components/carousel/Carousel';
import logoICON from '../../img/goodcinemalogo.png';

import './homePage.css';

export default class HomePage extends Component {

    addInfo(event) {
        event.preventDefault()
        const body = {
            email: this.refs.eMail.value,
            first_name: this.refs.fName.value,
            password: this.refs.passWord.value
        }
        

        axios.post('http://localhost:8080/api/users', body)
        .then( (regUser) => {
            console.log(regUser);
        });

        // Clearing Input To Empty Srting
        this.refs.fName.value = '';
        this.refs.eMail.value = '';
        this.refs.passWord.value = '';
    }

    render() {
        return(
            <div className='fullPage'>
                <div className='homePageTopPageBckGrnd content'>

                    <div className='logoICON'>
                        <img src={ logoICON } alt='logo' />
                    </div>

                    <div className='homeForms'>
                        <input className='inputSignIn' type='text' placeholder='Email Address' name='name'/>
                        <input className='inputSignIn' type='text' placeholder='Password' />
                        <Link to='/Landing'>
                            <button
                            className='buttonControl'
                            >Sign In</button>
                        </Link>

                        <br/><br/>

                        <form onSubmit={this.addInfo.bind(this)} >
                            <input className='inputReg' type='text' placeholder='Name' ref='fName' />
                            <br/>
                            <input className='inputReg' type='text' placeholder='Email Address' ref='eMail' />
                            <br/>
                            <input className='inputReg' type='text' placeholder='Password' ref='passWord' />
                            <br/>
                            <Link to='/Landing'>
                                <button className='buttonControl' >Sign Up</button>
                            </Link>
                        </form>
                    </div>
                </div>

                <div className='carouselMid'>
                    <Carousel />
                </div>
            </div>
        );
    }
}