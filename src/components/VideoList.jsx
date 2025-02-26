import { useQuery } from "@tanstack/react-query";
import { fetchVideos } from "../api/videoService";
import { useEffect, useState } from "react";

const Video = () => {
  const {
    data: videoList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["videos"],
    queryFn: fetchVideos,
    staleTime: 1000 * 60 * 5,
  });

  const [channel, setChannel] = useState([]);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    if (videoList && videoList.length > 0) {
      const filteredVideos = videoList.filter(
        (item) => item.kind === "youtube#video"
      );
      const filteredChannels = videoList.filter(
        (item) => item.kind === "youtube#channel"
      );

      setVideo(filteredVideos);
      setChannel(filteredChannels);
    }
  }, [videoList]);

  console.log("Query result:", videoList);
  console.log("Filtered Videos:", video);
  console.log("Filtered Channels:", channel);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {video.map((video) => (
        <div key={video.id}>
          <img src={video.thumbnail} alt={video.title} />
          <h2>{video.title}</h2>
          <p>{video.channelTitle}</p>
        </div>
      ))}
    </div>
  );
};

export default Video;
