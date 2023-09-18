import { createSlice } from "@reduxjs/toolkit"
 
const initialState = {
    name: "name",
    age: "age", 
    color: "green"
}
const createPerson = createSlice({
    name: "person", 
    initialState,
    reducers:{
        addName: (state, action) => {
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.color = action.payload.color
        }
    }
}) 

export const {addName} = createPerson.actions

export default createPerson.reducer