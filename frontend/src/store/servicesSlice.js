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
    {
      id: 3,
      name: "MERN Developer",
      para: "A MERN developer specializes in building full-stack web applications using MongoDB, Express.js, React, and Node.js, delivering seamless front-end and back-end integration.",
      image: "https://thfvnext.bing.com/th/id/OIP.DqIUDu2YxS5_9khTZDUAmgHaFj?w=202&h=180&c=7&r=0&o=7&cb=thfvnext&dpr=1.1&pid=1.7&rm=3",
    },
    {
      id: 3,
      name: "Backend Developer",
      para: "A backend developer focuses on building and managing the server-side logic, databases, and APIs that power applications.",
      image: "https://thfvnext.bing.com/th?q=Back+End+Support+Icon&w=120&h=120&c=1&rs=1&qlt=90&r=0&cb=1&dpr=1.1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    },
  ],
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
});

export default servicesSlice.reducer;
