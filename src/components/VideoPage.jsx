import "./VideoPage.css"; // CSS styling for videos

const videos = [
  { id: 1, url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 2, url: "https://www.w3schools.com/html/movie.mp4" },
  { id: 3, url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 4, url: "https://www.w3schools.com/html/movie.mp4" },
  { id: 5, url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 6, url: "https://www.w3schools.com/html/movie.mp4" },
  { id: 7, url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 8, url: "https://www.w3schools.com/html/movie.mp4" },
];

const VideoPage = () => {
  return (
    <div className="video-page">
      <h1>Video Gallery</h1>
      <div className="video-container">
        {videos.map((video) => (
          <div key={video.id} className="video-player">
            <video controls width="100%">
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
