import { create } from "zustand";
import { todoT } from "../types";

type state = {
  todos: todoT[];
};

type action = {
  addTodo: (todo: todoT) => void;
  removeTodo: (todo: todoT) => void;
  updateTodo: (todo: todoT) => void;
  clearTodos: () => void;
  loadTodos: (todos: todoT[]) => void;
};

const useTodoStore = create<state & action>()((set) => ({
  todos: [],
  addTodo: (todo: todoT) =>
    set((state) => ({
      todos: [...state.todos, todo],
    })),
  removeTodo: (todo: todoT) =>
    set((state) => ({
      todos: state.todos.filter((t) => t.todo_id !== todo.todo_id),
    })),
  updateTodo: (todo: todoT) =>
    set((state) => ({
      todos: state.todos.map((t) => (t.todo_id === todo.todo_id ? todo : t)),
    })),
  clearTodos: () =>
    set(() => ({
      todos: [],
    })),
  loadTodos: (todos: todoT[]) =>
    set(() => ({
      todos: todos,
    })),
}));

export default useTodoStore;
