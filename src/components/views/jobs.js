import React, { Component } from 'react';

import JobList from '../job-list';

class Jobs extends Component {
    render() {
        return(
            <React.Fragment>
                <JobList />
            </React.Fragment>
        )
    }
}

export default Jobs;