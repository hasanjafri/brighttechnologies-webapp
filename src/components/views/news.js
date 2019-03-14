import React, { Component } from 'react';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
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
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
          width: 1100,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
      cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
      }
});

const clients = [1, 2, 3, 4, 5, 6, 7, 8];

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
                <div className={classNames(classes.layout, classes.cardGrid)}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom style={{paddingBottom: '2%'}}>
                        Our Clients
                    </Typography>
                    <Grid container spacing={40}>
                        {clients.map(card => (
                        <Grid item key={card} sm={6} md={4} lg={3}>
                            <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                Heading
                                </Typography>
                                <Typography>
                                This is a media card. You can use this section to describe the content.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                View
                                </Button>
                                <Button size="small" color="primary">
                                Edit
                                </Button>
                            </CardActions>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(News);