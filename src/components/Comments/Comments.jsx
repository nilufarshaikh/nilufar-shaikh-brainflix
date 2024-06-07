import "./Comments.scss";
import AddComments from "../AddComments/AddComments";
import CommentsList from "../CommentsList/CommentsList";

const Comments = ({ currentVideo }) => {
  //console.log(currentVideo);
  return (
    <section className="comments">
      <h3 className="comments__title">
        {currentVideo.comments.length} Comments
      </h3>
      <AddComments />
      <hr className="divider" />
      <CommentsList comments={currentVideo.comments} />
    </section>
  );
};

export default Comments;
