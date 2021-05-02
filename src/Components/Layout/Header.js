import {Box, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core';
import Navbar from './Navbar';


const useStyles = makeStyles({
    root: {
        padding: 16,
        paddingTop: 16,
        background: 'rgba(255, 255, 255, .1)',
        backgroundClip: 'padding-box',
        backdropFilter: 'blur(10px)',
        position: '-webkit-sticky',
        //position: 'sticky',
        top:0,
        marginBottom: 45
    },
    link: {
        textDecoration: 'none',
    },
});

const Header = (props) => {
    const classes = useStyles();
    return ( 
        <Box zIndex='tooltip' m={2} className={`${props.className} ${classes.root}`} component='header'>
            <Link className={classes.link} to='/'><Typography component='h1' variant='h5' color='primary'>{props.title}</Typography></Link>
            <Navbar items={props.items}/>
        </Box>
    );
}
 
export default Header;