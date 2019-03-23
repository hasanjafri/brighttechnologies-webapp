import React from 'react';
import Hero from '../hero';
import QuestionImg from '../../assets/images/question.jpg';

function NotFound() {
    return (
        <React.Fragment>
            <Hero heroImg={QuestionImg} title="Sorry! Page Not Found!" />
        </React.Fragment>
    )
}

export default NotFound;