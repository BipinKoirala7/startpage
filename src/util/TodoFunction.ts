import { apiResponseT, patchMethod, todoT } from "../types";

export async function getTodoListByUserId(user_id: string) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}/todos/${user_id}`
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch todos: ${response.status} ${response.statusText}`
    );
  }
  const data: apiResponseT<todoT[]> = await response.json();
  if (data.error) {
    throw new Error(data.message);
  }
  return data;
}

export async function getTodoListByTodoId(user_id: string, todo_id: string) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}/todos/${user_id}/${todo_id}`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data: apiResponseT<todoT[]> = await response.json();
  return data;
}

export async function createTodo(todo: todoT) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}/todos/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data: apiResponseT<todoT[]> = await response.json();
  return data;
}

export async function updateTodo(
  todo: todoT,
  changeProperty: string,
  new_value: string
) {
  const obj: patchMethod = {
    changeProperty,
    new_value,
  };
  const response = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}/todos/${todo.user_id}/${
      todo.todo_id
    }`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data: apiResponseT<todoT[]> = await response.json();
  return data;
}

export async function deleteTodo(todo: todoT) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}/todos/${todo.user_id}/${
      todo.todo_id
    }`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data: apiResponseT<todoT[]> = await response.json();
  return data;
}
