import api from './index';

const GetTodoAPI = async (token) => {
  try {
    const response = await api.get('/todos', {
      headers: {
        'Authorization': `Bearer ${token}`,
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
  try {
    const response = await api.post(
      '/todos',
      {
        'todo': todo,
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      },
    );
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};

const UpdateTodoAPI = async (token, id, checked, todo) => {
  try {
    const response = await api.put(
      `/todos/${id}`,
      {
        'todo': todo,
        'isCompleted': checked,
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      },
    );
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};

const DeleteTodoAPI = async (token, id) => {
  try {
    const response = await api.delete(`/todos/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    console.log(response);
    if (response.status === 204) {
      return true;
    }
  } catch (error) {
    console.error(error);
  }
};

export { GetTodoAPI, CreateTodoAPI, UpdateTodoAPI, DeleteTodoAPI };
