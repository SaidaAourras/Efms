import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [
    {
      id: 1,
      designation: "Understanding Redux Toolkit",
      family: "Redux",
      image: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Redux+Toolkit",
    },
    {
      id: 2,
      designation: "Learning React Hooks",
      family: "React",
      image: "https://via.placeholder.com/150/33FF57/FFFFFF?text=React+Hooks",
    },
    {
      id: 3,
      designation: "JavaScript ES6 Features",
      family: "JavaScript",
      image: "https://via.placeholder.com/150/3357FF/FFFFFF?text=ES6+Features",
    },
    {
      id: 4,
      designation: "CSS Grid and Flexbox",
      family: "CSS",
      image: "https://via.placeholder.com/150/FF33A8/FFFFFF?text=CSS+Grid+and+Flexbox",
    },
  ],
};

export const articleReducer = createSlice({
  name: "article",
  initialState,
  reducers: {
    addArticle: (state, action) => {
      state.articles.push(action.payload);
    },
    deleteArticle: (state, action) => {
      state.articles = state.articles.filter(
        (article) => article.id !== action.payload
      );
    },
    updateArticle: (state, action) => {
      const index = state.articles.findIndex(
        (article) => article.id === action.payload.id
      );
      if (index !== -1) {
        state.articles[index] = action.payload;
      }
    },
  },
});

// Export actions
export const { addArticle, deleteArticle, updateArticle } = articleReducer.actions;

// Export reducer
export default articleReducer.reducer;
