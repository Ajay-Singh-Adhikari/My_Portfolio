import { configureStore } from "@reduxjs/toolkit";
import educationReducer from "./educationSlice";
import servicesReducer from "./servicesSlice";
import contactReducer from "./contactSlice";

export const store = configureStore({
  reducer: {
    education: educationReducer,
    services: servicesReducer,
    contact:contactReducer,
  },
});
