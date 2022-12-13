import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

// *API Services Imports*
// import { patchName, patchType } from "../api_services/PatchProduct";
import PatchProduct from "../api_services/PatchProduct";
import DeleteProduct from "../api_services/DeleteProduct";

// *Design Imports*
import PostAddIcon from "@mui/icons-material/PostAdd";

// *Component Imports*
import Create from "../pages/Create";

const Table = (props) => {
  const navigate = useNavigate();
  const idRef = useRef(null);
  const { PATCHname, PATCHtype } = PatchProduct();
  const DELETE = DeleteProduct();

  return (
    <div
      style={{
        border: "1px solid #363636",
        padding: "0.5rem",
        fontSize: "14px",
      }}
    >
      <table>
        <thead style={{ fontSize: "16px" }}>
          <tr>
            <th>sword_id</th>
            <th>name</th>
            <th>type</th>
            <th>length</th>
            <th>mass</th>
            <th>price</th>
            <th>description</th>
            <th>image_url</th>
          </tr>
        </thead>
        <tbody>
          {props.product &&
            props.product.map((sword) => {
              return (
                <tr
                  key={sword.sword_id}
                  style={{ borderTop: "8px solid", borderBottom: "8px" }}
                >
                  <td>{sword.sword_id}</td>
                  <td>
                    {sword.name}{" "}
                    <form
                      //   onSubmit={
                      //     <PatchProduct name={props.name} id={props.sword_id} />
                      //   }
                      // onSubmit={() =>
                      //   patchName(
                      //     props.name,
                      //     props.type,
                      //     props.length,
                      //     props.mass,
                      //     props.price,
                      //     props.description,
                      //     props.image_url,
                      //     props.sword_id
                      //   )
                      // }
                      onSubmit={() => PATCHname(props.name, props.sword_id)}
                    >
                      <input type="text" placeholder="Edit Name" />
                      <button type="submit">Edit</button>
                    </form>
                  </td>
                  <td>
                    {sword.type}{" "}
                    <form
                      onSubmit={() => PATCHtype(props.type, props.sword_id)}
                    >
                      <input type="text" placeholder="Edit Type" />
                      <button type="submit">Edit</button>
                    </form>
                  </td>
                  <td>
                    {sword.length}
                    <form
                    //   onSubmit={PatchProduct(props.length, props.sword_id)}
                    >
                      <input type="number" placeholder="Edit Length" />
                      <button type="submit">Edit</button>
                    </form>
                  </td>
                  <td>
                    {sword.mass}{" "}
                    <form
                    //   onSubmit={PatchProduct(props.mass, props.sword_id)}
                    >
                      <input type="number" placeholder="Edit Mass" />
                      <button type="submit">Edit</button>
                    </form>
                  </td>
                  <td>
                    {sword.price}{" "}
                    <form
                    //   onSubmit={PatchProduct(props.price, props.sword_id)}
                    >
                      <input type="number" placeholder="Edit Price" />
                      <button type="submit">Edit</button>
                    </form>
                  </td>
                  <td
                    style={{
                      maxWidth: "24rem",
                      whiteSpace: "nowrap",
                      overflow: "scroll",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {sword.description}
                  </td>
                  <td>
                    {sword.image_url}{" "}
                    <form
                    //   onSubmit={PatchProduct(props.image_url, props.sword_id)}
                    >
                      <input type="text" placeholder="Edit Image Url" />
                      <button type="submit">Edit</button>
                    </form>
                  </td>
                  <td
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      marginLeft: "0.5rem",
                    }}
                  >
                    <button
                      style={{ padding: "0.5rem", borderRadius: "0.5rem" }}
                      onClick={() => {
                        DELETE(sword.sword_id);
                        navigate("/admin/successfulDelete");
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
        <tfoot>
          <tr>
            <th
              scope="row"
              colSpan="2"
              style={{ textDeclaration: "underline" }}
            >
              Total Products:
            </th>
            <td colSpan="2">{props.product.length}</td>
          </tr>
        </tfoot>
      </table>
      <button
        style={{ padding: "0.5rem", borderRadius: "0.5rem" }}
        onClick={() => navigate("/admin/create")}
      >
        Create New <PostAddIcon />
      </button>

      <form
      // onSubmit={
      //   <PatchProduct description={props.description} id={props.sword_id} />
      // }
      >
        <textarea cols="30" rows="10" placeholder="Edit Description" />
        <label htmlFor="Id">Specify The Id of Product to Edit</label>
        <input name="Id" type="text" placeholder="Id" ref={idRef} />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default Table;
