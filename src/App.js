import "./App.css";
import Body from "./Components/Body/Body";
import Axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [ComingData, setComingData] = useState([]);
  const [Text, setText] = useState("");
  const [Desc, setDesc] = useState("");
  const [Type, setType] = useState("");
  const [Price, setPrice] = useState(Number);
  const [newText, setNewText] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newType, setNewType] = useState("");
  const [newPrice, setNewPrice] = useState(Number);

  // ======================================================================
  // ======================================================================
  // ============== Getting =================
  // Getting the data from the below URL of "https://product-admin-page-mern.herokuapp.com" and save in the hook of setComingData as an array
  const onGetting = () => {
    Axios.get("https://product-admin-page-mern.herokuapp.com/get").then((response) =>
      setComingData(response.data)
    );
  };

  useEffect(() => {
    onGetting();
  }, []);

  // ======================================================================
  // ======================================================================
  // ============== Adding =================
  // Getting the data from the hooks above and send them to index.js
  const onAdding = () => {
    Axios.post("https://product-admin-page-mern.herokuapp.com/add", {
      text: Text,
      desc: Desc,
      price: Price,
      type: Type,
    }).then(() => {
      onGetting();
    });
  };

  // ======================================================================
  // ======================================================================
  // ============== Updating =================
  // Detecing the item we want to remove by getting the box's ID (backend ID) and send it to the server.js
  // The data will come out again to be displayed by calling "onGetting()" function.
  const onUpdate = (paraID) => {
    Axios.post("https://product-admin-page-mern.herokuapp.com/update", {
      id: paraID,
      text: newText,
      desc: newDesc,
      price: newPrice,
      type: newType,
    }).then(() => onGetting());
  };

  // ======================================================================
  // ======================================================================
  // ============== Remving =================
  // Getting the ID of the elements by making the below function of onRemove() as a props to > [ <Body/> ] > [ <InputFields/> ]
  // Send this ID to > [ api ] > [ index.js ]
  const onRemove = (paraID) => {
    Axios.post("https://product-admin-page-mern.herokuapp.com/remove", {
      id: paraID,
    }).then(() => onGetting());
  };
  // ======================================================================
  // ======================================================================
  console.log(ComingData);
  return (
    <div className="App">
      <div className="container">
        <Body
          ComingData={ComingData}
          onAdding={onAdding}
          onUpdate={onUpdate}
          onRemove={onRemove}
          setText={setText}
          setDesc={setDesc}
          setPrice={setPrice}
          setType={setType}
          setNewText={setNewText}
          setNewDesc={setNewDesc}
          setNewPrice={setNewPrice}
          setNewType={setNewType}
        />
      </div>
    </div>
  );
}

export default App;
