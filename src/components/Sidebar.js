import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArchiveIcon from '@material-ui/icons/Archive';
import Cards from './Card'
import Grid from '@material-ui/core/Grid';
import Steppers from './Stepper'
import Tables from './Table1'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import LittleCards from './littlecard'
import VerticalStepper from './Verticalsteppers'
import Carousel from './carousel'
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Paper from '@material-ui/core/Paper';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Chart from './Chart'
import Piechart from './Pie'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      backgroundColor:"red"
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    }
  }));
const Sidebar = () => {
    const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
 
    return(
        <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={ clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          style={{backgroundColor : "blue"}}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
             ADMIN DASHBOARD
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
      <ListItem button>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItem>
 
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="inbox" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
      <  ShoppingCartIcon/>
        </ListItemIcon>
        <ListItemText primary="orders" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItem>

          </List>

          <Divider />
<List>
<ListItem button>
        <ListItemIcon>
          <ArchiveIcon/>
        </ListItemIcon>
        <ListItemText primary="Archive" />
      </ListItem>
</List>
        </Drawer>
        
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid container spacing={1}>
            <Grid item xs={12} xm={12} lg={7} md={6}>
        <Cards title= {<Steppers/>}/>

        <Grid container spacing={2} style={{marginTop : "9px"}}>
            <Grid item xs={12} xm={12} lg={4} md={6}>
        <LittleCards icon={<SupervisorAccountIcon/>} value={76} color="success"/>
            </Grid>

            <Grid item xs={12} sm={12} lg={4} md={6}>
              <LittleCards color="primary" value={34}/>
            </Grid>

            <Grid item xs={12} sm={12} lg={4} md={6}>
              <LittleCards color="secondary" value={87}/>
            </Grid>

          </Grid>

            </Grid>


            <Grid item xs={12} sm={12} lg={5} md={6}>
      
      <Carousel/>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
          <Grid item xs={12} lg={9}>
              <Paper className={classes.paper}>
                <Tables />
              </Paper>
            </Grid>
            <Grid item xs={12} lg={3}>
              <VerticalStepper/>
            </Grid>
          </Grid>
        <Grid container spacing={2} style={{marginTop:"50px"}}>
          <Grid item xs lg={7}>
          <Chart/>
          </Grid>
          <Grid item xs lg={5}>
      <Piechart/>
          </Grid>
        </Grid>
        </main>
      </div>
    )
}

export default Sidebar;