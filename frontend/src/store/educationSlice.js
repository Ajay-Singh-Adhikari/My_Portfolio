import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      heading: "B.Tech in Computer Science",
      year: "2023-27",
      school: "am currently pursuing my",
      school_name: "Bipin Tripathi Kumaon Institute Of Technology",
      link: "https://www.kecua.ac.in/",
    },
    {
      id: 2,
      heading: "Senior Secondary(12th)",
      year: "2022-23",
      school: "have completed my",
      school_name: "Beersheba Senior Secondary School,Haldwani",
      link: "https://www.beershebaschool.in/",
    },
    {
      id: 3,
      heading: "Secondary Schooling(10th)",
      year: "2020-21",
      school: "have completed my",
      school_name: "Beersheba Senior Secondary School,Haldwani",
      link: "https://www.beershebaschool.in/",
    },
  ],
};

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {},
});

export default educationSlice.reducer;
