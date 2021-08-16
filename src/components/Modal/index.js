import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ModalActions } from '../../redux/actions/modal';

const CustomModal = () => {
  const dispatch = useDispatch();
  const show = useSelector(({ modal }) => modal.toshow);

  const params = useSelector(({ modal }) => {
    return { title: modal.title, message: modal.message };
  });

  const handleClose = () => {
    dispatch(ModalActions.hideModal());
  };
  const { title, message } = params;
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
