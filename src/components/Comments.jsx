import { useQuery } from "@tanstack/react-query";
import { fetchComments } from "../api/videoService";

const Comments = ({ videoId }) => {
  const {
    data: comments,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["comments", videoId],
    queryFn: () => fetchComments(videoId),
    staleTime: 1000 * 60 * 5,
  });

  console.log("FETCH COMMENTS : ", comments);

  if (isLoading) return <p>Loading comments...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="comments-section">
      <h3>Comments</h3>
      <ul className="comment-list">
        {comments.map((comment) => (
          <li key={comment.id} className="comment">
            <strong>{comment.author}</strong>
            <p>{comment.text}</p>
            <small>
              Published: {new Date(comment.publishedAt).toLocaleString()}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
