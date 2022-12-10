import React, { useState } from "react";

import "./passwordModal.css";

const PasswordModal = () => {
  const [show, setShow] = useState(false);

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
              <form onSubmit>
                <input name="password" type="text" />
                <label htmlFor="password">Admin Password</label>
                <div className="btnContainer">
                  <button onClick={() => setShow(false)}>Submit</button>
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
