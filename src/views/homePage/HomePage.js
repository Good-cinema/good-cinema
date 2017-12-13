import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import Carousel from '../../components/homePageCarousel/HomePageCarousel';
import logoICON from '../../img/goodcinemalogo.png';

import './homePage.css';
import { error } from 'util';

export default class HomePage extends Component {

    checkLogPerson(event) {
        event.preventDefault()
        
        axios.post('/api/login', {
            email: this.refs.checkEmail.value,
            password: this.refs.checkPass.value
        })
        .then( (user) => {
            this.props.history.push('/Landing')
        })
        .catch( (err) => {
            alert(err);
            console.log(err);
        });

    }

    addInfo(event) {
        event.preventDefault()
        
        axios.post('/api/users', {
            email: this.refs.eMail.value,
            first_name: this.refs.fName.value,
            password: this.refs.passWord.value
        })
        .then( (regUser) => {
            this.props.history.push('/Landing');
            console.log(regUser);
        })
        .catch( (err) => {
            alert(err);
        });
        console.log(this.refs.eMail.value);

        // Clearing Input To Empty Srting
        this.refs.fName.value = '';
        this.refs.eMail.value = '';
        this.refs.passWord.value = '';
    }

    render() {

        // this.redirect.bind(this)

        return(
            <div className='fullPage'>
                <div className='homePageTopPageBckGrnd content'>

                    <div className='logoICON'>
                        <img src={ logoICON } alt='logo' />
                    </div>

                    <div className='homeForms'>
                        <form onSubmit={this.checkLogPerson.bind(this)} >
                            <input className='inputSignIn' type='text' placeholder='Email Address' ref='checkEmail' />
                            <input className='inputSignIn' type='text' placeholder='Password' ref='checkPass' />
                            <button className='buttonControl'>Sign In</button>
                        </form>

                        <br/><br/>

                        <form onSubmit={this.addInfo.bind(this)} >
                            <input className='inputReg' type='text' placeholder='Name' ref='fName' />
                            <br/>
                            <input className='inputReg' type='text' placeholder='Email Address' ref='eMail' />
                            <br/>
                            <input className='inputReg' type='text' placeholder='Password' ref='passWord' />
                            <br/>
                            <button className='buttonControl' >Sign Up</button>
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