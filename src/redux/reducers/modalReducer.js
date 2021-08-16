import { ModalActionTypes } from '../actions';

const initialState = {
  toshow: false,
  title: '',
  message: '',
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ModalActionTypes.SHOW_MODAL:
      return {
        toshow: true,
        title: action.payload.title,
        message: action.payload.message,
      };
    case ModalActionTypes.HIDE_MODAL:
      return {
        toshow: false,
        title: '',
        message: '',
      };
    default:
      return state;
  }
};

export default modalReducer;
