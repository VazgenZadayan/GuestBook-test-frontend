import { createSlice } from '@reduxjs/toolkit';

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
