import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BiConsultancy from './views/bi-consultancy';
import BusinessPartners from './views/business-partners';
import ContactUs from './views/contact-us';
import Home from './views/home';
import Jobs from './views/jobs';
import News from './views/news';
import Staffing from './views/staffing';

const Routes = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/business-partners" exact component={BusinessPartners}/>
            <Route path="/contact-us" exact component={ContactUs}/>
            <Route path="/news" exact component={News}/>
            <Route path="/jobs" exact component={Jobs}/>
            <Route path="/services/staffing" exact component={Staffing}/>
            <Route path="/services/bi-consultancy" exact component={BiConsultancy}/>
        </Switch>
    )
}

export default Routes;