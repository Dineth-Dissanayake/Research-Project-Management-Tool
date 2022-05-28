import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import ToastContext from "../context/ToastContext";

const RegisterTopic = () => {
  const { user } = useContext(AuthContext);
  const { toast } = useContext(ToastContext);

  const [topicDetails, setTopicDetails] = useState({
    groupid: "",
    topic: "",
    field: "",
    des: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setTopicDetails({ ...topicDetails, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch(`http://localhost:8000/api/registertopic`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(topicDetails),
    });
    const result = await res.json();
    if (!result.error) {
      toast.success(`Created [${topicDetails.groupid}] contact`);

      setTopicDetails({ groupid: "", topic: "", field: "", des: "" });
    } else {
      toast.error(result.error);
    }
  };

  return (
    <>
      <h2>Create your contact</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="groupidInput" className="form-label mt-4">
            Name Of Person
          </label>
          <input
            type="text"
            className="form-control"
            id="groupidInput"
            name="groupid"
            value={topicDetails.groupid}
            onChange={handleInputChange}
            placeholder="John Doe"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="topicInput" className="form-label mt-4">
            topic Of Person
          </label>
          <input
            type="text"
            className="form-control"
            id="topicInput"
            name="topic"
            value={topicDetails.topic}
            onChange={handleInputChange}
            placeholder="WalkStreet 05, California"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fieldInput" className="form-label mt-4">
            field Of Person
          </label>
          <input
            type="field"
            className="form-control"
            id="fieldInput"
            name="field"
            value={topicDetails.field}
            onChange={handleInputChange}
            placeholder="johndoe@example.com"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="desInput" className="form-label mt-4">
            des Number Of Person
          </label>
          <input
            type="number"
            className="form-control"
            id="desInput"
            name="des"
            value={topicDetails.des}
            onChange={handleInputChange}
            placeholder="+977 987654321"
            required
          />
        </div>
        <input
          type="submit"
          value="Register Topic"
          className="btn btn-info my-2"
        />
      </form>
    </>
  );
};

export default RegisterTopic;
