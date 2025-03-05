import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchSingleVideo } from "../api/videoService";
import Comments from "./Comments";
import RelatedVideos from "./RelatedVideos";

const VideoDetail = () => {
  const { videoId } = useParams();

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

  if (isLoading) return <p>Loading video...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="video-detail">
      <h2>{video.snippet.title}</h2>
      <h3>{video.snippet.channelTitle}</h3>
      <p>{video.snippet.description}</p>
      <p>Likes: {video.statistics.likeCount}</p>
      <p>Views: {video.statistics.viewCount}</p>

      <RelatedVideos videoId={videoId} />

      <Comments videoId={videoId} />
    </div>
  );
};

export default VideoDetail;
