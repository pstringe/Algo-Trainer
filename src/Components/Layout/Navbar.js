import {Box, ButtonGroup, Button} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
    },
});

const Navbar = ({items}) => {
    const classes = useStyles();
    const auth = false;
    
    const links = items.filter((item) => {
        return item.auth === auth && item.show;
    });

    return ( 
        <Box className={classes.root} component='nav'>
            <ButtonGroup variant='text' color='primary' className="links">
                {links.map((item)=>{
                    return (<NavLink className={classes.link}to={item.path}><Button>{item.name}</Button></NavLink>);
                })}
            </ButtonGroup>
        </Box>
    );
}
 
export default Navbar;
 