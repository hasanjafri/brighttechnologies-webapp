import React, { Component } from 'react';

import Hero from '../hero';

import ContactImg from '../../assets/images/contactimg.jpeg';
class ContactUs extends Component {
    render() {
        return(
            <Hero heroImg={ContactImg} title="Contact Us"/>
        );
    }
}

export default ContactUs;