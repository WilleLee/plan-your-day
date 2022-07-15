import { createSlice } from "@reduxjs/toolkit";

const TODOS_KEY = "todos%pyd";
// [{text: "...", id: Date.now()}, {}]
const defineCurrentToDos = () => {
  const currentToDos = localStorage.getItem(TODOS_KEY);
  return currentToDos ? JSON.parse(currentToDos) : [];
};

const toDosSlice = createSlice({
  name: "toDos",
  initialState: defineCurrentToDos(),
  reducers: {
    addToDo: (toDos, action) => {
      const newToDos = [
        { text: action.payload, id: Date.now(), completed: false },
        ...toDos,
      ];
      const json = JSON.stringify(newToDos);
      localStorage.setItem(TODOS_KEY, json);
      return newToDos;
    },
    removeToDo: (toDos, action) => {
      const newToDos = toDos.filter(
        (toDo) => parseInt(toDo.id) !== action.payload
      );
      const json = JSON.stringify(newToDos);
      localStorage.setItem(TODOS_KEY, json);
      return newToDos;
    },
    removeAll: () => {
      localStorage.removeItem(TODOS_KEY);
      return [];
    },
  },
});

const toDosReducer = toDosSlice.reducer;
export const { addToDo, removeToDo, removeAll } = toDosSlice.actions;

export default toDosReducer;
