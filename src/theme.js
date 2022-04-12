import { createTheme } from '@material-ui/core/styles';
import isMobile from './utils/isMobile.js';

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          boxSizing: 'border-box',
          width: '100%',
          height: '100%',
          padding: '0',
          margin: '0',
        },
        'html, body': {
          outline: 'none',
        },
        body: {
          margin: '0 auto',
        },
        '#root': {
          display: 'flex',
          flexDirection: isMobile() ? 'column' : 'row',
          alignItems: 'center',
          minHeight: '100%',
          height: isMobile() ? '100%' : '100vh',
        },
        ':focus': {
          outline: 'none',
        },
        a: {
          textDecoration: 'none',
        },
      },
    },
    MuiFormHelperText: {
      root: {
        minHeight: '24px',
      },
    },
  },
});
export default theme;
