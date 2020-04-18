import { RootStore } from './rootStore';
import { observable, action, runInAction } from 'mobx';
import { IBaseInfo } from '../models/baseInfo';
import agent from '../api/agent';

export default class BaseInfoStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable BasiesInfo: IBaseInfo[] | undefined = undefined;
  @observable current: IBaseInfo | null = null;

  @action getBasiesInfo = async (type: string) => {
    try {
      const i = await agent.BaseInfo.details(type);
      runInAction(() => {
        this.BasiesInfo = i;
      });
    } catch (error) {}
  };
  @action getCurrent = async (id: string) => {
    try {
      const c = await agent.BaseInfo.current(id);
      runInAction(() => {
        this.current = c;
      });
      console.log(c);
    } catch (error) {}
  };
}
