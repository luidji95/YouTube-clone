import { useNavigate } from "react-router-dom";

const ChannelCart = ({ channel }) => {
  const navigate = useNavigate();
  const handleChannelDetails = () => {
    navigate(`/channel/${channel.id}`);
  };

  return (
    <div className="channel-card">
      <div className="channel-pic" onClick={handleChannelDetails}>
        <img src={channel.thumbnail} alt={channel.title} />
      </div>
      <div className="channel-info">
        <h4>{channel.title}</h4>
        <p>{channel.description}</p>
      </div>
    </div>
  );
};

export default ChannelCart;
