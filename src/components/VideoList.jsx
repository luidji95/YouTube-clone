import { useQuery } from "@tanstack/react-query";
import { fetchVideos, fetchSearchedVideos } from "../api/videoService";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCart";
import { useEffect } from "react";

const VideoList = ({ category }) => {
  const {
    data: videos,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [`videos/${category}`],
    queryFn: () => fetchVideos(category),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="video-list">
      {videos.map((video) =>
        video.kind === "youtube#video" ? (
          <VideoCard key={video.id} video={video} />
        ) : (
          <ChannelCard key={video.id} channel={video} />
        )
      )}
    </div>
  );
};

export default VideoList;
