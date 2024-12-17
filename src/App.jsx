import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <About />
      <Project />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
