export const ModalActionTypes = {
  SHOW_MODAL: 'SHOW_MODAL',
  HIDE_MODAL: 'HIDE_MODAL',
};

export const ModalActions = {
  showModal: (payload) => {
    return {
      type: ModalActionTypes.SHOW_MODAL,
      payload,
    };
  },
  hideModal: (payload) => {
    return {
      type: ModalActionTypes.HIDE_MODAL,
      payload,
    };
  },
};
