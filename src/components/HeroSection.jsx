import { useState, useEffect, useRef } from "react";
import "./HeroSection.css";
import videoThumbnail1 from "../assets/videothumbnail1.png";
import videoThumbnail2 from "../assets/videothumbnail2.png";
import videoThumbnail3 from "../assets/videothumbnail3.png";
import videoThumbnail4 from "../assets/videothumbnail4.png";
import demoVideo1 from "../assets/video1.mp4";
import demoVideo2 from "../assets/video2.mp4";
import demoVideo3 from "../assets/video3.mp4";
import demoVideo4 from "../assets/video4.mp4";
import Typed from "typed.js";

const HeroSection = () => {
  const videos = [
    { src: demoVideo1, thumbnail: videoThumbnail1 },
    { src: demoVideo2, thumbnail: videoThumbnail2 },
    { src: demoVideo3, thumbnail: videoThumbnail3 },
    { src: demoVideo4, thumbnail: videoThumbnail4 },
  ];

  const [activeVideo, setActiveVideo] = useState(0);
  const videoRefs = useRef(Array(videos.length).fill(null));
  const typedRef = useRef(null);

  const handleMouseEnter = (index) => {
    videoRefs.current[index].play();
  };

  const handleMouseLeave = (index) => {
    videoRefs.current[index].pause();
    videoRefs.current[index].currentTime = 0;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % videos.length);
    }, 5000); // Switch video every 5 seconds
    return () => clearInterval(interval);
  }, [videos.length]);

  useEffect(() => {
    const options = {
      strings: [
        "Make Every Business Process Simpler with SOPs!",
        "Transform Your Business with Smart SOP Solutions.",
        "Simplify Processes, Amplify Results with Custom SOPs",
        "Your Business, Streamlined with Tailored SOPs.",
        "Ready to Scale? Let Our SOPs Take You There!",
      ],
      typeSpeed: 200,
      backSpeed: 200,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Video Section */}
        <div className="video-container">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`video-wrapper ${
                activeVideo === index ? "active" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                controls={activeVideo === index}
                autoPlay={activeVideo === index}
                muted
                loop
                className={`video-player ${
                  activeVideo === index ? "expanded" : ""
                }`}
                poster={video.thumbnail}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>

        {/* Text Content */}
        <div className="details-container">
          <h2>
            Empowering Your Business with <span ref={typedRef}></span>
          </h2>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <button className="cta-button talk-to-expert">
              Talk to Expert
            </button>
            <button
              className="cta-button what-is-mithicon"
              aria-label="Learn More About Mithicon"
            >
              ▶ What is Mithicon?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
