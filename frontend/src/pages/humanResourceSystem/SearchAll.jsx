import React from "react";
import BasicDatePicker from "./DateInput";

export default function SearchAll() {
  return (
    <>
      <div
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
            style={{
              width: "100px",
              marginRight: "10px",
              fontSize: "25px",
              textAlign: "right",
            }}
          >
            Date:
          </label>
          <BasicDatePicker />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <button style={{ fontSize: "25px", marginLeft: "110px" }}>
            Search
          </button>
        </div>
      </div>
    </>
  );
}
