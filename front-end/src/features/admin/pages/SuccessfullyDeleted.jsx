import { Link } from "react-router-dom";

// TODO: Need to make them not allowed to enter this page when they didn't enter password.

const SuccessfullyDeleted = () => {
  return (
    <div>
      <p>Successfully Deleted</p>
      <Link to="/admin">View</Link>
    </div>
  );
};

export default SuccessfullyDeleted;
