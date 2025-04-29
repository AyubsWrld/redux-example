// Import Createslice
import { createSlice } from '@reduxjs/toolkit' ; 
// What do we need for a slice ? 
  //  Name : So that we can reference it. 
  //  Initial state : So that we can actually interact with it. Can be of any type. 
  //  Reducers:  ( Pure functions ) which are used to interact with the state.


export const countSlice = createSlice({
  name: 'count',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1 ; 
    },
    decrement: state => {
      state.value -= 1 ; 
    },
    incrementByValue: ( state, action ) => {
      state.value += action.payload ; 
    }
  }
}); 


// Export the reducers 


export const { increment, decrement, incrementByValue } = countSlice.actions ; 
export default countSlice.reducer ;  // What does this line do? 
