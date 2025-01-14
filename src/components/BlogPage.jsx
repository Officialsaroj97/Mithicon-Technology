import { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS for animations
import { Link } from "react-router-dom"; // Import Link for navigation
import "./BlogPage.css"; // Custom styles for the Blog Page

const BlogPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with a default animation duration
  }, []);

  const blogs = [
    {
      id: 1,
      title: "How to Improve Employee Training?",
      summary:
        "Employee training is a critical aspect of organizational success. Learn the top strategies to enhance the training process.",
      details: "/blog/1",
    },
    {
      id: 2,
      title: "Why SOPs Are Crucial for Businesses",
      summary:
        "Standard Operating Procedures ensure consistency and efficiency. Discover why every business should invest in creating them.",
      details: "/blog/2",
    },
    {
      id: 3,
      title: "Top 5 Trends in Remote Training",
      summary:
        "Remote training is the new norm. Stay ahead with these top 5 trends shaping the future of remote learning.",
      details: "/blog/3",
    },
  ];

  return (
    <div className="blog-page">
      <h1 className="blog-title" data-aos="fade-down">
        Our Blogs
      </h1>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id} data-aos="fade-up">
            <h3>{blog.title}</h3>
            <p>{blog.summary}</p>
            <Link to={blog.details}>
              <button className="read-more-btn">Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
