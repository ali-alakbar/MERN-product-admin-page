import React from "react";

const InputFields = (props) => {
  return (
    <div className="adding-bar">
      {/* =============================================================== */}
      <div className="inputs">
        <div>
          <label>Text:</label>
          <input
            onChange={(e) => props.setText(e.target.value)}
            type="text"
            required
            placeholder="Write Something ..."
            id="myInput"
          />
        </div>
        {/* =============================================================== */}
        <div>
          <label>Description: </label>
          <input
            onChange={(e) => props.setDesc(e.target.value)}
            type="text"
            required
            placeholder="Write Something ..."
            id="myInput"
          />
        </div>
        {/* =============================================================== */}
        <div>
          <label>Price(USD): </label>
          <input
            onChange={(e) => props.setPrice(e.target.value)}
            type="Number"
            required
            placeholder="Write Something ..."
            id="myInput"
          />
        </div>
        {/* =============================================================== */}

        <div>
          <label>Type: </label>
          <input
            onChange={(e) => props.setType(e.target.value)}
            type="text"
            required
            placeholder="Write Something ..."
            id="myInput"
          />
        </div>
      </div>
      {/* =============================================================== */}
      <button
        onClick={() => {
          const myInputs = document.querySelectorAll("#myInput");
          props.onAdding();
          for (let i = 0; i < myInputs.length; i++) {
            myInputs[i].value = "";
          }
          console.log("Data has been sent!");
        }}
      >
        Send
      </button>
      {/* ======================================================================== */}
    </div>
  );
};

export default InputFields;
