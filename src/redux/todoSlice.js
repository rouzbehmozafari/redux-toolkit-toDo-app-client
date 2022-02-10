import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// export interface CounterState {
//   value: number
// }

// const initialState: CounterState = {
//   value: 0,
// }

export const todoSlice = createSlice({
  name: 'todos',
  initialState : {
      todosList : []
  },
  reducers: {
    addTodo: (state , action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.todosList.push(action.payload)
        // state.todosList = [...state.todosList , action.payload]
    },

    removeTodo: (state,action) => {
      state.todosList = state.todosList.filter(i=> i.id != action.payload)
    },
    status: (state,action) => {
        state.todosList[action.payload.id].completed = action.payload.completed
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo,removeTodo,status } = todoSlice.actions

export default todoSlice.reducer