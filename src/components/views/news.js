import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Hero from '../hero';

import NewsImg from '../../assets/images/newsimg.jpeg';

const styles = theme => ({
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
        maxWidth: 1111,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    }
});

class News extends Component {
    render() {
        const { classes } = this.props;
        return(
            <React.Fragment>
                <Hero heroImg={NewsImg} title="News"/>
                <div className={classes.heroUnit}>
                    <div className={classes.heroContent}>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Press Release
                        </Typography>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                            Ontario Government Names Bright Technologies (BT) a Vendor of Record. <br/><br/>
                            October 2016 - Bright Technologies has singed Master Agreements with the Ontario Government for the Provision of Task-based I&IT Services to the Ontario Public Sector. <br/><br/>
                            Bright Technology is a leading IT Business Intelligence solutions and Recruitment service provider has been selected as a Vendor of Record (VOR) by the Government of Ontario for Task based I&IT services. The Ontario Public Service and organizations in the Broader Public Sector (municipalities, healthcare facilities, and educational institutions) will now be able to leverage on BT to provide unique and optimum solution to its short term recruitment. <br/><br/>
                            The Task-based I&IT Services VOR is utilized by government clients to Obtain short-term human resources to support IT project work. These agreements allow Bright Technologies to bid on opportunities within a pre-qualified group of vendors. This pre-qualification will hopefully present an effective platform to share our knowledge and elevate Ontario’s public services to the next level of efficiency.”
                        </Typography>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(News);