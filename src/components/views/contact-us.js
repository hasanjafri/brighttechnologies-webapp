import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Hero from '../hero';

import ContactImg from '../../assets/images/contactimg.jpeg';

const styles = theme => ({
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
      marginBottom: theme.spacing.unit * 7
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: 'lightblue',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit,
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
});

class ContactUs extends Component {
  
  handleSubmit = () => {
    console.log('submit');
  }

  render() {
    const { classes } = this.props;
    return(
        <React.Fragment>
            <Hero heroImg={ContactImg} title="Contact Us"/>
            <main className={classes.main}>
              <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon color="primary"/>
                </Avatar>
                <Typography component="h1" variant="h5">
                  Contact Us
                </Typography>
                <form className={classes.form} onSubmit={this.handleSubmit}>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <Input id="name" name="name" autoComplete="name" autoFocus disableUnderline/>
                  </FormControl>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <Input id="email" name="email" autoComplete="email" disableUnderline/>
                  </FormControl>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="subject">Subject</InputLabel>
                    <Input id="subject" name="subject" autoComplete="subject" disableUnderline/>
                  </FormControl>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="message">Message</InputLabel>
                    <Input id="message" name="message" autoComplete="message" multiline/>
                  </FormControl>
                  <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                    Send Message
                  </Button>
                </form>
              </Paper>
            </main>
        </React.Fragment>
    );
  }
}

export default withStyles(styles)(ContactUs);