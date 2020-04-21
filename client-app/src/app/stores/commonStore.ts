import { RootStore } from './rootStore';
import { observable, action, reaction } from 'mobx';
export default class CommonStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    reaction(
      () => this.token,
      (token) => {
        if (token) {
          window.localStorage.setItem('token', token);
        } else {
          window.localStorage.removeItem('token');
        }
      }
    );
  }

  @observable token: string | null = window.localStorage.getItem('token');
  @observable submitting = false;
  @observable loading = false;
  // @observable multiSelect = false;

  @action setToken = (token: string | null) => {
    this.token = token;
  };
  @action setSubmitting = (value: boolean) => {
    this.submitting = value;
  };

  @action setLoading = (value: boolean) => {
    this.loading = value;
  };

  // @action setMultiSelect = (value: boolean) => {
  //   this.multiSelect = value;
  // };
}
