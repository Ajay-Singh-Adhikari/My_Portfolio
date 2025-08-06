import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  links: [
    {
      href: "https://linkedin.com/in/ajay-singh-adhikari-039415290",
      icon: "FaLinkedin",
    },
    {
      href: "https://twitter.com",
      icon: "FaTwitter",
    },
    {
      href: "https://github.com/Ajay-Singh-Adhikari",
      icon: "FaGithub",
    },
    {
      href: "https://t.me/NightOwl_zzz",
      icon: "FaTelegram",
    },
  ],
  contacts: [
    {
      heading: "Email Address",
      contact: "ajayadhikari12a@gmail.com",
      icon: "FaEnvelope",
    },
    {
      heading: "Phone",
      contact: "+916395712341",
      icon: "FaPhone",
    },
  ],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addLinks(state, action) {
      state.links.push(action.payload);
    },
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
  },
});

export const { addContact, addLinks } = contactSlice.actions;
export default contactSlice.reducer;
