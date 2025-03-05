import { useQuery } from "@tanstack/react-query";
import { fetchRelatedVideos } from "../api/videoService";
import { useNavigate } from "react-router-dom";

const RelatedVideos = ({ videoId }) => {
  const navigate = useNavigate();

  const {
    data: relatedVideos,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["relatedVideos", videoId],
    queryFn: () => fetchRelatedVideos(videoId),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <p>Loading related videos...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="related-videos">
      <h3>Related Videos</h3>
      <ul className="related-video-list">
        {relatedVideos.map((video) => (
          <li
            key={video.id}
            className="related-video"
            onClick={() => navigate(`/video/${video.id}`)}
          >
            <img src={video.thumbnail} alt={video.title} />
            <div>
              <h4>{video.title}</h4>
              <p>{video.channelTitle}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedVideos;
