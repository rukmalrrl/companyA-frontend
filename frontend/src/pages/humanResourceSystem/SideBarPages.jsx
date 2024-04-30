import React, { useState } from "react";
import CardComp from "../../components/sideComps/CardComp";
import TableComp from "../../components/sideComps/TableComp";
import avatar from "../../assets/avatar.svg";
import Button1 from "./Button1";
import SearchOne from "./SearchOne.jsx";
import { Link, Navigate, useNavigate } from "react-router-dom";
import BasicDatePicker from "./DateInput";
import SearchAll from "./SearchAll.jsx";
import Button2 from "./Button2";
import EmployeeDetailForm from "./EmployeeDetailForm";
import DashboardCards from "./DashboardCards";
import * as reqSend from "../../global/reqSender.jsx";
import UpdateDetailsForm from "./UpdateDetailsForm.jsx";
import { useEffect } from "react";

export function ViewStocks(props) {
  const tableData = {
    name: "Sample Table",
    heading: ["Column 1", "Column 2", "Column 3"],
    div: [
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
      count: 125,
      name: "All Employees",
    },
    {
      image: avatar,
      altText: "Avatar 2",
      count: 109,
      name: "Today Attendance",
    },
  ];

  return (
    <>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Dashboard</h1>
          </div>

          <DashboardCards data={dataList} />
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
      <div>
        <>
          <Button1 />
        </>
      </div>
    </>
  );
}

export function MarkAttendance(props) {
  const [val1, setVal1] = useState("");
  const [signInData, setSignInData] = useState(null);

  const change1 = (event) => {
    setVal1(event.target.value);
  };

  const signInClick = () => {
    reqSend.defaultReq(
      "POST",
      `Attendance/SignIn/${val1}`,
      {},
      (response) => {
        if (response.status === 200 && response.data) {
          setSignInData(response.data);
          console.log("Attendance marked");
          var element = document.getElementById("attendance");
          var stringToPass = "Sign In Successful!";
          element.innerText = stringToPass;
          // to refresh the page
          setTimeout(function () {
            location.reload();
          }, 1000);
        } else {
          window.location.reload();
          console.error("Invalid response format:", response);
        }
      },
      (error) => {
        console.error("API request failed:", error);
        window.location.reload();
      }
    );
  };

  const handleSubmit1 = (event) => {
    event.preventDefault();
    signInClick();
  };

  const [val2, setVal2] = useState("");
  const [signOutData, setSignOutData] = useState(null);

  const change2 = (event) => {
    setVal2(event.target.value);
  };

  const signOutClick = () => {
    reqSend.defaultReq(
      "POST",
      `Attendance/SignOut/${val2}`,
      {},
      (response) => {
        if (response.status === 200 && response.data) {
          setSignOutData(response.data);
          console.log("Attendance marked");
          var element = document.getElementById("attendance");
          var stringToPass = "Sign Out Successful!";
          element.innerText = stringToPass;
          // to refresh the page
          setTimeout(function () {
            location.reload();
          }, 1000);
        } else {
          window.location.reload();
          console.error("Invalid response format:", response);
        }
      },
      (error) => {
        console.error("API request failed:", error);
        window.location.reload();
      }
    );
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();
    signOutClick();
  };

  return (
    <>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Mark Attendance</h1>
          </div>
        </div>
      </main>
      <div>
        <div class="signin-container">
          <div class="signin-box">
            <h2>Sign In</h2>
            <div>
              <label class="input-label" for="id">
                ID:
              </label>
              <input
                class="input-field"
                type="text"
                id="id"
                name="id"
                onChange={change1}
              />
            </div>
            <button class="signin-button" onClick={handleSubmit1}>
              Enter
            </button>
          </div>
          <div class="signin-box">
            <h2>Sign Out</h2>
            <div>
              <label class="input-label" for="id2">
                ID:
              </label>
              <input
                class="input-field"
                type="text"
                id="id2"
                name="id2"
                onChange={change2}
              />
            </div>
            <button class="signin-button" onClick={handleSubmit2}>
              Enter
            </button>
          </div>
        </div>
        <h3
          id="attendance"
          style={{ textAlign: "center", marginTop: "40px" }}
        ></h3>
      </div>
    </>
  );
}

