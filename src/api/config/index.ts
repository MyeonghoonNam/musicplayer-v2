import axios from 'axios';
import Interceptor from './interceptor';

import type { CustomInstance } from './types';

const createInstance = () => {
  const instance: CustomInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });

  Interceptor(instance);

  return instance;
};

const config = createInstance();

export default config;
