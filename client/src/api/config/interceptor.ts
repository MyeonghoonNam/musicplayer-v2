import { CustomInstance } from './types';

const Interceptor = (instance: CustomInstance) => {
  instance.interceptors.response.use((res) => res.data);
};

export default Interceptor;
