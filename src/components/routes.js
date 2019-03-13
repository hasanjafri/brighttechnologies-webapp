import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BusinessPartners from './views/business-partners';
import ContactUs from './views/contact-us';
import Home from './views/home';
import News from './views/news';

const Routes = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/business-partners" exact component={BusinessPartners}/>
            <Route path="/contact-us" exact component={ContactUs}/>
            <Route path="/news" exact component={News}/>
        </Switch>
    )
}

export default Routes;