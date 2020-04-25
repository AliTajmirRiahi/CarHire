import { history } from '../..';
import { RootStore } from './rootStore';
import { observable, computed, action, runInAction } from 'mobx';
import { IUser, IUserFormValues } from '../models/user';
import agent from '../api/agent';

export default class UserStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable user: IUser | null = null;

  @computed get isLoggedIn() {
    return !!this.user;
  }

  @action login = async (values: IUserFormValues) => {
    try {
      const user = await agent.User.login(values);
      runInAction(() => {
        this.user = user;
        if (user.founder) this.rootStore.founderStore.setFounder(user.founder);
      });
      this.rootStore.commonStore.setToken(user.token);
      this.rootStore.modalStore.closeModal();
      console.log(user);
      history.push('/dashboard');
    } catch (error) {}
  };
  @action register = async (values: IUserFormValues) => {
    try {
      const user = await agent.User.register(values);
      runInAction(() => {
        this.user = user;
        if (user.founder) this.rootStore.founderStore.setFounder(user.founder);
      });
      this.rootStore.commonStore.setToken(user.token);
      this.rootStore.modalStore.closeModal();
      history.push('/dashboard');
    } catch (error) {}
  };
  @action logout = () => {
    this.rootStore.commonStore.setToken(null);
    runInAction(() => {
      this.user = null;
      this.rootStore.founderStore.setFounder(null);
    });
    history.push('/');
  };

  @action getUser = async () => {
    try {
      const user = await agent.User.current();
      runInAction(() => {
        this.user = user;
        if (user.founder) this.rootStore.founderStore.setFounder(user.founder);
      });
      this.rootStore.commonStore.setToken(user.token);
      console.log(user);
    } catch (error) {}
  };
}
