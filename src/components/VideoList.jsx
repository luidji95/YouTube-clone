import { useQuery } from "@tanstack/react-query";
import { fetchVideos } from "../api/videoService";
import VideoCard from "./VideoCard";

const VideoList = ({ category }) => {
  const {
    data: videos,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["videos", category],
    queryFn: () => fetchVideos(category),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="video-list">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoList;
