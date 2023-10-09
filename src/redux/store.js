import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filterReducer";
import { formReducer } from "./formReducer";

export const store = configureStore({
    reducer: {
      form: formReducer,
      filter: filtersReducer,
    },
  });