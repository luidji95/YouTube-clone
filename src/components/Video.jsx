import { useQuery } from "@tanstack/react-query";
import { fetchVideos } from "../api/videoService";

const Video = () => {
  const {
    data: videos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["videos"],
    queryFn: fetchVideos,
    staleTime: 1000 * 60 * 5,
  });

  console.log("Query result:", videos);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {videos.map((video) => (
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
