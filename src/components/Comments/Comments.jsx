import "./Comments.scss";
import { useState } from "react";
import AddComments from "../AddComments/AddComments";
import CommentsList from "../CommentsList/CommentsList";

const Comments = ({ currentVideo }) => {
  const [comments, setComments] = useState(currentVideo.comments);

  const addComment = (newComment) => {
    setComments([newComment, ...comments]);

    //clear input
  };

  return (
    <section className="comments">
      <h3 className="comments__title">
        {currentVideo.comments.length} Comments
      </h3>
      <AddComments addComment={addComment} />
      <hr className="divider" />
      <CommentsList comments={comments} />
    </section>
  );
};

export default Comments;
