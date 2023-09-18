import {  configureStore} from '@reduxjs/toolkit';
import createPersonReducer from "../reducers/nameReducer"
import createColorReducer from "../reducers/colorReducer"

const store = configureStore({
    reducer:{
       person:createPersonReducer, color:createColorReducer
    } 
});

export default store