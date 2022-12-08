import React from "react";
import { Link } from "react-router-dom";

const Administration = () => {
  return (
    <>
      <Link to="/home">Back</Link>
      <h1>Admin</h1>
      <table>
        <thead>
          <tr>
            <th>sword_id</th>
            <th>name</th>
            <th>type</th>
            <th>length</th>
            <th>mass</th>
            <th>price</th>
            <th>description</th>
            <th>image</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Administration;
