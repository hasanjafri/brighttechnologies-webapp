import React from 'react';

const Hero = (props) => {
    return(
        <section id="hero" style={{backgroundImage: 'url(' + props.heroImg + ')', backgroundColor: 'rgba(0, 0, 0, 0.77)', backgroundBlendMode: 'multiply'}}>
            <div className="container valign-wrapper jc-center">
                <div className="valign center-align white-text">
                    <h1>{props.title}</h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;