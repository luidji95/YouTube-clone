import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSingleVideo } from "../api/videoService";

const VideoDetail = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const getVideoDetails = async () => {
      const videoDetails = await fetchSingleVideo(videoId);
      setVideo(videoDetails);
    };

    getVideoDetails();
  }, [videoId]);

  if (!video) return <p>Loading...</p>;

  return (
    <div>
      <h2>{video.title}</h2>
      <p>{video.description}</p>
    </div>
  );
};

export default VideoDetail;
