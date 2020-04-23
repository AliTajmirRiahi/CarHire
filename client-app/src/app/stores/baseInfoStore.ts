import { RootStore } from './rootStore';
import { observable, action, runInAction } from 'mobx';
import { IBaseInfo } from '../models/baseInfo';
import agent from '../api/agent';
import { toast } from 'react-toastify';

export default class BaseInfoStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable BasiesInfo: IBaseInfo[] | undefined = undefined;
  @observable current: IBaseInfo | null = null;

  @action getBasiesInfo = async (
    type: string,
    numInPage: number,
    pageNumber: number
  ) => {
    try {
      const BasiesInfo = await agent.BaseInfo.details(
        type,
        numInPage,
        pageNumber
      );
      runInAction(() => {
        this.BasiesInfo = BasiesInfo;
      });
    } catch (error) {}
  };
  @action getCurrent = async (id: string) => {
    try {
      const current = await agent.BaseInfo.current(id);
      runInAction(() => {
        this.current = current;
      });
      return current;
    } catch (error) {}
  };
  @action updateInfo = async (values: IBaseInfo) => {
    try {
      await agent.BaseInfo.update(values);
      runInAction(() => {
        this.BasiesInfo = this.BasiesInfo?.map((p) => {
          return p.id === values.id ? values : p;
        });
      });
      toast('عملیات با موفقیت انجام شد');
      this.rootStore.modalStore.closeModal();
    } catch (error) {}
  };
  @action createInfo = async (type: string, values: IBaseInfo) => {
    try {
      const newBase = await agent.BaseInfo.create(type, values);
      runInAction(() => {
        this.BasiesInfo?.push(newBase);
      });
      toast('عملیات با موفقیت انجام شد');
      this.rootStore.modalStore.closeModal();
    } catch (error) {}
  };
  @action deleteInfo = async (id: string) => {
    try {
      await agent.BaseInfo.delete(id);
      runInAction(() => {
        this.BasiesInfo = this.BasiesInfo?.filter((p) => p.id !== id);
      });
      toast('عملیات با موفقیت انجام شد');
      this.rootStore.modalStore.closeModal();
    } catch (error) {}
  };
  @action deleteMultiInfo = async (idList: string[]) => {
    try {
      await agent.BaseInfo.multiDelete(idList);
      runInAction(() => {
        this.BasiesInfo = this.BasiesInfo?.filter(
          (p) => !idList.some((k) => k === p.id)
        );
      });
      toast('عملیات با موفقیت انجام شد');
      this.rootStore.modalStore.closeModal();
    } catch (error) {}
  };
  @action getPages = async (type: string, numInPage: number) => {
    try {
      var pages = await agent.BaseInfo.pages(type, numInPage);
      runInAction(() => {
        this.rootStore.pageStore.setPages(pages);
      });
    } catch (error) {}
  };
}
