import {Typography, Link} from '@material-ui/core';

const Copyright = (props) =>  {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="pstringe.github.io">
          pstringe.github.io
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
export default Copyright;