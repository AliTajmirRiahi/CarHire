export interface IFounder {
  id: string;
  rSub: string;
  rTitle: string;
  rContactMail: string;
  rEnable: boolean;
  rCreate: Date | string;
  rExpire: Date | string;
  rCreateJalali: string;
  rExpireJalali: string;
}

export class Founder implements IFounder {
  id: string = '';
  rSub: string = '';
  rTitle: string = '';
  rContactMail: string = '';
  rEnable: boolean = true;
  rCreate: string | Date = '';
  rExpire: string | Date = '';
  rCreateJalali: string = '';
  rExpireJalali: string = '';

  constructor(init?: IFounder) {
    Object.assign(this, init);
  }
}
