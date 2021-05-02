import {
    Box, 
    Button,
    TextField,
    Typography,
    Avatar,
    Link,
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Copyright from './Copyright';
import {makeStyles} from '@material-ui/core/styles';
import { useState } from 'react';
import { useAuth } from '../../Context/AuthContext';

const useStyles = makeStyles(theme => {
    return {
        root: {
            width: 500,
            //margin: 'auto',
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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handelSubmit = async (e) => {
        e.preventDefault();
        setLoading(cur=> true);
        if (password !== confirm){
            return setError(cur => "passwords don't match");
        }
        try {
            setError('');
            await signup(email, password);
        } catch{
            setError(cur => 'account creation failed');
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
                        Sign Up
                    </Typography>
                </Box>
                {error && <Typography variant='error'>There was an error</Typography>}
                <form onSubmit={(e) => handelSubmit(e)} className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(cur => e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(cur => e.target.value)}
                        autoComplete="current-password"
                    />
                     <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="confirmation"
                        label="Confirm Password"
                        type="password"
                        id="confirmation"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={loading}
                    >
                        Sign Up
                    </Button>
                    <Link href="#" variant="body2">
                        {"Already have an account? Sign Ip"}
                    </Link>
                </form>
            </Box>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Box>
    );
}
 
export default Signup;