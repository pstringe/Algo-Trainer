import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  mainFeature: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeatureContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

function Carousel(props) {
    const {features} = props;
    const [current, setCurrent] = useState(0); 
    const [seconds, setSeconds] = useState(0);
    const classes = useStyles();

   useEffect(() => {
      function tick() {
        if (!(seconds % 10)) {
            setCurrent(current => current < features.length - 1 ? current + 1 : 0);
        }
        setSeconds((prev) => prev + 1);
    }
    const timer = setTimeout(tick, 1000);
    return () => clearTimeout(timer);
    }, [seconds]);

    const feature = features[current];

    return (
        <Paper className={classes.mainFeature} style={{ backgroundImage: `url(${feature.image})` }}>
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src={feature.image} alt={feature.imageText} />}
        <div className={classes.overlay} />
        <Grid container>
            <Grid item md={6}>
            <div className={classes.mainFeatureContent}>
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                {feature.title}
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                {feature.summary}
                </Typography>
                <RouterLink to={feature.path}>
                    <Link variant="subtitle1" href="#">
                        {feature.linkText}
                    </Link>
                </RouterLink>  
            </div>
            </Grid>
        </Grid>
        </Paper>
    );
}

export default Carousel;