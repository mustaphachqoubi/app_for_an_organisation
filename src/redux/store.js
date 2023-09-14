import { configureStore } from "@reduxjs/toolkit";
import mood from './mood'
import filteredData from "./filteredData";
import addClicked from "./addClicked";
import departData from "./departData";

const store = configureStore({
    reducer: {
        mood: mood.reducer,
        filteredData: filteredData.reducer,
        addClicked: addClicked.reducer,
        departData: departData.reducer
    }
})

export default store