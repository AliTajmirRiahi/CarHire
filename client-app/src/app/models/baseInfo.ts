export interface IBaseInfo {
  id: string;
  value: string;
}

export class BaseInfo implements IBaseInfo {
  id: string = '';
  value: string = '';

  constructor(init?: IBaseInfo) {
    this.id = init?.id!;
    this.value = init?.value!;
  }
}
