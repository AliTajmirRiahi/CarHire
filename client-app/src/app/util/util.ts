import { confirmAlert } from 'react-confirm-alert';

export const combineDateAndTime = (date: Date, time: Date) => {
  const timeString = time.getHours() + ':' + time.getMinutes() + ':00';
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dateString = `${year}-${month}-${day}`;
  return new Date(dateString + ' ' + timeString);
};
export const combineDateAndTimeFromString = (date: string, time: string) => {
  //   const timeString = time.getHours() + ':' + time.getMinutes() + ':00';
  //   const year = date.getFullYear();
  //   const month = date.getMonth() + 1;
  //   const day = date.getDate();
  //   const dateString = `${year}-${month}-${day}`;
  //   return new Date(dateString + ' ' + timeString);
};
export const showConfirm = (
  msg: string,
  onYes?: () => any,
  onNo?: () => any
) => {
  confirmAlert({
    title: 'سوال',
    message: msg,
    buttons: [
      {
        label: 'خیر',
        onClick: () => {
          onNo && onNo();
        },
      },
      {
        label: 'بله',
        onClick: () => {
          onYes && onYes();
        },
      },
    ],
  });
};
