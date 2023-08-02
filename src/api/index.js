import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop',
});

// instance.defaults.headers.common['Authorization']
instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers.put['Content-Type'] = 'application/json';

export default instance;
