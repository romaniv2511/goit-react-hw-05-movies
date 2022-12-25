import { toast } from 'react-toastify';

const options = {
  position: 'top-center',
  autoClose: 7000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

export const noticeError = message => toast.error(message, options);
export const noticeInfo = message => toast(message, options);
export const noticeSuccess = message => toast.success(message, options);
