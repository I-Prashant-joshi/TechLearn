'use client'; 

import { toast } from 'react-hot-toast';

export const playSound = () => {
    const audio = new Audio('/notification.mp3');
    audio.play().catch((e) => {
      console.warn('Audio play failed:', e);
    });
  };

const Toast = {
  success: (message = 'Success!') => toast.success(message),
  error: (message = 'Something went wrong.') => toast.error(message),
  info: (message = 'Here is some info.') => toast(message),
  loading: (message = 'Loading...') => toast.loading(message),
  dismiss: () => toast.dismiss(),
};

export default Toast;
