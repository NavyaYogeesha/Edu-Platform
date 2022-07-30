// Import custom components
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Courses from "./components/Courses/Courses";
import Testimonial from "./components/Testimonial/Testimonial";
import Features from "./components/Features/Features";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";

// Import Style files
import "./App.scss";

function App() {
  return (
    <div className="education-platform">
      <HeroBanner />
      <Courses />
      <Testimonial />
      <Features />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
