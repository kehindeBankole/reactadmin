import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
   
  },
}));

export default function Linear(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress  variant="determinate" value={props.value} color={props.color}/>
    </div>
  );
}
