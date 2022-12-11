import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./passwordModal.css";

const PasswordModal = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef("");

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
            <div className="modal">
              <div className="modalHeader">
                <h3 className="heading">Required Access</h3>
              </div>
              <button className="closeBtn" onClick={() => setShow(false)}>
                Close
              </button>
              <form onSubmit={() => handleSubmit()}>
                <input
                  name="password"
                  type="text"
                  autoComplete="off"
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
