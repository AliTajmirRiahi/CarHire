import React, { useContext, Fragment } from 'react';
import { RootStoreContext } from '../../app/stores/rootStore';
import { Modal, Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const ModalContainer = () => {
  const rootStore = useContext(RootStoreContext);
  const {
    modal: { open, body },
    closeModal,
  } = rootStore.modalStore;
  return (
    <Fragment>
      <Modal
        show={open}
        onHide={closeModal}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default observer(ModalContainer);
