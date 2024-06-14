import AddComments from "../AddComments/AddComments";
import CommentsList from "../CommentsList/CommentsList";

import "./Comments.scss";

const Comments = ({ selectedVideo }) => {
  return selectedVideo ? (
    <section className="comments">
      <h3 className="comments__title">
        {selectedVideo.comments.length} Comments
      </h3>
      <AddComments />
      {selectedVideo.comments.length > 0 ? (
        <>
          <CommentsList comments={selectedVideo.comments} />
          <hr className="divider divider--comments-list" />
        </>
      ) : (
        <p className="comments__title">No comments.</p>
      )}
    </section>
  ) : (
    <></>
  );
};

export default Comments;
