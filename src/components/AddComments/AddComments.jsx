import "./AddComments.scss";
import commentIcon from "../../assets/icons/add_comment.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";

const AddComments = () => {
  return (
    <div className="add-comments">
      <div className="profile profile--comments">
        <img className="profile__image" src={avatar} alt="Profile Icon" />
      </div>
      <form className="form" id="addCommentsForm">
        <div className="form__control form__control--comment">
          <label htmlFor="comment" className="form__label">
            JOIN THE CONVERSATION
          </label>
          <textarea
            rows="1"
            name="comment"
            placeholder="Add a new comment"
            className="form__input form__input--comment"
          ></textarea>
        </div>
        <button className="button button--upload">
          <img className="button__icon" src={commentIcon} alt="Comment Icon" />
          <span className="button__text">COMMENT</span>
        </button>
      </form>
    </div>
  );
};

export default AddComments;
