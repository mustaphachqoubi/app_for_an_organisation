import { createSlice } from "@reduxjs/toolkit";

const departData = createSlice({
    name: "departdata",
    initialState: {
        departData: {
            departTh: [],
            departTd: []
        }
    },
    reducers: {
        setDepartTh: (state, action) => {
            state.DepartTh = action.payload
        },
        setDepartTd: (state, action) => {
            state.DepartTd = action.payload
        }
    }
})

export const { setDepartTh, setDepartTd } = departData.actions
export default departData