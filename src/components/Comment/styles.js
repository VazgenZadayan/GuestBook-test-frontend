import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    margin: theme.spacing(4, 0),
    flex: '1 0 auto',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  avatar: {
    backgroundColor: '#ff4040',
  },
  title: {
    fontSize: 16,
  },
  button: {
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}));

export default useStyles;
