import Header from "./components/Header";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Services from "./components/Services";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import Certificates from "./components/Certificates";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [list, setList] = useState([]);

  const url = "https://ajay-portfolio-backend-5zns.onrender.com";

  const fetchData = async () => {
    try {
      const response = await axios.get(url + "/api/item/list");
      setList(response.data.data);
    } catch (err) {
      console.log(err);
      toast.error("Error fetching food list");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const certificates = list.filter((item) => item.category === "Certificate");
  const videos = list.filter((item) => item.category === "Work");

  return (
    <>
      <div className="bg-white text-black dark:text-white dark:bg-[#131313]">
        <ToastContainer />
        <Header />
        <Hero />
        <Education />
        <Services />
        <Works videos={videos} url={url} />
        {activeSection === "certificates" && (
          <Certificates
            onClose={() => setActiveSection(null)}
            certificates={certificates}
            url={url}
          />
        )}
        {activeSection === "resume" && (
          <Resume onClose={() => setActiveSection(null)} />
        )}
        {activeSection === "skills" && (
          <Skills onClose={() => setActiveSection(null)} />
        )}

        <Contact onShowSection={setActiveSection} />
      </div>
    </>
  );
}
