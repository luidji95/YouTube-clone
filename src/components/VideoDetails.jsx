import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchSingleVideo } from "../api/videoService";

const VideoDetail = () => {
  const { videoId } = useParams();

  console.log("Video ID:", videoId);

  const {
    data: video,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["video", videoId],
    queryFn: () => fetchSingleVideo(videoId),
    staleTime: 1000 * 60 * 5,
  });

  console.log("Video Data:", video);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="video-detail">
      <h2>{video.snippet.title}</h2>
      <h2>{video.snippet.channelTitle}</h2>
      <p>{video.snippet.description}</p>
      <p>Likes : {video.statistics.likeCount}</p>
      <p>Views: {video.statistics.viewCount}</p>
    </div>
  );
};

export default VideoDetail;
