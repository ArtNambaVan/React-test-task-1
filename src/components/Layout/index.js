import React from 'react';

import {
    AppBar, CssBaseline, Divider, Drawer, Hidden,
    ListItemText, Toolbar, Typography,
    MenuList, MenuItem, IconButton, 
} from '@material-ui/core';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Link, withRouter  } from 'react-router-dom'




const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Layout(props) {
    const { container, location: { pathname }, children } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
    }

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
                <MenuList>
                    <MenuItem component={Link} to="/" selected={'/' === pathname}>
                        Home
                    </MenuItem>
                    <MenuItem component={Link} to="/news" selected={'/news' === pathname}>
                        News
                    </MenuItem>
                    <MenuItem component={Link} to="/login" selected={'/login' === pathname}>
                        Login
                    </MenuItem>
                    <MenuItem component={Link} to="/profile" selected={'/profile' === pathname}>
                        Profile
                    </MenuItem>
                </MenuList>
            <Divider />
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
                >
                </IconButton>
                <Typography variant="h6" noWrap>
                    React Test Task 1
                </Typography>
            </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true
                        }}
                        >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                        >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
            <div className={classes.toolbar} />
                {children}
            </main>
        </div>
    );
}

export default withRouter(Layout)