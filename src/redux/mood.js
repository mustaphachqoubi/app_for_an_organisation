import { createSlice } from "@reduxjs/toolkit";

const mood = createSlice({
    name: "mood",
    initialState: {
        mood: "light"
    },
    reducers: {
        setMood: (state, action) => {
            state.mood = action.payload
        }
    }
})

export const {setMood} = mood.actions
export default mood