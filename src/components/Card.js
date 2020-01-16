import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Steppers from './Stepper'

import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    root: {
        flexGrow: 1,
      }
  });


const Cards = (props) => {
    const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
    return(
        <div>
          
  <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {props.title}
        </Typography>
        <Typography variant="h5" component="h2">
          {/* be{bull}nev{bull}o{bull}lent */}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {/* adjective */}
        </Typography>
        <Typography variant="body2" component="p">
          {/* well meaning and kindly.
          <br />
          {'"a benevolent smile"'} */}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
 
  

  
        </div>
    )
}

export default Cards