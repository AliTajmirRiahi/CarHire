import { RootStore } from './rootStore';
// import { observable, computed, action } from 'mobx';

export default class UserStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
}
