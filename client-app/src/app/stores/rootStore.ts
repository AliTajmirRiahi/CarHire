import UserStore from './userStore';
import RenterStore from './renterStore';
import CommonStore from './commonStore';
import { createContext } from 'react';
import { configure } from 'mobx';
import ModalStore from './modalStore';
import BaseInfoStore from './baseInfoStore';

configure({ enforceActions: 'always' });

export class RootStore {
  renterStore: RenterStore;
  userStore: UserStore;
  commonStore: CommonStore;
  modalStore: ModalStore;
  baseInfoStore: BaseInfoStore;

  constructor() {
    this.renterStore = new RenterStore(this);
    this.userStore = new UserStore(this);
    this.commonStore = new CommonStore(this);
    this.modalStore = new ModalStore(this);
    this.baseInfoStore = new BaseInfoStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());
