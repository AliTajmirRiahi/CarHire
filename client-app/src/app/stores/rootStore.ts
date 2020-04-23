import UserStore from './userStore';
import CommonStore from './commonStore';
import { createContext } from 'react';
import { configure } from 'mobx';
import ModalStore from './modalStore';
import BaseInfoStore from './baseInfoStore';
import PageStore from './pageStore';
import FounderStore from './founderStore';

configure({ enforceActions: 'always' });

export class RootStore {
  userStore: UserStore;
  commonStore: CommonStore;
  modalStore: ModalStore;
  baseInfoStore: BaseInfoStore;
  pageStore: PageStore;
  founderStore: FounderStore;

  constructor() {
    this.userStore = new UserStore(this);
    this.commonStore = new CommonStore(this);
    this.modalStore = new ModalStore(this);
    this.baseInfoStore = new BaseInfoStore(this);
    this.pageStore = new PageStore(this);
    this.founderStore = new FounderStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());
