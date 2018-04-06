import * as React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import withStyles, { WithStyles, StyleRulesCallback } from 'material-ui/styles/withStyles';
import withRoot from '../withRoot';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { blue, green, deepOrange } from 'material-ui/colors';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import {
  Divider,
  List,
  ListItem,
  Avatar,
  ListItemText,
  TextField,
  ListSubheader,
} from 'material-ui';
import ImageIcon from 'material-ui-icons/Image';
import WorkIcon from 'material-ui-icons/Work';
import BeachAccessIcon from 'material-ui-icons/BeachAccess';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Chip from 'material-ui/Chip';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import classNames from 'classnames';
const { FloatingActionButton, RaisedButton } = require('material-ui');
const MapsLocalPhone = BeachAccessIcon;
const DeviceAccessTime = BeachAccessIcon;
const MapsPlace = BeachAccessIcon;

import { createMuiTheme } from 'material-ui/styles';
import { indigo, amber, red, grey } from 'material-ui/colors';

const muiTheme = createMuiTheme({
  palette: {
    primary: indigo,
    accent: amber,
    error: red,
    type: 'light',
  },
});

const styles: StyleRulesCallback<'root'> = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 4,
    height: '100%',
  },
  iroot: {
    height: 'calc(100% - 60px)',
    overflow: 'scroll',
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  redPist: {
    margin: 1,
    color: '#fff',
    backgroundColor: red[500],
  },
  blackPist: {
    margin: 1,
    color: '#fff',
    backgroundColor: grey['900'],
  },
  bluePist: {
    margin: 1,
    color: '#fff',
    backgroundColor: blue[500],
  },
  fast: {
    color: green[400],
  },
  med: {
    color: amber[400],
  },
  slow: {
    color: deepOrange[600],
  },
});

type State = {
  open: boolean,
};

@observer
class Index extends React.Component<WithStyles<'root'>> {
  @observable open = false;
  render() {
    const classes: any = this.props.classes;
    return (
      <MuiThemeProvider theme={muiTheme}>
        <style>{`
      html, body, #root, .Index-root-1 {
        height: 100%;
      }
      `}</style>
        <div className={this.props.classes.root}>
          <div className={this.props.classes.iroot}>
            <Dialog open={this.open} onClose={() => (this.open = false)}>
              <DialogTitle>Statistics</DialogTitle>
              <DialogContent>
                <DialogContentText>1-2-3-4-5</DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button color="primary" onClick={() => (this.open = false)}>
                  OK
                </Button>
              </DialogActions>
            </Dialog>
            <Typography variant="display1" gutterBottom>
              <span style={{ color: blue['800'] }}>Ski</span>pQ
            </Typography>
            <Typography variant="subheading" gutterBottom>
              Overview
            </Typography>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary">
                  Currently sitting in
                </Typography>
                <Typography variant="headline" component="h3">
                  XY-Lift
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Time to arrival at peak: <span className={classes.fast}>~12 min</span>
                </Typography>
                {/*
          <Typography component="p">
            well meaning and kindly.<br />
            {'"a benevolent smile"'}
    </Typography>*/}
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <List>
              <ListSubheader>Directly reachable lifts</ListSubheader>
              <ListItem button>
                <Avatar>
                  <ImageIcon />
                </Avatar>
                <ListItemText
                  primary="Gondola"
                  secondary={
                    <span>
                      <span className={classes.fast}>~10 min</span> wait time
                    </span>
                  }
                />
                <Avatar className={classes.bluePist}>9a</Avatar>
                <Avatar className={classes.redPist}>16</Avatar>
              </ListItem>
              <ListItem button>
                <Avatar>
                  <WorkIcon />
                </Avatar>
                <ListItemText
                  primary="Cable car"
                  secondary={
                    <span>
                      <span className={classes.slow}>~30 min</span> wait time
                    </span>
                  }
                />
                <Avatar className={classes.redPist}>21</Avatar>
                <Avatar className={classes.blackPist}>4</Avatar>
                <Avatar className={classes.redPist}>13b</Avatar>
                <Avatar className={classes.bluePist}>10</Avatar>
              </ListItem>
              <ListSubheader>{`Near Points of Interest`}</ListSubheader>
            
              
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Avatar>
                    <BeachAccessIcon />
                  </Avatar>
                  <ListItemText
                    primary="Hut"
                    secondary={
                      <span>
                      <span className={classes.med}>~30 min</span> via fastest route
                    </span>
                    }
                  />
                  <Avatar className={classes.redPist}>21</Avatar>
                <Avatar className={classes.blackPist}>4</Avatar>
                <Avatar className={classes.redPist}>13b</Avatar>
                <Avatar className={classes.bluePist}>10</Avatar>
                  <Avatar />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                    lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Avatar>
                    <BeachAccessIcon />
                  </Avatar>
                  <ListItemText
                    primary="Mountain peak"
                    secondary={
                      <span>
                        <span className={classes.slow}>~60 min</span> via fastest route
                      </span>
                    }
                  />
                  <Avatar className={classes.bluePist}>5</Avatar>
                  <Avatar className={classes.redPist}>3</Avatar>
                  <Avatar />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                    lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </List>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                {/*<div className={classes.column}>*/}
                <Typography className={classes.heading}>Navigate to...</Typography>
                {/*} </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Select trip destination</Typography>
  </div>*/}
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                {/*} <div className={classes.column} />
                <div className={classes.column}>
                 {/*} <Chip label="Mountain Peak" className={classes.chip} onDelete={() => {}} />
                </div>*/}
                <div className={classNames(classes.helper)}>
                  <TextField
                    id="search"
                    label="Input destination"
                    placeholder="Mountain Peak"
                    type="search"
                    className={classes.textField}
                    margin="normal"
                  />
                </div>
              </ExpansionPanelDetails>
              <Divider />
              <ExpansionPanelActions>
                <Button size="small" color="primary">
                  Fastest
                </Button>
                <Button size="small" color="primary">
                  Nicest
                </Button>
              </ExpansionPanelActions>
            </ExpansionPanel>
            <Button variant="raised" color="primary" onClick={() => (this.open = true)}>
              Show Map
            </Button>
            <Button variant="raised" color="secondary" onClick={() => (this.open = true)}>
              Statistics
            </Button>
          </div>
          <AppBar position="static" style={{ position: 'fixed', bottom: '0' }} color="primary">
            <Toolbar>
              {/*<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
</IconButton>*/}
              <Typography variant="title" color="inherit" className={classes.flex}>
                → 30 km 🕔 2:20h ⊘ 60km/h
              </Typography>
              <Button color="inherit" onClick={() => (this.open = true)}>
                Details
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRoot(withStyles(styles)(Index));
