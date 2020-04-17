import { RootStore } from './rootStore';
import { observable, action } from 'mobx';
import { ModalProps } from 'react-bootstrap';

export default class ModalStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @observable modalProps: ModalProps | null = null;
  @observable modal = {
    open: false,
    body: null,
    header: null,
  };

  @action openModal = (
    body: any | null,
    header: any | null,
    size: 'sm' | 'lg' | 'xl' = 'sm'
    // dialogClassName: string = ''
  ) => {
    this.modal.open = true;
    this.modal.body = body;
    this.modal.header = header;
    this.modalProps = { size: size };
  };
  @action closeModal = () => {
    this.modal.open = false;
    this.modal.body = null;
  };
}
