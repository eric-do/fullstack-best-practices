import Axios from 'axios';
import { API_URL } from '~/config';

const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

// This doesn't work as intended. See https://github.com/axios/axios/issues/362
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default axios;
