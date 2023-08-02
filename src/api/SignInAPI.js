import api from './index';

const SignInAPI = async (email, password) => {
  try {
    const response = await api.post('/auth/signin', {
      'email': email,
      'password': password,
    });
    if (response.status === 200) {
      window.localStorage.setItem('token', response.data.access_token);
      api.defaults.headers.common['Authorization'] = response.data.access_token;
      return true;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
  return false;
};

export default SignInAPI;
