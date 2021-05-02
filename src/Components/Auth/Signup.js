import {
    Box, 
    Button,
    TextField,
    Typography,
    Avatar,
    FormControlLabel,
    Checkbox,
    Grid,
    Link,
} from '@material-ui/core';

import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Copyright from './Copyright';
import {makeStyles} from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/dom';

const useStyles = makeStyles(theme => {
    return {
        root: {
            width: 500,
            margin: 'auto',
            borderRadius: 8,
            padding: theme.spacing(2),
            
            /*
            ** glass
            */
            margin: '0 auto',
            background: 'rgba(16,18,27,0.4)',
            border: '1px solid rgba( 255, 255, 255, 0.18 )',
            backdropFilter:'blur(2px)',
        },
        header: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }
    }
})

const Signup = () => {
    const classes = useStyles();
    return ( 
        <Box className={classes.root}>
            <CssBaseline />
            <Box className={classes.paper}>
                <Box className={classes.header}>
                    <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    Sign Up
                    </Typography>
                </Box>
                <form className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign In
                </Button>
                </form>
            </Box>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Box>
    );
}
 
export default Signup;