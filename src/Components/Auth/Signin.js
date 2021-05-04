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
import { useAuth } from '../../Context/AuthContext';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

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

const Signin = () => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(cur=> true);
        try {
            setError('');
            await login(email, password);
            history.push('/dashboard');
        } catch{
            setError(cur => 'sign in failed');
        }
        setLoading(cur => false);
    };
    return ( 
        <Box className={classes.root}>
            <CssBaseline />
            <Box className={classes.paper}>
                <Box className={classes.header}>
                    <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    Sign in
                    </Typography>
                </Box>
                <form onSubmit={(e) => handleSubmit(e)} className={classes.form} noValidate>
                    <TextField
                        onChange={(e) => setEmail(cur => e.target.value)}
                        value={email}
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
                        onChange={(e) => setPassword(cur => e.target.value)}
                        value={password}
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
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
                <Grid container>
                    <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                    </Grid>
                    <Grid item>
                    <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                    </Grid>
                </Grid>
                </form>
            </Box>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Box>
    );
}
 
export default Signin;