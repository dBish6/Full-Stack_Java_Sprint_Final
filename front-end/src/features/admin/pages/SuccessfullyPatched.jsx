import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const SuccessfullyPatched = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.sessionStorage.getItem("admin")) {
      navigate("/home");
      setTimeout(() => {
        alert("You are not an Admin user.");
      }, 1000);
    }
  }, [navigate]);

  return (
    <div>
      <p>Successful Edit</p>
      <Link to="/admin">View</Link>
    </div>
  );
};

export default SuccessfullyPatched;
