import { createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Dashboard from './Views/Dashboard';
import Signin from './Components/Auth/Signin';
import {
  Container,
  Box,
} from '@material-ui/core';

import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Components/Layout/Header';
import Home from './Views/Home/Home';
import Signup from './Components/Auth/Signup';
import { AuthProvider } from './Context/AuthContext';
import app from './firebase';

const theme = createMuiTheme({
    palette: {
      //type: 'dark',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#f48fb1',
      },
    }
  }
);

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    width: '100vw',
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between' 
  }
}));



function App() {
  const classes = useStyles();
  console.log('app', app);
  /*
  ** specify routes using example format starting with default route
  **  auth - (boolean) determines if authentication is requred for this route
  **  show - (boolean) determinse if the route should have a visible nav link
  **  component - React Component Object or JSX specifies the component to render when the route is accessed.
  */
  const siteTitle = 'React MUI Starter';
  
  const routes = [
    {name: 'root', path: '/', component: <Home />, auth: false, show:false},
    {name: 'home', path: '/home', component: <Home />, auth: false, show:true},
    {name: 'signup', path: '/signup', component: <Signup />, auth: false, show: true},
    {name: 'login', path: '/signin', component: <Signin />, auth: false, show: true},

  ];

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Box  className={`App ${classes.root}`} maxWidth='xl' >
        <Router>
          <AuthProvider>
          <Header className={classes.header} title={siteTitle} items={routes}/>
          <Container>
            <Switch>
              {routes.map((route, idx)=>{
                return (!idx ? <Route exact path={route.path}>{route.component}</Route> : 
                <Route path={route.path}>{route.component}</Route>);
              })}          
            </Switch>
          </Container>
          </AuthProvider>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
