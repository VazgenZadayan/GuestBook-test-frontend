import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
  },
  toolBar: {
    width: '100%',
    paddingLeft: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(5),
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(2),
    },
    display: 'flex',
  },
  avatar: {
    margin: theme.spacing(1),
    color: '#fff',
    backgroundColor: '#f26f26',
  },
  title: {
    paddingLeft: theme.spacing(1),
  },
}));

export default useStyles;
