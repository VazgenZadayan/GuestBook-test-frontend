import axios from 'axios';
import { toast } from 'react-toastify';

import {
  startLoading,
  getAllCommentsSuccess,
  getError,
  addCommentSuccess,
} from '../slices/commentsSlice';

import { APIUrls } from '../configs/APIUrls';

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
