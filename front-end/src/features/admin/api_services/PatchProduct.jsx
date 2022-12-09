import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Edits a new sword from the database.

export const patchName = async (name, sword_id) => {
  //   const navigate = useNavigate();
  try {
    const res = await axios({
      method: "PATCH",
      url: `http://localhost:8080/api/swords/${sword_id}`,
      data: {
        name: name,
      },
    });
    console.log(res.data);
  } catch (error) {
    console.error(error);
    // navigate("/error500");
  }
};

export const patchType = async (type, sword_id) => {
  //   const navigate = useNavigate();
  try {
    const res = await axios({
      method: "PATCH",
      url: `http://localhost:8080/api/swords/${sword_id}`,
      data: {
        type: type,
      },
    });
    console.log(res.data);
  } catch (error) {
    console.error(error);
    // navigate("/error500");
  }
};
