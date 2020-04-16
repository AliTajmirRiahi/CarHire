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
  @observable appLoaded = false;
  @observable submitting = false;

  @action setToken = (token: string | null) => {
    this.token = token;
  };
  @action setAppLoaded = () => {
    this.appLoaded = true;
  };
  @action setSubmitting = (value: boolean) => {
    this.submitting = value;
  };
}
