import api from './index';

const GetTodoAPI = async () => {
  try {
    const response = await api.get('/todos');
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};

const CreateTodoAPI = async (todo) => {
  try {
    const response = await api.post('/todos', {
      'todo': todo,
    });
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};

const UpdateTodoAPI = async (id, checked, todo) => {
  try {
    const response = await api.put(`/todos/${id}`, {
      'todo': todo,
      'isCompleted': checked,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};

const DeleteTodoAPI = async (id) => {
  try {
    const response = await api.delete(`/todos/${id}`);
    if (response.status === 204) {
      return true;
    }
  } catch (error) {
    console.error(error);
  }
};

export { GetTodoAPI, CreateTodoAPI, UpdateTodoAPI, DeleteTodoAPI };
