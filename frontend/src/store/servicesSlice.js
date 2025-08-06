import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      name: "Frontend Developer",
      para: "Responsive, interactive, pixel perfect Front-End Web Applications.",
      image: "/images/frontend.png",
    },
    {
      id: 2,
      name: "Web Developer",
      para: "Functional,User-Friendly Websites and Web Applications.",
      image: "/images/web.jpeg",
    },
    {
      id: 3,
      name: "React Developer",
      para: "Js framework ensuring applications are visually appealing,functional and easy to maintain.",
      image: "/images/react.jpg",
    },
  ],
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
});

export default servicesSlice.reducer;
