import React, { Component } from 'react';

import Hero from '../hero';
import JobList from '../job-list';

import JobsImg from '../../assets/images/jobsimg.jpg';

class Jobs extends Component {
    render() {
        return(
            <React.Fragment>
                <Hero heroImg={JobsImg} title="Our business philosophy is simple. We are you"/>
                <JobList />
            </React.Fragment>
        )
    }
}

export default Jobs;