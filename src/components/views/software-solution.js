import React from 'react';
import Hero from '../hero';
import SoftwareSolutionsImg from '../../assets/images/softwaresolution.jpg';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

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

function SoftwareSolution(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <Hero heroImg={SoftwareSolutionsImg} title="We provide universal solutions from ERP and E-Commerce to Web & Mobile Development."/>
            <div className={classes.heroUnit}>
                <div className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Software Solutions
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                        We design and build new custom software applications that solve your toughest problems, fit flawlessly into your current processes and systems, and produce measurable results for your business.<br/><br/>
                        BT is a professional full-service company which creates custom application solutions that enable organizations to achieve a competitive advantage within the continuously changing technology world. Our development team brings you experience across on-site, mobile, web, and cloud-based platforms for multiple industries. We perform work which extends to any and all projects, where technology is used to address gaps in the functionality provided by commercial applications, customize existing applications, or create new applications. Our excellent global development and support team gives you the best execution of application development services.
                    </Typography>
                </div>
            </div>
        </React.Fragment>
    )
}

export default withStyles(styles)(SoftwareSolution);