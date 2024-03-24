import {configureStore} from "@reduxjs/toolkit";
import {movieReducer, themeReducer} from "./slices";
import {genreReducer} from "./slices/genreSlice";

const store= configureStore({
    reducer:{
        movies:movieReducer,
        genres:genreReducer,
        theme:themeReducer
    }
})
export {store}