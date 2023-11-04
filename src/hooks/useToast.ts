import Toast from 'react-native-toast-message';

type ToastProps = {
  type?: 'success' | 'error' | 'info';
  message?: string;
};
const useToast = ({ type, message }: ToastProps) => {
  const showToast = () => {
    Toast.show({
      type: type,
      text1: message,
    });
  };

  return { showToast };
};
export default useToast;
