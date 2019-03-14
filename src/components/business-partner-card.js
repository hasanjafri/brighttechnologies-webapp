import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    card: {
        maxWidth: 350,
        display: 'inline-block',
        paddingLeft: '10px',
        paddingRight: '10px'
    },
    media: {
        height: 140,
        backgroundSize: 'contain'
    }
}

function BusinessPartnerCard(props) {
    const { classes } = props;
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={props.img} title={props.hint}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography component="p">
                    {props.address}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    Website
                </Button>
            </CardActions>
        </Card>
    )
}

BusinessPartnerCard.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(BusinessPartnerCard);