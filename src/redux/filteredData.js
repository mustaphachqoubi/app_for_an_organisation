import { createSlice } from "@reduxjs/toolkit";

const filteredData = createSlice({
    name: "filteredData",
    initialState: {
        filteredData: []
    },
    reducers: {
        setFilteredData: (state, action) => {
            state.filteredData = action.payload
        }
    }
})

export const {setFilteredData} = filteredData.actions
export default filteredData