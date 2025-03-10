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
    <div className="video-detail-container">
      <div className="video-content">
        <div className="video-detail">
          <iframe
            width="800"
            height="450"
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.snippet.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h2 className="video-title">{video.snippet.title}</h2>
          <h3 className="channel-title">{video.snippet.channelTitle}</h3>
          <p className="video-description">{video.snippet.description}</p>
          <p className="video-likes">Likes: {video.statistics.likeCount}</p>
          <p className="video-views">Views: {video.statistics.viewCount}</p>
        </div>

        {/* Sekcija za komentare (deo video-content-a) */}
        <Comments videoId={videoId} />
      </div>

      {/* Related videos u posebnom div-u sa strane */}
      <div className="related-videos-container">
        <RelatedVideos videoId={videoId} />
      </div>
    </div>
  );
};

export default VideoDetail;
