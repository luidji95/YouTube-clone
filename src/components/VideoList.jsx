import { useQuery } from "@tanstack/react-query";
import { fetchVideos } from "../api/videoService";
import { useEffect, useState } from "react";
import VideoCart from "./VideoCart";

const VideoList = () => {
  const {
    data: videoList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["videos"],
    queryFn: fetchVideos,
    staleTime: 1000 * 60 * 5,
  });

  const [video, setVideo] = useState([]);

  useEffect(() => {
    if (videoList && videoList.length > 0) {
      const filteredVideos = videoList.filter(
        (item) => item.kind === "youtube#video"
      );

      setVideo(filteredVideos);
    }
  }, [videoList]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="video-list">
      {video.map((video) => (
        <VideoCart key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoList;
