import React, { Component } from 'react';

import Hero from '../hero';

import NewsImg from '../../assets/images/newsimg.jpeg';
class News extends Component {
    render() {
        return(
            <Hero heroImg={NewsImg} title="News"/>
        );
    }
}

export default News;