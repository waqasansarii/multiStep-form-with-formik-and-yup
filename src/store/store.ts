import {configureStore} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import {formReducer} from '../globalState/createSlice'


export const store = configureStore({
    reducer:{
        FormReducer :formReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() 

