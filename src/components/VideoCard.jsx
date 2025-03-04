import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleClick = () => {
    navigate(`/video/${video.id}`);
  };

  return (
    <div className="video-card" onClick={handleClick}>
      <img src={video.thumbnail} alt={video.title} />
      <div className="video-card-content">
        <h3>{video.title}</h3>
        <p className="channel-name">{video.channelTitle}</p>
        <p className="video-date">Published: {formatDate(video.publishTime)}</p>
      </div>
    </div>
  );
};

export default VideoCard;
