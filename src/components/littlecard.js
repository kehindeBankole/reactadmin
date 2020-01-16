import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Steppers from './Stepper'
import MenuIcon from '@material-ui/icons/Menu';
import Linear from './progress'

import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles({
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


const LittleCards = (props) => {
    const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
    return(
        <div>
          
  <Card className={classes.card} variant="outlined">
      <CardContent>
       <Grid container>
           <Grid item sm={6}>
        {props.icon}
           </Grid>
           <Grid item sm={6}>
      <Typography>
          PRIVATE
      </Typography>
           </Grid>
       </Grid>
       <Linear color={props.color} value={props.value}/>
      </CardContent>
    </Card>
 
  

  
        </div>
    )
}

export default LittleCards