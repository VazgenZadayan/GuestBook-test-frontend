import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Alert } from '@material-ui/lab';
import { CircularProgress, Container, Typography } from '@material-ui/core';

import Comment from '../Comment';

import {
  fetchAllComments,
  fetchCreateComment,
} from '../../services/commentService';

import { commentsSelector } from '../../slices/commentsSlice';

import CreateComment from '../CreateComment';

import useStyles from './styles';

const Comments = React.memo((props) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { comments, loading } = useSelector(commentsSelector);

  const [createdComment, setCreatedComment] = useState('');

  useEffect(() => {
    dispatch(fetchAllComments());
  }, [dispatch]);

  const addComment = useCallback(
    async (values, resetForm) => {
      resetForm({ values: { ...values, comment: '' } });

      await dispatch(fetchCreateComment(values));

      await setCreatedComment(values);
    },
    [dispatch]
  );

  return (
    <>
      <CreateComment
        handleSubmit={addComment}
        userName={createdComment.name}
        loading={loading}
      />
      <Container component="section" maxWidth="md" className={classes.root}>
        <Typography variant="h4" align="center">
          Comments
        </Typography>
        {comments?.length > 0 ? (
          comments.map((comment) => {
            return <Comment key={comment._id} comment={comment} />;
          })
        ) : !loading ? (
          <Alert
            variant="outlined"
            severity="info"
            color="info"
            className={classes.alertInfo}
          >
            No comments!
          </Alert>
        ) : (
          <div>
            <Typography component="p" align="center">
              Loading...
            </Typography>
            <CircularProgress
              hickness={5}
              size={32}
              color="primary"
              className={classes.preloader}
            />
          </div>
        )}
      </Container>
    </>
  );
});

export default Comments;
