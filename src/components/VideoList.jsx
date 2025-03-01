import { useState, useEffect } from "react";
import { fetchVideos } from "../api/videoService";

const VideoList = ({ category }) => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetchVideos(category)
      .then((data) => {
        setVideos(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [category]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="video-list">
      {videos.map((video) => (
        <div key={video.id} className="video-card">
          <img src={video.thumbnail} alt={video.title} />
          <h2>{video.title}</h2>
          <p>{video.channelTitle}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
