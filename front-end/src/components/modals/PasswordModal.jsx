import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./passwordModal.css";

const PasswordModal = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef("");

  useEffect(() => {
    show
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [show]);

  const handleSubmit = () => {
    inputRef.current.value === "admin123" && navigate("/admin");
  };

  return (
    <>
      <button className="adminBtn" onClick={() => setShow(true)}>
        Administration
      </button>
      {show && (
        <>
          <div className="darkBG" onClick={() => setShow(false)} />
          <div className="centered">
            <div className="passwordModal">
              <div className="modalHeader">
                <h3>Required Access</h3>
              </div>
              <button className="closeBtn" onClick={() => setShow(false)}>
                Close
              </button>
              <form onSubmit={() => handleSubmit()}>
                <input
                  name="password"
                  type="text"
                  autoComplete="off"
                  placeholder=" "
                  ref={inputRef}
                />
                <label htmlFor="password">Admin Password</label>
                <div className="btnContainer">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PasswordModal;
