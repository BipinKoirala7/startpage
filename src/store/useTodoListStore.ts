import { create } from "zustand";
import { todoListT } from "../types";

type state = {
  todoLists: todoListT[];
  selectedTodoList: todoListT | null;
};

type action = {
  addTodoList: (todoList: todoListT) => void;
  loadTodoList: (todoLists: todoListT[]) => void;
  updateTodoList: (todoList: todoListT) => void;
  deleteTodoList: (todoList: todoListT) => void;
};

const useTodoListStore = create<state & action>((set) => ({
  todoLists: [],
  selectedTodoList: null,
  addTodoList: (todoList: todoListT) => {
    set((state) => ({ todoLists: [...state.todoLists, todoList] }));
  },
  loadTodoList: (todoLists: todoListT[]) => {
    set({ todoLists: todoLists });
  },
  updateTodoList: (todoList: todoListT) => {
    set((state) => ({
      todoLists: state.todoLists.map((t) =>
        t.todo_list_id === todoList.todo_list_id ? todoList : t
      ),
    }));
  },
  deleteTodoList: (todoList: todoListT) => {
    set((state) => ({
      todoLists: state.todoLists.filter(
        (t) => t.todo_list_id !== todoList.todo_list_id
      ),
    }));
  },
}));

export default useTodoListStore;
