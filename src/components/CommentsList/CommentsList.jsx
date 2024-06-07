import "./CommentsList.scss";

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => {
    const date = new Date(comment.timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });

    return (
      <div key={index}>
        <hr className="divider" />
        <article className="comments__list">
          <div className="comments__avatar profile profile--comments"></div>
          <div className="comment">
            <div className="comment__wrapper">
              <h3 className="comment__author">{comment.name}</h3>
              <p className="comment__date">{date}</p>
            </div>
            <p className="comment__content">{comment.comment}</p>
          </div>
        </article>
      </div>
    );
  });
};

export default CommentsList;
