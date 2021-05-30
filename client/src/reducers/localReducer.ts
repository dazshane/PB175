import { createSlice, configureStore } from '@reduxjs/toolkit'

export function todosReducer(state = [], action:any) {
    switch (action.type) {
      case 'ADD_ENTRY': {
        return state.concat(action.payload)
      }
      default:
        return state
    }
  }
  