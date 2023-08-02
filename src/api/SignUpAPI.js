import api from './index';

const SignUpAPI = async (email, password) => {
  try {
    const response = await api.post('/auth/signup', {
      'email': email,
      'password': password,
    });
    console.log(response);
    if (response.status === 201) {
      return true;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
  return false;
};

export default SignUpAPI;
