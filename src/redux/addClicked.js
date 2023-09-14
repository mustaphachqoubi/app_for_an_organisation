import { createSlice } from "@reduxjs/toolkit";

const addClicked = createSlice({
    name: "addClicked",
    initialState: {
        addClicked: false
    },
    reducers: {
        setAddClicked: (state, action) => {
            state.addClicked = action.payload
        }
    }
})

export const {setAddClicked} = addClicked.actions
export default addClicked