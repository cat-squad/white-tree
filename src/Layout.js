import React from 'react';
import { withStyles } from 'material-ui/styles';
import background from './assets/background.jpg';
import Logo from './assets/Logo';

const Layout = ({ children, classes }) => (
  <div className={classes.root}>
    <Logo />
    {children}
  </div>
);

export default withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundAttachment: 'fixed',
    backgroundColor: '#444',
    backgroundImage: `url('${background}')`,
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    padding: '8px',
  },
})(Layout);
