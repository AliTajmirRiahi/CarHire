import { toast } from 'react-toastify';
import { RootStore } from './rootStore';
import { observable, action, runInAction } from 'mobx';
import { IFounder } from '../models/founder';
import agent from '../api/agent';
import { IUser } from '../models/user';
export default class FounderStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable founder: IFounder | null = null;

  @action setFounder = (founder: IFounder | null) => {
    this.founder = founder;
  };

  @action updateFounder = async (user: IUser) => {
    await agent.Founder.update(user);
    runInAction(() => {
      this.rootStore.userStore.getUser();
    });
    toast('اطلاعات شما با موفقیت ذخیره شد');
  };
}
