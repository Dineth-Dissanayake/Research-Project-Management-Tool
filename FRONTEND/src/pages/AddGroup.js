import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import ToastContext from "../context/ToastContext";

const AddGroup = () => {
  const { user } = useContext(AuthContext);
  const { toast } = useContext(ToastContext);

  const [groupDetails, setGroupDetails] = useState({
    groupid: "",
    mem1: "",
    mem2: "",
    mem3: "",
    mem4: "",
  });
  const navigate = useNavigate();
  //dont change name here
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    //dont change name here
    setGroupDetails({ ...groupDetails, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch(`http://localhost:8000/api/addgroup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(groupDetails),
    });
    const result = await res.json();
    if (!result.error) {
      toast.success(`Created [${groupDetails.groupid}] group`);

      setGroupDetails({ groupid: "", mem1: "", mem2: "", mem3: "", mem4: "" });
    } else {
      toast.error(result.error);
    }
  };

  return (
    <>
    <div class="container2">
  <div class="row">
    <div class="col1">
      <h2>Create your topic</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="groupidInput" className="form-label mt-4">
            Group ID
          </label>
          <input
            type="text"
            className="form-control"
            id="groupidInput"
            name="groupid"
            value={groupDetails.groupid}
            onChange={handleInputChange}
            placeholder="John Doe"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mem1Input" className="form-label mt-4">
            mem1 Of Person
          </label>
          <input
            type="text"
            className="form-control"
            id="mem1Input"
            name="mem1"
            value={groupDetails.mem1}
            onChange={handleInputChange}
            placeholder="WalkStreet 05, California"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mem2Input" className="form-label mt-4">
            mem2 Of Person
          </label>
          <input
            type="text"
            className="form-control"
            id="mem2Input"
            name="mem2"
            value={groupDetails.mem2}
            onChange={handleInputChange}
            placeholder="WalkStreet 05, California"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mem3Input" className="form-label mt-4">
            mem3 Of Person
          </label>
          <input
            type="text"
            className="form-control"
            id="mem3Input"
            name="mem3"
            value={groupDetails.mem3}
            onChange={handleInputChange}
            placeholder="WalkStreet 05, California"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mem4Input" className="form-label mt-4">
            mem4 Of Person
          </label>
          <input
            type="text"
            className="form-control"
            id="mem4Input"
            name="mem4"
            value={groupDetails.mem4}
            onChange={handleInputChange}
            placeholder="WalkStreet 05, California"
            required
          />
        </div>
        
        <input
          type="submit"
          value="Add topic"
          className="btn1 btn-info my-2"
        />
      </form></div>
      <div class="col">
      
      <img className="img1" src="/grp.png"/>
    </div></div></div>
      
      
    </>
  );
};

export default AddGroup;
