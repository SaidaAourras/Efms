import { configureStore } from "@reduxjs/toolkit";
import ArticleReducer  from "./articleReducer";

const store = configureStore({
    reducer:{
        articles: ArticleReducer
    }
})
export default store;