import { apiResponseT, patchMethod, todoListT } from "../types";

export async function getTodoListByUserId(user_id: string) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}/todoLists/${user_id}`
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch todos: ${response.status} ${response.statusText}`
    );
  }
  const data: apiResponseT<todoListT[]> = await response.json();
  if (data.error) {
    throw new Error(data.message);
  }
  return data;
}

export async function getTodoListByTodoId(user_id: string, todo_list_id: string) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}/todoLists/${user_id}/${todo_list_id}`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data: apiResponseT<todoListT[]> = await response.json();
  return data;
}

export async function createTodoList(todo_list: todoListT) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}/todoLists/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo_list),
    }
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data: apiResponseT<todoListT[]> = await response.json();
  return data;
}

export async function updateTodoList(
  todo_list: todoListT,
  changeProperty: string,
  new_value: string
) {
  const obj: patchMethod = {
    changeProperty,
    new_value,
  };
  const response = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}/todoLists/${todo_list.user_id}/${
      todo_list.todo_list_id
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
  const data: apiResponseT<todoListT[]> = await response.json();
  return data;
}

export async function deleteTodoList(todo_list: todoListT) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}/todoLists/${todo_list.user_id}/${
      todo_list.todo_list_id
    }`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo_list),
    }
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data: apiResponseT<todoListT[]> = await response.json();
  return data;
}
