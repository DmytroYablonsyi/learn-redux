import { createSlice } from "@reduxjs/toolkit"
 
const initialState = {
    color: "green"
}
const createColor = createSlice({
    name: "backGroundColor", 
    initialState,
    reducers:{
        addColor: (state, action) => {
            state.color = action.payload.color
        }
    }
}) 

export const {addColor} = createColor.actions

export default createColor.reducer