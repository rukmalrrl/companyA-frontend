import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function SearchOne() {
  const [data, setDate] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => setDate(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <br />
      <br />
      <div>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <label
              htmlFor="searchInput"
              style={{ marginRight: "100px", fontSize: "24px" }}
            >
              ID
            </label>
            <input
              type="text"
              id="searchInput"
              name="searchInput"
              placeholder="Enter ID"
            />
          </div>
          <button type="submit" style={{ fontSize: "25px" }}>
            Search
          </button>
        </form>
      </div>
    </>
  );
}
