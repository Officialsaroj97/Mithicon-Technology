import { useState, useEffect, useCallback, useMemo } from "react";
import "./StatsSection.css";
import "aos/dist/aos.css";
import AOS from "aos";

const StatsSection = () => {
  // Memoizing targetStats using useMemo
  const targetStats = useMemo(
    () => ({
      completedProjects: 400,
      trainingHoursSaved: 6400000,
      jobProfiles: 3000,
      salesPeopleTrained: 20000,
      effectiveRate: 83,
      improvedRate: 92,
      scalabilityRate: 77,
    }),
    []
  ); // empty dependency array because targetStats will not change during component lifecycle

  const [stats, setStats] = useState({
    completedProjects: 0,
    trainingHoursSaved: 0,
    jobProfiles: 0,
    salesPeopleTrained: 0,
    effectiveRate: 0,
    improvedRate: 0,
    scalabilityRate: 0,
  });

  // Using useCallback with the correct dependency of stats
  const updateStats = useCallback(() => {
    setStats((prevStats) => ({
      completedProjects:
        prevStats.completedProjects < targetStats.completedProjects
          ? prevStats.completedProjects + 5
          : targetStats.completedProjects,
      trainingHoursSaved:
        prevStats.trainingHoursSaved < targetStats.trainingHoursSaved
          ? prevStats.trainingHoursSaved + 5000
          : targetStats.trainingHoursSaved,
      jobProfiles:
        prevStats.jobProfiles < targetStats.jobProfiles
          ? prevStats.jobProfiles + 3
          : targetStats.jobProfiles,
      salesPeopleTrained:
        prevStats.salesPeopleTrained < targetStats.salesPeopleTrained
          ? prevStats.salesPeopleTrained + 100
          : targetStats.salesPeopleTrained,
      effectiveRate:
        prevStats.effectiveRate < targetStats.effectiveRate
          ? prevStats.effectiveRate + 1
          : targetStats.effectiveRate,
      improvedRate:
        prevStats.improvedRate < targetStats.improvedRate
          ? prevStats.improvedRate + 1
          : targetStats.improvedRate,
      scalabilityRate:
        prevStats.scalabilityRate < targetStats.scalabilityRate
          ? prevStats.scalabilityRate + 1
          : targetStats.scalabilityRate,
    }));
  }, [targetStats]); // Add targetStats to the dependencies of useCallback

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const interval = setInterval(updateStats, 50);

    const timer = setTimeout(() => {
      clearInterval(interval);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [updateStats]); // Use updateStats here as dependency in useEffect

  return (
    <div className="stats-section">
      {/* Top Stats */}
      <div className="top-stats">
        <div className="stat-item" data-aos="fade-up">
          <h2>{stats.effectiveRate}%</h2>
          <p>Significant Reduction In Training Time & Costs</p>
        </div>
        <div
          className="stat-item highlight"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2>{stats.improvedRate}%</h2>
          <p>Enhanced Efficiency In Employee Onboarding</p>
        </div>
        <div className="stat-item" data-aos="fade-up" data-aos-delay="400">
          <h2>{stats.scalabilityRate}%</h2>
          <p>Greater Scalability And Business Growth</p>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="bottom-stats" data-aos="fade-up" data-aos-delay="600">
        <h3>Empowering Businesses with Proven Results</h3>
        <div className="stat-numbers">
          <div className="number-item" data-aos="zoom-in" data-aos-delay="800">
            <h2>{stats.completedProjects}+</h2>
            <p>Projects Completed</p>
          </div>
          <div className="number-item" data-aos="zoom-in" data-aos-delay="1000">
            <h2>{stats.trainingHoursSaved}+</h2>
            <p>Training Hours Saved</p>
          </div>
          <div className="number-item" data-aos="zoom-in" data-aos-delay="1200">
            <h2>{stats.jobProfiles}+</h2>
            <p>Job Profiles</p>
          </div>
          <div className="number-item" data-aos="zoom-in" data-aos-delay="1400">
            <h2>{stats.salesPeopleTrained}+</h2>
            <p>Sales People Trained</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
