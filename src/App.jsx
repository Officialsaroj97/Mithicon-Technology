import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
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
import ComInfo from "./components/ComInfo";
import BlogPage from "./components/BlogPage";
import BlogDetails from "./components/BlogDetails";
import AboutUs from "./components/AboutUs";
import VideoPage from "./components/VideoPage"; // ✅ Added Video Page

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
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
          {/* Login Route */}
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          {/* Video Page Route (Only show if user is logged in) */}
          <Route
            path="/videos"
            element={user ? <VideoPage /> : <LoginPage setUser={setUser} />}
          />
          {/* Contact Route */}
          <Route path="/contact" element={<ContactPage />} />
          {/* ComInfo Route */}
          <Route path="/cominfo" element={<ComInfo />} />
          {/* Blog Route */}
          <Route path="/blog" element={<BlogPage />} />
          {/* Blog Details Route */}
          <Route path="/blog/:id" element={<BlogDetails />} />
          {/* About Us Route */}
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
