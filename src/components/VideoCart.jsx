const VideoCart = ({ video }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="video-card">
      <img src={video.thumbnail} alt={video.title} />
      <div className="video-card-content">
        <h3>{video.title}</h3>
        <p className="channel-name">{video.channelTitle}</p>
        <p className="video-date">Published: {formatDate(video.publishTime)}</p>
      </div>
    </div>
  );
};

export default VideoCart;