export function WorkTime(props) {
  const [val, setVal] = useState("");
  const [workHoursData, setWorkHoursData] = useState([]);
  const [otHoursData, setOtHoursData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalWorkedTime, setTotalWorkedTime] = useState("");

  const change1 = (event) => {
    setVal(event.target.value);
  };

  const change2 = (event) => {
    setStartDate(event.target.value);
  };

  const change3 = (event) => {
    setEndDate(event.target.value);
  };

  const formatDate = (dateString) => {
    const formattedDate = new Date(dateString).toISOString().split("T")[0];
    return formattedDate;
  };

  const calculateTotalWorkedTime = (hoursData) => {
    let totalHours = 0;
    let totalMinutes = 0;

    hoursData.forEach((item) => {
      totalHours += parseInt(item.hours);
      totalMinutes += parseInt(item.minutes);
    });

    // Convert minutes to hours if greater than 60
    totalHours += Math.floor(totalMinutes / 60);
    totalMinutes %= 60;

    return `Total worked time: ${totalHours} hours ${totalMinutes} minutes`;
  };

  const searchClick = async () => {
    try {
      const formattedStartDate = formatDate(startDate);
      const formattedEndDate = formatDate(endDate);

      // Fetch work hours data
      reqSend.defaultReq(
        "GET",
        `PayRoll/WorkTime/WorkHours?employeeId=${val}&startDate=${formattedStartDate}&endDate=${formattedEndDate}`,
        {},
        async (workHoursResponse) => {
          if (workHoursResponse.status === 200 && workHoursResponse.data) {
            const workHoursData = workHoursResponse.data;
            console.log(workHoursResponse); //
            setWorkHoursData(workHoursData);

            // Calculate total worked time
            const totalWorkedHours = calculateTotalWorkedTime(workHoursData);
            setTotalWorkedTime(totalWorkedHours);
          } else {
            console.error("Failed to fetch work hours data");
          }
        },
        (error) => {
          console.error("Error fetching work hours data:", error);
        }
      );

      // Fetch OT hours data
      reqSend.defaultReq(
        "GET",
        `PayRoll/WorkTime/WorkOtHours?employeeId=${val}&startDate=${formattedStartDate}&endDate=${formattedEndDate}`,
        {},
        (otHoursResponse) => {
          if (otHoursResponse.status === 200 && otHoursResponse.data) {
            const otHoursData = otHoursResponse.data;
            setOtHoursData(otHoursData);
          } else {
            console.error("Failed to fetch OT hours data");
          }
        },
        (error) => {
          console.error("Error fetching OT hours data:", error);
        }
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchClick();
  };

  return (
    <>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Work Time</h1>
          </div>
        </div>
      </main>
      <div>
        <>
          <form style={{ alignItems: "center" }} onSubmit={handleSubmit}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <label
                style={{
                  width: "100px",
                  marginRight: "10px",
                  fontSize: "20px",
                }}
              >
                ID:
              </label>
              <input
                type="text"
                placeholder="Enter ID"
                value={val}
                onChange={change1}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <label
                style={{
                  width: "100px",
                  marginRight: "10px",
                  fontSize: "20px",
                }}
              >
                Start Date:
              </label>
              <input type="date" value={startDate} onChange={change2} />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <label
                style={{
                  width: "100px",
                  marginRight: "10px",
                  fontSize: "20px",
                }}
              >
                End Date:
              </label>
              <input type="date" value={endDate} onChange={change3} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <button style={{ fontSize: "20px" }} onClick={searchClick}>
                Search
              </button>
            </div>
          </form>
        </>
      </div>
      <footer>{totalWorkedTime && <p>{totalWorkedTime}</p>}</footer>
    </>
  );
}

export function Leave(props) {
  const [val, setVal] = useState("");
  const [employeeData, setEmployeeData] = useState(null);
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");

  const change1 = (event) => {
    setVal(event.target.value);
  };

  const change2 = (event) => {
    setYear(event.target.value);
  };

  const change3 = (event) => {
    setMonth(event.target.value);
  };

  const searchClick = () => {
    reqSend.defaultReq(
      "GET",
      `Leave/Balance?employeeId=${val}&year=${year}&month=${month}`,
      {},
      (response) => {
        if (response.status === 200 && response.data) {
          setEmployeeData(response.data);
        } else {
          console.error("Invalid response format:", response);
        }
      },
      (error) => {
        console.error("API request failed:", error);
      }
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    searchClick();
  };

  return (
    <>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Leave</h1>
          </div>
        </div>
      </main>
      <div>
        <>
          <form onSubmit={handleSubmit}>
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
                <input
                  type="text"
                  placeholder="Enter ID"
                  id="id"
                  name="id"
                  onChange={change1}
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
                  Year:
                </label>
                <input
                  type="text"
                  placeholder="Enter Year"
                  id="year"
                  name="year"
                  onChange={change2}
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
                  onChange={change3}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <button
                  style={{
                    fontSize: "20px",
                    marginLeft: "110px",
                    padding: "10px 20px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                    transition: "0.3s",
                  }}
                  onClick={searchClick}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#45a049";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#4CAF50";
                  }}
                >
                  Search
                </button>
              </div>
            </div>
          </form>
          {/* Display leave balance if employeeData is defined */}
          {employeeData && (
            <div style={{ textAlign: "center" }}>
              <p>Leave Balance is {employeeData}</p>
            </div>
          )}
        </>
      </div>
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
      <h5>.</h5>
      <EmployeeDetailForm />
    </>
  );
}
export function UpdateEmployee(props) {
  return (
    <>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Update Employee</h1>
          </div>
        </div>
      </main>
      <div>
        <>
          <br />
          <br />
          <UpdateDetailsForm />
        </>
      </div>
    </>
  );
}

//Delete employee from database using the given employeeID.
export function DeleteEmployee(props) {
  const [val, setVal] = useState("");
  const [employeeData, setEmployeeData] = useState(null); // Initialize state as null

  const change = (event) => {
    setVal(event.target.value);
  };

  const searchClick = () => {
    reqSend.defaultReq(
      "GET",
      `Employee/${val}`,
      {},
      (response) => {
        if (response.status === 200 && response.data) {
          setEmployeeData(response.data);
        } else {
          console.error("Invalid response format:", response);
        }
      },
      (error) => {
        console.error("API request failed:", error);
      }
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchClick();
  };

  const deleteClick = () => {
    reqSend.defaultReq(
      "DELETE",
      `Employee/${val}`,
      {},
      (response) => {
        if (response.status === 200 && response.data) {
          console.log(response.data);

          window.location.reload();
        } else {
          console.error("Invalid response format:", response);
        }
      },
      (error) => {
        console.error("API request failed:", error);
      }
    );
  };

  const deleteSubmit = (event) => {
    event.preventDefault();
    deleteClick();
  };

  return (
    <>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Delete</h1>
          </div>
        </div>
      </main>
      <div>
        <form
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
              onChange={change}
            />
          </div>
          <div>
            <button
              type="submit"
              style={{ fontSize: "25px" }}
              onClick={handleSubmit}
            >
              Search
            </button>
            <button
              type="submit"
              style={{ fontSize: "25px" }}
              onClick={deleteSubmit}
            >
              Delete
            </button>
          </div>
        </form>

        {employeeData && (
          <div style={{ marginTop: "20px" }}>
            <h2>Employee Details</h2>
            <form class="form-detail">
              {Object.entries(employeeData).map(([key, value]) => (
                <div key={key} style={{ marginBottom: "10px" }}>
                  <label htmlFor={key}>{key} :</label>
                  <input
                    type="text"
                    id={key}
                    name={key}
                    value={value}
                    readOnly
                  />
                </div>
              ))}
            </form>
          </div>
        )}
      </div>
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
      <div>
        <>
          <Button1 />
          <br />
          <br />
          <SearchAll />
        </>
      </div>
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
      <div>
        <>
          <Button1 />
          <SearchOne />
        </>
      </div>
    </>
  );
}

export function Search(props) {
  const [val, setVal] = useState("");
  const [employeeData, setEmployeeData] = useState(null); // Initialize state as null

  const change = (event) => {
    setVal(event.target.value);
  };

  const searchClick = () => {
    reqSend.defaultReq(
      "GET",
      `Employee/${val}`,
      {},
      (response) => {
        if (response.status === 200 && response.data) {
          setEmployeeData(response.data);
        } else {
          window.location.reload();
          console.error("Invalid response format:", response);
        }
      },
      (error) => {
        console.error("API request failed:", error);
        window.location.reload();
      }
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchClick();
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
              onChange={change}
            />
          </div>
          <button
            type="submit"
            style={{
              fontSize: "25px",
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
              transition: "0.3s",
            }}
            onClick={searchClick}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#45a049";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#4CAF50";
            }}
          >
            Search
          </button>
        </form>

        {employeeData && (
          <div style={{ marginTop: "20px" }}>
            <h2>Employee Details</h2>
            <form class="form-detail">
              {Object.entries(employeeData).map(([key, value]) => (
                <div key={key} style={{ marginBottom: "10px" }}>
                  <label htmlFor={key}>{key} :</label>
                  <input
                    type="text"
                    id={key}
                    name={key}
                    value={value}
                    readOnly
                  />
                </div>
              ))}
            </form>
          </div>
        )}
      </div>
    </>
  );
}
