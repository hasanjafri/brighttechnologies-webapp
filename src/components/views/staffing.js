import React from 'react';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Hero from '../hero';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import ConduentImg from '../../assets/images/conduent.jpg';
import InfoShareImg from '../../assets/images/infoshare.png';
import OntarioImg from '../../assets/images/ontario.jpg';
import StaffingImg from '../../assets/images/jobsimg.jpg';
import VertexOneImg from '../../assets/images/vertexone.png';

const clients = [
    {
        name: "VertexOne",
        img: VertexOneImg,
        info: 'VertexOne, the first cloud CIS & customer experience management platform for utility companies.',
        website: 'https://www.vertexone.net/'
    },
    {
        name: "The Government of Ontario",
        img: OntarioImg,
        info: "The Government of Ontario, formally Her Majesty's Government of Ontario, is the provincial government of the province of Ontario, Canada.",
        website: 'https://www.ontario.ca/page/government'
    },
    {
        name: "InfoShare Systems",
        img: InfoShareImg,
        info: 'Infoshare Systems Inc. delivers business solutions that meets strategic objectives of our customers and provides a complete range of Software solutions.',
        website: 'https://www.vertexone.net/'
    },
    {
        name: "Conduent",
        img: ConduentImg,
        info: 'Conduent Inc. is a technology-led business process services company.',
        website: 'https://www.conduent.com/'
    },
];

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
        backgroundSize: 'contain'
    },
    cardContent: {
        flexGrow: 1,
    }
})

function Staffing(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <Hero heroImg={StaffingImg} title="Our business philosophy is simple. We are you"/>
            <div className={classes.heroUnit}>
                <div className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Staffing
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                        As experts in talent identification and capture we have an enviable reputation built on commitment and success. <br/><br/>
                        We provide quality HR services to attract, develop, motivate and retain a diverse workforce within a supportive work environment. We do this with an emphasis on Technology adequacy basis, on the consultation and communication with the organization's for their HR needs. <br/><br/>
                        Our services consultants have worked in the roles they now recruit for so understand and speak your language. They know where to look and can spot talent. We’ve been around for decades so know what we are doing. Our systems and processes are slick. Our database of contacts reaches for the sky. <br/><br/>
                        All of this reduces the time to hire and increases the quality of the hire – efficiencies for you and your business.
                    </Typography>
                </div>
            </div>
            <Divider variant="middle"/>
            <div className={classNames(classes.layout, classes.cardGrid)}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom style={{paddingBottom: '2%'}}>
                    Our Clients
                </Typography>
                <Grid container spacing={40}>
                    {clients.map((client, i) => (
                        <Grid item key={i} sm={6} md={4} lg={3}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={client.img}
                                    title={client.name}
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {client.name}
                                    </Typography>
                                    <Typography>
                                        {client.info}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" href={client.website} target="_blank">
                                        Website
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </React.Fragment>
    )
}

export default withStyles(styles)(Staffing);