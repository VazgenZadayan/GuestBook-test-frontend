import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    marginBottom: theme.spacing(1),
  },
  submit: {
    marginTop: theme.spacing(1),
    cursor: 'pointer',
  },
  alertInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperButton: {
    position: 'relative',
    paddingTop: '17px',
  },
  preloader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
}));

export default useStyles;
