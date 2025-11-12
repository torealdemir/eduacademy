import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Paths from "./components/Paths";
import Placeholder from "./components/Placeholder"
import "./components/Footer"
import Footer from "./components/Footer";
import Activities from "./components/Activities"
import Courses from "./components/Courses"

export default function App() {
  return (
    <>
      <Navbar />  
      <Slider />
      <Placeholder />
      <Paths />
      <Courses />
      <Activities />
      <Footer />
    </>
  );
}
