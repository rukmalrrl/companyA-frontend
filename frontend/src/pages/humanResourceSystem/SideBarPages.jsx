import React, { useState } from "react";
import CardComp from "../../components/sideComps/CardComp";
import TableComp from "../../components/sideComps/TableComp";
import avatar from "../../assets/avatar.svg";
import Button1 from "./Button1";
import SearchOne from "./SearchOne";
import { Link, Navigate, useNavigate } from "react-router-dom";
import BasicDatePicker from "./DateInput";
import SearchAll from "./SearchAll";
import Button2 from "./Button2";
import EmployeeDetailForm from "./EmployeeDetailForm";

export function ViewStocks(props) {
  const tableData = {
    name: "Sample Table",
    heading: ["Column 1", "Column 2", "Column 3"],
    body: [
      <tr key="row1">
        <td>Data 1</td>
        <td>Data 2</td>
        <td>Data 3</td>
      </tr>,
      <tr key="row2">
        <td>Data 4</td>
        <td>Data 5</td>
        <td>Data 6</td>
      </tr>,
      // Add more rows as needed
    ],
  };

  return (
    <>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>View Stocks</h1>
          </div>

          <TableComp data={tableData} />
        </div>
      </main>
    </>
  );
}

export function DashboardView(props) {
  const dataList = [
    {
      image: avatar,
      altText: "Avatar 1",
      count: 5,
      name: "John Doe",
    },
    {
      image: avatar,
      altText: "Avatar 2",
      count: 3,
      name: "Jane Smith",
    },
    {
      image: avatar,
      altText: "Avatar 3",
      count: 7,
      name: "Bob Johnson",
    },
  ];

  return (
    <>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Dashboard</h1>
          </div>

          <CardComp data={dataList} />
        </div>
      </main>
    </>
  );
}

export function Employee(props) {
  return (
    <>
      <Button2 />
    </>
  );
}

export function Attendance(props) {
  return (
    <>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Attendance</h1>
          </div>
        </div>
      </main>
      <body>
        <>
          <Button1 />
        </>
      </body>
    </>
  );
}

export function MarkAttendance(props) {
  return (
    <>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Mark Attendance</h1>
          </div>
        </div>
      </main>
    </>
  );
}

export function WorkTime(props) {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Work Time</h1>
          </div>
        </div>
      </main>
      <body>
        <>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label
              style={{
                width: "200px",
                marginRight: "80px",
                fontSize: "20px",
                textAlign: "right",
              }}
            >
              ID :
            </label>
            <input type="text" placeholder="Enter ID" id="id" name="id" />
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <label
              style={{
                width: "200px",
                marginRight: "80px",
                fontSize: "20px",
                textAlign: "right",
              }}
            >
              Start Date :
            </label>
            <BasicDatePicker />
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <label
              style={{
                width: "200px",
                marginRight: "80px",
                fontSize: "20px",
                textAlign: "right",
              }}
            >
              End Date :
            </label>
            <BasicDatePicker />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <button style={{ fontSize: "20px" }}>Search</button>
          </div>
        </>
      </body>
    </>
  );
}

export function Leave(props) {
  return (
    <>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Leave</h1>
          </div>
        </div>
      </main>
      <body>
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
                  marginRight: "40px",
                  fontSize: "20px",
                  textAlign: "right",
                }}
              >
                ID:
              </label>
              <input type="text" placeholder="Enter ID" id="id" name="id" />
            </div>
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
                  marginRight: "40px",
                  fontSize: "20px",
                  textAlign: "right",
                }}
              >
                Year:
              </label>
              <input
                type="text"
                placeholder="Enter Year"
                id="year"
                name="year"
              />
            </div>
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
                  marginRight: "40px",
                  fontSize: "20px",
                  textAlign: "right",
                }}
              >
                Month:
              </label>
              <input
                type="text"
                placeholder="Enter Month"
                id="month"
                name="month"
              />
            </div>
            {/* Search button aligned with other elements */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <button style={{ fontSize: "20px", marginLeft: "110px" }}>
                Search
              </button>
            </div>
          </div>
        </>
      </body>
    </>
  );
}

export function Search(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    // You can access form data using event.target
  };

  return (
    <>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Search</h1>
          </div>
        </div>
      </main>
      <body>
        <>
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
        </>
      </body>
    </>
  );
}

export function AddEmployee(props) {
  return (
    <>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Add Employee</h1>
          </div>
        </div>
      </main>
      <EmployeeDetailForm />
    </>
  );
}
export function UpdateEmployee(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    // You can access form data using event.target
  };
  return (
    <>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Update Employee</h1>
          </div>
        </div>
      </main>
      <body>
        <>
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
          <br />
          <br />
          <EmployeeDetailForm />
        </>
      </body>
    </>
  );
}
export function DeleteEmployee(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    // You can access form data using event.target
  };
  return (
    <>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Delete Employee</h1>
          </div>
        </div>
      </main>
      <body>
        <>
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
            <div>
              <button type="submit" style={{ fontSize: "25px" }}>
                Search
              </button>
              <label> </label>
              <button type="submit" style={{ fontSize: "25px" }}>
                Delete
              </button>
            </div>
          </form>
        </>
      </body>
    </>
  );
}

export function SearchAllEmployee(props) {
  return (
    <>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>All Employee</h1>
          </div>
        </div>
      </main>
      <body>
        <>
          <Button1 />
          <br />
          <br />
          <SearchAll />
        </>
      </body>
    </>
  );
}
export function SearchOneEmployee(props) {
  return (
    <>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>One Employee</h1>
          </div>
        </div>
      </main>
      <body>
        <>
          <Button1 />
          <SearchOne />
        </>
      </body>
    </>
  );
}
