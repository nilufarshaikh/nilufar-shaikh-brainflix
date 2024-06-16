import AddComments from "../AddComments/AddComments";
import CommentsList from "../CommentsList/CommentsList";

import "./Comments.scss";

const Comments = ({ video }) => {
  if (video === null) {
    return;
  }

  return (
    <section className="comments">
      <h3 className="comments__title">{video.comments.length} Comments</h3>
      <AddComments />
      {video.comments.length > 0 ? (
        <>
          <CommentsList comments={video.comments} />
          <hr className="divider divider--comments-list" />
        </>
      ) : (
        <p className="comments__title">No comments.</p>
      )}
    </section>
  );
};

export default Comments;
