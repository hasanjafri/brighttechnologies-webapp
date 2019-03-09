import React from 'react';

import About from '../about';
import Hero from '../hero';
import Exemplar from '../exemplar';
import Features from '../features';

function Home(props) {
    return(
        <React.Fragment>
            <Hero/>
            <Exemplar/>
            <Features/>
            <About/>
        </React.Fragment>
    )
}

export default Home;