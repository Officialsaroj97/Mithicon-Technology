import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrainingProcess from "./components/TrainingProcess";
import FeatureSection from "./components/FeatureSection";
import JobSection from "./components/JobSection";
import StatsSection from "./components/StatsSection";
import WhyTrainingSection from "./components/WhyTrainingSection";
import MithiconSection from "./components/MithiconSection";
import ExpertTalkSection from "./components/ExpertTalkSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import SolutionSection from "./components/SolutionSection";
import ClientsSection from "./components/ClientSection";
import LoginPage from "./components/LoginPage";
import ContactPage from "./components/ContactPage";
import ComInfo from "./components/ComInfo"; // Updated import to ComInfo
import BlogPage from "./components/BlogPage";
import BlogDetails from "./components/BlogDetails";
import AboutUs from "./components/AboutUs"; // Import the AboutUs component

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          {/* Main route with HeroSection */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ClientsSection />
                <TrainingProcess />
                <FeatureSection />
                <JobSection />
                <StatsSection />
                <WhyTrainingSection />
                <MithiconSection />
                <SolutionSection />
                <Testimonials />
                <ExpertTalkSection />
                <FAQSection />
                <Footer />
              </>
            }
          />
          {/* Login route */}
          <Route path="/login" element={<LoginPage />} />
          {/* Contact route */}
          <Route path="/contact" element={<ContactPage />} />
          {/* ComInfo route for "What is Mithicon?" */}
          <Route path="/cominfo" element={<ComInfo />} />
          {/* Blog route */}
          <Route path="/blog" element={<BlogPage />} />
          {/* Blog Details route */}
          <Route path="/blog/:id" element={<BlogDetails />} />
          {/* About Us route */}
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
