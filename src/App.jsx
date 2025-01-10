import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrainingProcess from "./components/TrainingProcess";
import "./App.css";
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

function App() {
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
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
