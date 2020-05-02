export interface IPhoto {
  id: string;
  path: string;
  length: number;
  contentType: string;
}

export class Photo implements IPhoto {
  id: string = '';
  path: string = '';
  length: number = 0;
  contentType: string = '';

  constructor(init?: IPhoto) {
    Object.assign(this, init);
  }
}
