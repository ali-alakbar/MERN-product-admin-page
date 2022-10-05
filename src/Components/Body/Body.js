import React, { useState } from "react";
import InputFields from "../InputFields/InputFields";
import "./style/Body.css";

const Body = (props) => {
  const [inEditMode, setInEditMode] = useState({
    status: false,
    id: null,
  });

  // ========================================================
  // ============== Start The Original Form ==============
  // ========================================================

  const originalForm = (item, id) => {
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{item.itemName}</td>
        <td>{item.desc}</td>
        <td>{item.price}</td>
        <td>{item.type}</td>
        <td>
          <button
            onClick={() =>
              onEdit({
                id: id,
              })
            }
            className="editing"
          >
            Edit
          </button>
        </td>
        <td>
          <button onClick={() => props.onRemove(item._id)} className="deleting">
            Delete
          </button>
        </td>
      </tr>
    );
  };
  // ========================================================
  // ============== End The Original Form ==============
  // ========================================================

  // ========================================================
  // ============== Start The New Form ==============
  // ========================================================

  const newForm = (item, id) => {
    return (
      <tr className="newForm" key={id}>
        <td>{id}</td>
        <td>
          <input
            onChange={(e) => props.setNewText(e.target.value)}
            placeholder="text"
            className="newFormInput"
            type="text"
          />
        </td>
        <td>
          <input
            onChange={(e) => props.setNewDesc(e.target.value)}
            placeholder="description"
            className="newFormInput"
            type="text"
          />
        </td>
        <td>
          <input
            onChange={(e) => props.setNewPrice(e.target.value)}
            placeholder="price"
            className="newFormInput"
            type="number"
          />
        </td>
        <td>
          <input
            onChange={(e) => props.setNewType(e.target.value)}
            placeholder="category"
            type="text"
            className="newFormInput"
          />
        </td>
        <td>
          <button
            onClick={() => {
              const newFormInputs = Array.from(
                document.querySelectorAll(".newFormInput")
              );
              for (let i = 0; i < newFormInputs.length; i++) {
                if (newFormInputs[i].value.trim().length !== 0) {
                  alert("Fill the fields please.");
                  break;
                } else {
                  props.onUpdate(
                    item._id,
                    item.text,
                    item.desc,
                    item.price,
                    item.type
                  );
                  onEdit({ id: id });
                  onClose();
                }
              }
            }}
          >
            Send
          </button>
        </td>
        <td>
          <button onClick={() => onClose()}>Close</button>
        </td>
      </tr>
    );
  };
  // ========================================================
  // ============== End The New Form ==============
  // ========================================================

  const onEdit = ({ id }) => {
    setInEditMode({
      status: true,
      id: id,
    });
  };
  const onClose = () => {
    setInEditMode({
      status: false,

      rowKey: null,
    });
  };

  return (
    <section className="section landing-section">
      <div className="intro-content">
        <h1>Products</h1>
        <p>Add new items</p>
      </div>
      <div className="content">
        <div className="adding-bar">
          {/* =============================================================== */}
          <InputFields
            setText={props.setText}
            setDesc={props.setDesc}
            setPrice={props.setPrice}
            setType={props.setType}
            onAdding={props.onAdding}
          />
          {/* ======================================================================== */}
        </div>
        <table>
          {/* =========================== */}
          {/* =========================== */}
          <thead>
            <tr className="title">
              <th>No.</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price(USD)</th>
              <th>Category</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {/* =========================== */}
          {/* =========================== */}
          <tbody>
            {props.ComingData.map((item, id) => {
              return inEditMode.status === true && inEditMode.id === id
                ? newForm(item, id)
                : originalForm(item, id);
            })}
          </tbody>
          {/* =========================== */}
          {/* =========================== */}
        </table>
      </div>
    </section>
  );
};

export default Body;
