import uploadIcon from "../../assets/icons/upload.svg";

const UploadButton = () => {
  return (
    <button className="button">
      <img className="button__icon" src={uploadIcon} alt="Upload Icon" />
      <span className="button__text">UPLOAD</span>
    </button>
  );
};

export default UploadButton;
