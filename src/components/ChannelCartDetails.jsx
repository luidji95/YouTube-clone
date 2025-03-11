import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const ChannelCartDetails = () => {
  const channelId = useParams;

  const { data, isLoading, isError, error } = useQuery({
    useQuery: ["channel", channelId],
    queryFn: () => fetchChannelDetails(channelId),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <p>Loading Channel details...</p>;
  if (isError) return <p>Error : {error.message}</p>;

  return (
    <div className="channel-detail">
      <div className="channel-header">
        <img src={data.channelThumbnail} alt={data.channelTitle} />
        <h2>{data.channelTitle}</h2>
        <p>{data.channelDescription}</p>
        <p>Subscribers: {data.subscriberCount}</p>
      </div>

      <h3>Videos</h3>
      <div className="video-list">
        {data.videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default ChannelCartDetails;
