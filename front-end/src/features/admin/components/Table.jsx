import React from "react";
import { useNavigate } from "react-router-dom";

// *API Services Imports*
import { patchName, patchType } from "../api_services/PatchProduct";
import DeleteProduct from "../api_services/DeleteProduct";

// *Design Imports*
import PostAddIcon from "@mui/icons-material/PostAdd";

const Table = (props) => {
  const navigate = useNavigate();
  const Delete = DeleteProduct();

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
                      onSubmit={() => patchName(props.name, props.sword_id)}
                    >
                      <input type="text" placeholder="Edit Name" />
                      <button type="submit">Edit</button>
                    </form>
                  </td>
                  <td>
                    {sword.type}{" "}
                    <form
                      //   onSubmit={
                      //     <PatchProduct type={props.type} id={props.sword_id} />
                      //   }
                      onSubmit={() => patchType(props.type, props.sword_id)}
                    >
                      <input type="text" placeholder="Edit Type" />
                      <button type="submit">Edit</button>
                    </form>
                  </td>
                  <td>
                    {sword.length}
                    <form
                    //   onSubmit={
                    //     <PatchProduct
                    //       length={props.length}
                    //       id={props.sword_id}
                    //     />
                    //   onSubmit={PatchProduct(props.length, props.sword_id)}
                    >
                      <input type="text" placeholder="Edit Length" />
                      <button type="submit">Edit</button>
                    </form>
                  </td>
                  <td>
                    {sword.mass}{" "}
                    <form
                    //   onSubmit={
                    //     <PatchProduct mass={props.mass} id={props.sword_id} />
                    //   }
                    //   onSubmit={PatchProduct(props.mass, props.sword_id)}
                    >
                      <input type="text" placeholder="Edit Mass" />
                      <button type="submit">Edit</button>
                    </form>
                  </td>
                  <td>
                    {sword.price}{" "}
                    <form
                    //   onSubmit={
                    //     <PatchProduct price={props.price} id={props.sword_id} />
                    //   }
                    //   onSubmit={PatchProduct(props.price, props.sword_id)}
                    >
                      <input type="text" placeholder="Edit Price" />
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
                    //   onSubmit={
                    //     <PatchProduct
                    //       image_url={props.image_url}
                    //       id={props.sword_id}
                    //     />
                    //   }
                    //   onSubmit={PatchProduct(props.image_url, props.sword_id)}
                    >
                      <input type="text" placeholder="Edit Image Url" />
                      <button type="submit">Edit</button>
                    </form>
                  </td>
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      marginLeft: "0.5rem",
                    }}
                  >
                    <button
                      style={{ padding: "0.5rem", borderRadius: "0.5rem" }}
                      onClick={() => {
                        Delete(sword.sword_id);
                        navigate("/successfulDelete");
                      }}
                    >
                      Delete
                    </button>
                  </div>
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
      <button style={{ padding: "0.5rem", borderRadius: "0.5rem" }}>
        Create New <PostAddIcon />
      </button>

      <form
      // onSubmit={
      //   <PatchProduct description={props.description} id={props.sword_id} />
      // }
      >
        <textarea cols="30" rows="10" placeholder="Edit Description" />
        <label htmlFor="Id">Specify The Id of Product to Edit</label>
        <input name="Id" type="text" placeholder="Id" />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default Table;
