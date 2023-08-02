import api from './index';

const GetTodoAPI = async (token) => {
  try {
    const response = await api.get('/todos', {
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};

const CreateTodoAPI = async (token, todo) => {
  console.log(token, todo);
  try {
    const response = await api.post(
      '/todos',
      {
        todo: todo,
      },
      {
        headers: {
          'Authorization': 'Bearer ' + token,
        },
      },
    );
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

export { GetTodoAPI, CreateTodoAPI };
