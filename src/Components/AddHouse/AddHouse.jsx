import { useState } from "react";
import { nanoid } from "nanoid";
import axios from "axios";

export const AddHouse = () => {
  //   const [arr, setArr] = useState([]);
  const [formData, setFormData] = useState({
    id: nanoid(),
    name: "",
    owner: "",
    address: "",
    areacode: "",
    rent: "",
    type: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/houses`, formData).then(
      alert("Added House"),
      setFormData({
        name: "",
        ownerName: "",
        address: "",
        areaCode: "",
        rent: "",
        // type: "",
      })
    );
  };

  const handleCheckbox = (e) => {
    const { id, value } = e.target;
    const checked = e.target.checked;
    if (checked) {
      setFormData({ ...formData, [id]: value });
    }
  };
  return (
    <div className="addHouseContainer">
      <h3>Add House for a rent</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>name</label>
        <input
          type="text"
          className="name"
          value={formData.name}
          id={"name"}
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <label>ownerName</label>
        <input
          value={formData.ownerName}
          id={"ownerName"}
          type="text"
          className="ownerName"
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <label>address</label>
        <input
          value={formData.address}
          id={"address"}
          type="text"
          className="address"
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <label>areaCode</label>
        <input
          value={formData.areaCode}
          id={"areaCode"}
          type="text"
          className="areaCode"
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <label>rent</label>
        <input
          id={"rent"}
          value={formData.rent}
          type="text"
          className="rent"
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input
          id="type"
          onChange={(e) => handleCheckbox(e)}
          //   checked={""}
          value={"bachelor"}
          type="checkbox"
          className="bachelor"
        />
        <br />
        <label>married</label>
        <input
          id="type"
          onChange={(e) => handleCheckbox(e)}
          value={"married"}
          //   checked={""}
          type="checkbox"
          className="married"
        />
        <br />
        <label>image</label>
        <input value={""} type="image" className="image" required />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
