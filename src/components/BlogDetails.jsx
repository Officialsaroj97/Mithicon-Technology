import { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS for animations
import { useParams } from "react-router-dom"; // Import useParams to fetch the blog ID
import "./BlogDetails.css"; // Custom styles for Blog Details

const blogContent = {
  1: {
    title: "How to Improve Employee Training?",
    content:
      "Employee training is a fundamental component of any successful organization. It ensures that employees have the necessary skills and knowledge to perform their duties effectively. Here, we discuss various strategies to enhance employee training, including utilizing modern tools, focusing on individual growth, and adopting a continuous learning culture.",
  },
  2: {
    title: "Why SOPs Are Crucial for Businesses",
    content:
      "Standard Operating Procedures (SOPs) are essential for maintaining consistency and efficiency in business operations. This blog delves into the importance of SOPs, how to create them, and their impact on streamlining processes, improving employee performance, and achieving long-term goals.",
  },
  3: {
    title: "Top 5 Trends in Remote Training",
    content:
      "The landscape of employee training has evolved significantly with the rise of remote work. This blog explores the top 5 trends in remote training, including gamification, personalized learning, and leveraging AI to create engaging and effective training programs.",
  },
};

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID from the route params
  const blog = blogContent[id];

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="blog-details" data-aos="fade-in">
      {blog ? (
        <>
          <h1 className="blog-details-title">{blog.title}</h1>
          <p className="blog-details-content">{blog.content}</p>
        </>
      ) : (
        <p>Blog not found</p>
      )}
    </div>
  );
};

export default BlogDetails;
