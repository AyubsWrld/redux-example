//Necessary imports to actually create the store and have it update the UI when changes are made. 
import { configureStore } from '@reduxjs/toolkit' ;
import counter from './countSlice.jsx' ; 

export default configureStore({
  reducer: { counter }
});
