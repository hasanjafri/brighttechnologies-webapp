import React from 'react';
import Hero from '../hero';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import ConsultancyImg from '../../assets/images/biconsultancy.jpg';
import BiHeroImg from '../../assets/images/bihero.jpg';

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

function BiConsultancy(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <Hero heroImg={ConsultancyImg} title="We are capable of bridging the gap between Business and Technology."/>
            <div className={classes.heroUnit}>
                <div className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Business Intelligence & Consultancy
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                        Today’s fast-paced digital age is driving a wave of technological innovation that is challenging long-standing business models. With BT’s largest team of dedicated Business Intelligence experts, BT help your organization to turn data into intelligent action; allowing your organization to survive and thrive in the turmoil of the digital age.We are capable of Bridging the Gap between Business and Technology.<br/><br/>
                        We believe that what differentiates a good consultancy from traditional consultancy is by having passion and drive for excellence. It’s a combination of knowledge, experience and good judgment. Generally architectures are built to enable business and we make sure that we understand that business first. We Fix the cause and not just the symptoms. We work with you to design your organisation so that it performs at its best, now and for the long term.<br/><br/>
                        Our designs don't just work on paper, but in practice too. Our impeccable record on implementation, with some of the world's leading companies, proves it.<br/><br/>
                        We get all the elements of your business working brilliantly together so that your organisation is ready to meet its biggest challenges.<br/><br/>
                        We combine business design expertise and innovative thinking with a strong practical focus.
                    </Typography>
                </div>
                <div className="col l10 center-align pb-2">
                    <img className="responsive-img" alt='dataExemplarImg' src={BiHeroImg} />.
                </div>
            </div>
        </React.Fragment>
    );
};

export default withStyles(styles)(BiConsultancy);
