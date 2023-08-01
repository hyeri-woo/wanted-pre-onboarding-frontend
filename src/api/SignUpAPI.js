import axios from 'axios';
const url = 'https://www.pre-onboarding-selection-task.shop';

const SignInAPI = async (email, password) => {
  try {
    const response = await axios({
      method: 'POST',
      url: url + '/auth/signup',
      headers: {
        'ContentType': 'application/json',
      },
      data: {
        'email': email,
        'password': password,
      },
    });
    console.log(response);
    if (response.status === 201) {
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default SignInAPI;
