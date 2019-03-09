import React, { Component } from 'react';
import history from './history';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper'; 
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Popper from '@material-ui/core/Popper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    appBar: {
        position: 'relative',
    },
    toolbarTitle: {
        flex: 1,
    },
    paper: {
        marginRight: theme.spacing.unit * 2
    },
    root: {
        display: 'flex'
    },
})

class NavBar extends Component {
    state = {
        open: false
    };

    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
    };

    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        const { open } = this.state

    return(
        <React.Fragment>
            <AppBar position="static" color="default" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        Bright Technologies - IT Solution Provider
                    </Typography>
                    <Button onClick={() => history.push('/')}>Home</Button>
                    <div className={classes.root}>
                        <Button
                            buttonRef={node => {
                            this.anchorEl = node;
                            }}
                            aria-owns={open ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            onClick={this.handleToggle}
                        >
                            Services
                            <KeyboardArrowDownIcon />
                        </Button>
                        <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                id="menu-list-grow"
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                <ClickAwayListener onClickAway={this.handleClose}>
                                    <MenuList>
                                        <MenuItem onClick={this.handleClose}>Staffing</MenuItem>
                                        <MenuItem onClick={this.handleClose}>BI Consultancy</MenuItem>
                                        <MenuItem onClick={this.handleClose}>Software Solution</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                                </Paper>
                            </Grow>
                            )}
                        </Popper>
                    </div>
                    <Button onClick={() => history.push('/business-partner')}>Business Partner</Button>
                    <Button onClick={() => history.push('/news')}>News</Button>
                    <Button onClick={() => history.push('/contact-us')}>Contact Us</Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
    }
    
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NavBar);