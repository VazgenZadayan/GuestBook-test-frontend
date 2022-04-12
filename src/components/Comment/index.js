import React from 'react';

import { DateTime } from 'luxon';

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@material-ui/core';

import useStyles from './styles';

const Comment = ({ comment: { name, comment, date } }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {name.substr(0, 1).toUpperCase()}
          </Avatar>
        }
        title={name}
        subheader={DateTime.fromISO(date).toFormat('dd.LL.yyyy HH:mm')}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {comment}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Comment;
