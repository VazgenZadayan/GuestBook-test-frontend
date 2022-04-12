import React from 'react';

import { Formik } from 'formik';

import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  CircularProgress,
} from '@material-ui/core';

import validationSchema from '../../utils/validationSchema';

import useStyles from './styles';

const CreateComment = React.memo(({ handleSubmit, loading, userName }) => {
  const classes = useStyles();

  return (
    <Container component="section" maxWidth="xs" className={classes.root}>
      <Typography variant="h4" align="center">
        Add a comment
      </Typography>
      <Formik
        initialValues={{
          name: '',
          comment: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
      >
        {({
          values,
          errors,
          isValid,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit}
            onKeyDown={(e) => {
              (e.ctrlKey || e.metaKey) && handleSubmit();
            }}
          >
            <TextField
              error={touched.name && Boolean(errors.name)}
              variant="outlined"
              required
              fullWidth
              className={classes.nameTextField}
              id="title"
              label="Your name"
              helperText={touched.name && (errors.name || ' ')}
              name="name"
              type="text"
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
              autoComplete="off"
            />

            <TextField
              error={touched.comment && Boolean(errors.comment)}
              variant="outlined"
              required
              fullWidth
              className={classes.commentTextField}
              id="comment"
              label="Your comment"
              helperText={touched.comment && (errors.comment || ' ')}
              name="comment"
              autoComplete="off"
              type="text"
              value={values.comment}
              onBlur={handleBlur}
              onChange={handleChange}
              multiline
              minRows={3}
              maxRows={10}
            />
            <Box component="div" className={classes.wrapperButton}>
              <Button
                fullWidth
                disabled={!isValid || loading}
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                size="large"
              >
                Publish
              </Button>
              {userName && loading && (
                <CircularProgress
                  thickness={5}
                  size={36}
                  color="secondary"
                  className={classes.preloader}
                />
              )}
            </Box>
          </form>
        )}
      </Formik>
    </Container>
  );
});

export default CreateComment;
