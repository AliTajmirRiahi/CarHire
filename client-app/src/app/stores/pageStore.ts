import { RootStore } from './rootStore';
import { observable, action } from 'mobx';
export default class PageStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable currentPage = 1;
  @observable pages = 0;
  @observable numInPage = 10;

  @action setCurrentPage = (value: number) => {
    this.currentPage = value;
  };

  @action setPages = (value: number) => {
    this.pages = value;
  };

  @action setNumInPage = (value: number) => {
    this.numInPage = value;
  };
}
