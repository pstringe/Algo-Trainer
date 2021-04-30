import {
    Grid,
    Typography,
    Button
} from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        marginBottom: 8,
    },
    link:{
        textDecoration: 'none',
    }
});

const Section = ({section}) => {
    const classes = useStyles();

    return ( 
        <Grid className={classes.root} container direction='column' spacing={8}>
            <Grid item>
                <Typography variant='h5'>{section.title}</Typography>
            </Grid>
            <Grid item container direction='row'>
                <Grid item container sm={12} md={8}>
                    <Typography variant='body1'>{section.description}</Typography>
                </Grid>
                <Grid item container sm={12} md={4} justify='center' alignItems='center'>
                    <Link className={classes.link} to={section.path}><Button  variant='contained'>{section.linkText}</Button></Link>
                </Grid>
            </Grid>
        </Grid>
    );
}
 
export default Section;