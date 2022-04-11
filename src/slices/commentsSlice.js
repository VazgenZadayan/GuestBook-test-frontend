import { createSlice } from '@reduxjs/toolkit';

import axios from 'axios';
import { toast } from 'react-toastify';

import { APIUrls } from '../configs/APIUrls';

export const initialState = {
  loading: false,
  errorMessage: null,
  comments: [],
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    getAllCommentsSuccess: (state, { payload }) => {
      state.comments = payload.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      state.loading = false;
      state.errorMessage = null;
    },
    addCommentSuccess: (state, { payload }) => {
      state.userName = payload.name;
      state.comments = [payload, ...state.comments];
      state.loading = false;
      state.errorMessage = null;
    },
    getError: (state, { payload }) => {
      state.loading = false;
      state.errorMessage = payload;
    },
  },
});

export const {
  startLoading,
  getError,
  getAllCommentsSuccess,
  addCommentSuccess,
} = commentsSlice.actions;

export const commentsSelector = (state) => state.comments;

export default commentsSlice.reducer;

export const fetchAllComments = () => {
  return async (dispatch) => {
    dispatch(startLoading());

    try {
      const response = await axios.get(APIUrls.comments);

      dispatch(getAllCommentsSuccess(response.data));
    } catch (error) {
      dispatch(getError(error?.message));

      toast.error(error?.message);
    }
  };
};

export const fetchCreateComment = (comment) => {
  return async (dispatch) => {
    dispatch(startLoading());

    try {
      const response = await axios.post(APIUrls.comments, comment);
      dispatch(addCommentSuccess(response.data));

      toast.success(
        'Congratulations! You have successfully added a new comment!'
      );
    } catch (error) {
      const errMessage = `Server Error: ${error?.response?.data}`;
      dispatch(getError(errMessage));
      
      toast.error(errMessage);
    }
  };
};
