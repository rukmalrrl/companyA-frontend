import React, { useState } from "react";
import CardComp from "../../components/sideComps/CardComp";
import TableComp from "../../components/sideComps/TableComp";
import avatar from "../../assets/avatar.svg";
import "./HRStyles.css";
import Button1 from "./Button1";
import SearchOne from "./SearchOne";
import { Link, Navigate, useNavigate } from "react-router-dom";
import BasicDatePicker from "./DateInput";

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
  const buttonStyle = {
    width: "210px",
    height: "210px",
    position: "relative",
    border: "1px solid #000",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  };

  const textStyle = {
    position: "absolute",
    bottom: "60px",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "34px",
    fontFamily: "Baskerville Old Face",
  };
  return (
    <>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Employee</h1>
          </div>
        </div>
      </main>
      <body>
        <>
          <Link to="/humanResource-management/search-employee">
            <button style={buttonStyle}>
              <div
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
                <img
                  src="https://previews.123rf.com/images/wad/wad1506/wad150600014/41221154-search-staff-icon-concept-isolated-on-white.jpg"
                  alt="Button Image"
                  style={imageStyle}
                />
                <div style={textStyle}>Search</div>
              </div>
            </button>
          </Link>
          <Link to="/humanResource-management/add-employee">
            <button style={buttonStyle}>
              <div
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABI1BMVEX////wwIfk6vhpS0u05m7mr3jV3O2g11VaQUbSm27v8vuw5WWz5mxfPT3UzMzl6/jU8K7o99bX8bXX3PLf5fTu6+tXO0DptX3Y3+/U3vLn6v/l9s9ROkPlrHPwvoOf11D27OWm3F21i2jivqDx0rWd10prTUz9+PLQlGPYoXH4+fzL29JhRkiDYVXcr37wzKSu2X/c6OfK7Zy45nv1/Ox6YGBcODjIv79PMjjd2Nm2rK2lmZvx7++of2LMnHDhx7H24s/jt47dxre72qfC64uy2ovN6LrX6dWw3nSMdnaEbGxJKC+FdHeZdFyNaVmvhWVnUFSWiIpHLTqroqfHq5bp0Lr44cfyx5XM2ti92bDD27232pnJ6LDO7qK/6Ybe9MPj8dyhDj+1AAAMVUlEQVR4nO3c+Vva2BoHcJElClFAVBBFxE5wwGUUtXWr01ra2kWtc+/MOE5B//+/4mbP2XNOEsgJ1+8P88yjgHx837OF2KmpaLP05vzLcTstlvbxl7OliN/IaLJ0dvx6bk6QZ2Xu9b38xovzgDrbmJ6PW+CTs1A+I6/fxG1g5eJrWJ9BPI2bQc/p8U54YDp9HLeDmqUoeHrm5OzT07PziIDp9Je4MVguzo6/nZxEMATttC/iFsFZul8+WZ6ZiWQIWpmTa1E8N3iRAtNzMs2mp8snM2YiBKbnJFr139i+mR3RXWhChGcOMNISSiQ8++YAZ6IsoTzCUw8Y5Twjj/DihwuMtkmlEX5fnnAh0KMTKvwKlDDStUIWIVTCaCcaSYTgKJxM4c7MhAtPTyDhBI7Dc7BJJ3Iu/f7/JpzAXduPGVg4cTvvixkkUQKlEC4to8RJOwHjwkiv00gpjHIoSiqMkCirMLpGlVa4tjazY9ayveumnTa+omcChGvtm7eblx09WTDGFy43397ctk1pcoVr7cusby7vbttpDqWMwrVbf5+Zaufy7a6fUkZhmxNod+7lTZs1L0koXONoUbRjb+lGCYW7wkC9X7N3uxSjfMK1mwBCs5Bko4TCu4BCw0g4lsgghE9Pa5uBhdnsZhqrowyfkF78iEyYzd6gRBmEU8fL0Qmrd0inSvE5/nd/YRUMm3iLVDEJwmqKknWiFz54SXG3yTlbSAWCUuDx8FD8GrfOyPwJS+gPtOPU8xIU7tzHrTNyyhTyAu1qIkJJ7mvbYQi5S+hmT7rFAv6AFN14CwNTe9BUE7fNyhnYpp2wwtSubBMNNBDXbquhhZveQJw7i9tm5xu1hEGEKe+UIc1d0O6ajx9/gwirXg3jljlxBiJhQxNE6E020twhbK/5pD1pIKFDnDuPW+bk4ht10x1MaBMlWe/1dH9QTxUBhRbxtQwHCyv3yzqQeCwKKjSJUhwsrNwv006+gYUG8bgbN8zN/R93lINtcGFqb0eSHY2Rc+pV0hDC1KZEwv/MjkKYkuJwaOVNYxTC9f/G7fJyNRrhq7hdXn4fjfC3uF1eXoQvQvmFf0688K8XYeKF7yZeuPEiDCb8JW6XlxdhQOFfcbu8bNGAEyOcej8S4bu4WUDe09o0lHAjbhaQX0YhTG3FzQJCXfLDAP+OWwVmawRCmRZ8PbS7ZMII38WNgkIbiGGEMg1D+pofQpiK24Qk8i6Vac9mhtKmIYQbcZOQUNo0uFCqtcIMeVsjfseQU0KZNqVWyIt+cKFcM6kZ4pIYVCjdPGOEfDlqgkpIKWJAoFw7NifEkbg+QSUkT6eBBqKEE6kV4poYRCjfWuiENNkEKeFG3BB6CH0q3qZSrhROSBfdhIHy9qgRwlAUnk0lnUed4ENRsE1lHoRW8GOUGPBd3AD/YESRIiYBSCAKAGVd6pGgRO4iJqOCRtDphm86XU9txP3G+bMR4M8u1v+WfJmAg6yLHH0q6YGJmo1f4b8t8e/TjkT36fFk49dZmOjjy87OJk84CxtZvmpnNplCyEgfiqYvqULQSCFW7QcmVqgbO3SiXb6ECz0kTKxmO+Bjki20mR3nnx7IdjrYtxMnJBDY6ch87YIQfU8jZOxkG8kTZvmNxjBNpJATaU1DSRVmiZMKxku0kKGE/k2+ZAstpefE/sHBiRD6JUnCbrGYDyLUnyfPH42yks/pqVHvx6QBs6cr+vMW4373HOnmzKzMZwWMjcbv1tNy+bjfv39q9ltdyb3iJjbemwU0I32j5nNuVk75WrWRvfKeJH2fdoH3qpfxquFvbLyqrYDPkrxPa7kcbPQrYyM7vwI/R+4+zefQrMxXGUZjhkGBuVrcCka6GNAoI/3vL8EZJhl9WiO8XWPG2SMaG40rkk/ePu3mp8lC3XhFWBwbr/AGtTOdl8/YzRen9VDeMWHGaexhM4ybRf2VinIhuyZPzyLtTaN7HNIM46Rmv5g0SL07vTCIwB6HMsPAQBMZv9HuTi+0oZjz9jj6Hobu0wchnGKcMyvGYw3FnLPHYcwwRhah11w0fmNxVbJL4Om/cnqfWmXE9zBQasCrFt2OqI0fCQ0+7j7N5SrbHyqs70M9Cv2yasa8s/W8ujDo9YeH/V6v9FQe2cfixO7k6tPKdlNjEhcJBbSeWXn456Na0KPaMf4/03s6GoGPyUN/9QhQaSosItCj0KvovGtNa2XQGM5hxEh6d/oTTaDCINaIr1GpbO83taaCAy1lQe2XI/P51s8KeSjqLWoAGUTiK1S2rzXjeRSghRxGZOQpoBkKULFDIXqD0ANWHvY163kqXWgY+1H0KjeQ1Kd2izKIXo+6wErlg113NtAckqXQQL4ONVPE+7TW8oA68REn4h1QebjW7CcwetRJIfM8rgpC79IBHihgtE9Ymd3NjFfBR839rfiV0GrVp/EB0T6tTaPCOvYIDPiv5j6eo4RmGXvBgV1gHuBKDXn7qBD9JWC/msq+B1T4gDqxH1hYywkSwaFo1OegBQk/I3V2nuV9DQTy9KhNPAy4lctDI4UvcAPW98GZRjmA6uW9NBHIXUI96jAYEe4kviIugkC4iNpjfRokYoOw8hEEco7CMI3qXAcVItpv13n39YNmy8mnuv3FRfIgBCcZoSYNTHTHlFgVa2B5pg8K7ntwhZbJfYgDfISAQiU0Xn5BGOhd6a1Ni6Q4Dc5OgPBnHXiI+xhncqo8QENWsITG6wvvUoGL9TWx2QbMZ1eoluqkB7gTz3VIoSo8oRaBaV2sihThgCh0SvgB6lG8SY3zr08RB4JCaG0WXDOIwh5J6PyUBxiICQuHvcGwwDaK9im8jxbc3DipP3rCPkHojkJ44cSaVDXnkdUM+zR1GEYYsIr1T55wSBDaJaxsIyVElntnoiwXUBX8MKFNOPahWRAgJDwkCGklhJvUK04vwiLiHwsGEv4EfusEIa2EiNA9PTz5FHE1lDAIsV7yfukqLnSa9GOTKSy4J3mfNlWH4YQB1oz6ABDi37abtIaWEJlouIWZwnMoYQBiHRg4Kj5X2SX8EJlQFVgTSULxNaPe995r4QD9rtOk12iTBhZm1JBCYWJ9yBA6iyG62ocRCqz6ZKHobFM/ZNXQLuE/UQr5Ly9ShIILfx384Z8pQnQxDNWl/EsiRShaRJbQGYYtDBhcmFG5L4PThGJFLHIIH/AShhDyD0SaUKyIB+DPfkS+aU00+IYmnJB7b0oVCk2nB8BbBS5jQMJHgrCVsT4NtQMIvZDPi/wrIl0o0qY8wn8JXdoqHA4WvLidd1TyvlginhdV7ktSVKHQxgYS/kSE9kRDmEqVJtd1pTLhvMi/NaUKhQbiZ2DcqPxCjfPC2TM+LPmXixEI0Qs1dGGT913i50X+C1J0ochUAwnRCzVUYXOfV4ifF9XMeIWPky4ELmIQLkXRu7TFK4y9S2EheimKLtQ4l+2j0cw0IkLwMo16iHyXLlSaXHuvo8PRrBYiQuAyjS4k3rSJX6Qxq7i/sOrl2TUBX3wajGjFFxIOwPdAERKOh0YVm367NvIV8Ah2bUJCeCaAj8BFxs7biPe8Me+8IxM6p6dtUpcq4BXFMZ+ehIR9DmGOcAI24z53vCdgsRV/CApV9EKN9XrEyRQq4nivYggJi5AQuxRlC8lTDVBEEaHABVPqjc0iQmjBwi5j0K8mwpPNaK4mTlHv+hUSQj9d4FIU1KciQn7gVJdWRAHhQca9Q9u4SfsR/WzGFuJX9eE+FbiqL3aPW75ITJ4/FyUoz+j3rRecPqAKLaLAJzPR3RodbYaU2dQeivyfrgl+zj2+lOlFVKDe8/uENNS9piMN/ukTONt4pRkQ96JuCblPv+PPKqOIivfp9ZHP7Sbid36NL4wimtONSSSdB6ESxq1g5YhVREVfafoLTz2fu6KE7lMYfwZMYiujUs6DQAmD3ww9nlA3NhbR904+lf9UEVPKrJGo+N9wKnmPGllg9qnic0Om8J2JcaTvR2QY5d3NQGEuGczxKH77bDzZ4iAqLQJSzcg+yzg5anEQLSV4IbbQTApQz7XvWISlxn+bSoKAU1P7QkQTmJgWtVMSJGr7yZhkgJSbfIPRKiDvB+JSZaun8Rq164R1qJMy34SjKfKe6X3z1PI1alopcSMQymqL1atNTQn/Z9yxp9zTkSRlU2vuy3+S4MpWeXCtaWAtm01Ny/RWEzq/UFJ+WhhmzN1Lq3Vdegqk+x9r61hn57qVjwAAAABJRU5ErkJggg=="
                  alt="Button Image"
                  style={imageStyle}
                />
                <div style={textStyle}>Add </div>
              </div>
            </button>
          </Link>
          <Link to="/humanResource-management/update-employee">
            <button style={buttonStyle}>
              <div
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
                <img
                  src="https://static.vecteezy.com/system/resources/previews/006/467/668/original/a-trendy-icon-of-profile-update-isometric-design-vector.jpg"
                  alt="Button Image"
                  style={imageStyle}
                />
                <div style={textStyle}>Update</div>
              </div>
            </button>
          </Link>
          <Link to="/humanResource-management/delete-employee">
            <button style={buttonStyle}>
              <div
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQVr-9nAhIHBzHJQ3RQN9a2MMDZGVvJcEsFIWJtVc02B44f6b5BGyEDU6HiTFj5Itv71g&usqp=CAU"
                  alt="Button Image"
                  style={imageStyle}
                />
                <div style={textStyle}>Delete</div>
              </div>
            </button>
          </Link>
        </>
      </body>
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
            <button type="submit">Search</button>
          </form>
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
      <body></body>
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
      <body></body>
    </>
  );
}
export function DeleteEmployee(props) {
  return (
    <>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Delete Employee</h1>
          </div>
        </div>
      </main>
      <body></body>
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
        </>
      </body>
    </>
  );
}
