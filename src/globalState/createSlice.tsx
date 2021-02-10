import { InitialState } from './initialState'
import { createSlice } from '@reduxjs/toolkit'



const Form = createSlice({
  name: 'form',
  initialState: InitialState,
  reducers: {
    addName: (state, action) => {
      console.log(action.payload)

      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
    },
    addEmail: (state, action) => {
      state.email = action.payload.email
      state.password = action.payload.password
    },
    addGender: (state, action) => {
      state.num = action.payload.num
      state.gender = action.payload.gender
    },
    allReset: (state, action) => {
      console.log(action)
      state.firstName = ''
      state.lastName = ''
      state.email = ''
      state.password = ''
      state.num = ''
      state.gender = ''
    }

  }
})

export const { addName, addEmail, addGender, allReset } = Form.actions


export const formReducer = Form.reducer