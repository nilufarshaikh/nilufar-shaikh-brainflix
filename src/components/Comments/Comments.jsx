import "./Comments.scss";
import AddComments from "../AddComments/AddComments";

const Comments = () => {
  return (
    <section className="comments">
      <h3 className="comments__title">3 Comments</h3>
      <AddComments />
      <hr className="divider" />
      <article className="comments__list">
        <div className="comments__avatar profile profile--comments"></div>
        <div className="comment">
          <div className="comment__wrapper">
            <h3 className="comment__author">Noah Duncan</h3>
            <p className="comment__date">8/11/2023</p>
          </div>
          <p className="comment__content">
            Your insights into the future of AI are enlightening! The
            intersection of technology and ethics is particularly
            thought-provoking. Keep us updated on the tech front!
          </p>
        </div>
      </article>
      <hr className="divider" />
      <article className="comments__list">
        <div className="comments__avatar profile profile--comments">
          <div className="logo__image" />
        </div>
        <div className="comment">
          <div className="comment__wrapper">
            <h3 className="comment__author">Noah Duncan</h3>
            <p className="comment__date">8/11/2023</p>
          </div>
          <p className="comment__content">
            Your insights into the future of AI are enlightening! The
            intersection of technology and ethics is particularly
            thought-provoking. Keep us updated on the tech front!
          </p>
        </div>
      </article>
      <hr className="divider" />
    </section>
  );
};

export default Comments;
