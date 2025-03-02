import { useQuery } from "@tanstack/react-query";
import { fetchVideos } from "../api/videoService";

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
