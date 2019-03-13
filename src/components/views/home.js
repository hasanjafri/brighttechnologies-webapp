import React from 'react';

import About from '../about';
import Hero from '../hero';
import Exemplar from '../exemplar';
import Features from '../features';

import HeroImg from '../../assets/images/heroimg.jpeg';

function Home(props) {
    return(
        <React.Fragment>
            <Hero heroImg={HeroImg} title="Welcome to Bright Technologies"/>
            <Exemplar/>
            <Features/>
            <About/>
        </React.Fragment>
    )
}

export default Home;