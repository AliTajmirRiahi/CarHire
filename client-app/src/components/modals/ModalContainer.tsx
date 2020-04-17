import React, { useContext, Fragment } from 'react';
import { RootStoreContext } from '../../app/stores/rootStore';
import { Modal, Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { stringify } from 'querystring';

const ModalContainer = () => {
  const rootStore = useContext(RootStoreContext);
  const {
    modal: { open, body, header },
    closeModal,
    modalProps,
  } = rootStore.modalStore;
  return (
    <Fragment>
      <Modal
        show={open}
        onHide={closeModal}
        size={modalProps?.size}
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header bsPrefix='atr-modal-header'>
          <Modal.Title as='h4' id='contained-modal-title-vcenter'>
            {header}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={closeModal}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    </Fragment>
  );
};

export default observer(ModalContainer);
