import React from "react";
import { Link } from "react-router-dom";
import "./HRStyles.css";

export default function EmployeeDetailForm() {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Registration Form</h2>
      <br />
      <form>
        <div class="form-group">
          <label for="id">ID:</label>
          <input type="text" id="id" name="id" />
        </div>

        <div class="form-group">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" />
        </div>

        <div class="form-group">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" />
        </div>

        <div class="form-group">
          <label for="dateOfBirth">Date of Birth:</label>
          <input type="date" id="dateOfBirth" name="dateOfBirth" />
        </div>

        <div class="form-group">
          <label for="skillLevel">Skill Level:</label>
          <input type="text" id="skillLevel" name="skillLevel" />
        </div>

        <div class="form-group">
          <label for="age">Age:</label>
          <input type="number" id="age" name="age" />
        </div>

        <div class="form-group">
          <label for="NIC">NIC:</label>
          <input type="text" id="NIC" name="NIC" />
        </div>

        <div class="form-group">
          <label for="address">Address:</label>
          <input type="text" id="address" name="address" />
        </div>

        <div class="form-group">
          <label for="emailAddress">Email Address:</label>
          <input type="email" id="emailAddress" name="emailAddress" />
        </div>

        <div class="form-group">
          <label for="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" />
        </div>

        <div class="form-group">
          <label for="emergencyContactNumber">Emergency Contact Number:</label>
          <input
            type="tel"
            id="emergencyContactNumber"
            name="emergencyContactNumber"
          />
        </div>

        <div class="form-group">
          <label for="gender">Gender:</label>
          <select id="gender" name="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div class="form-group">
          <label for="bankAccountNumber">Bank Account Number:</label>
          <input type="text" id="bankAccountNumber" name="bankAccountNumber" />
        </div>

        <div class="form-group">
          <label for="department">Department:</label>
          <input type="text" id="department" name="department" />
        </div>

        <div class="form-group">
          <label for="jobRole">Job Role:</label>
          <input type="text" id="jobRole" name="jobRole" />
        </div>

        <div class="form-group">
          <label for="recruitmentDate">Recruitment Date:</label>
          <input type="date" id="recruitmentDate" name="recruitmentDate" />
        </div>

        <div class="form-group">
          <label for="basicSalary">Basic Salary:</label>
          <input type="number" id="basicSalary" name="basicSalary" />
        </div>

        <div class="form-group">
          <label for="permanentStaff">Permanent Staff:</label>
          <input type="checkbox" id="permanentStaff" name="permanentStaff" />
        </div>

        <div class="form-group">
          <label for="insuranceCategory">Insurance Category:</label>
          <input type="text" id="insuranceCategory" name="insuranceCategory" />
        </div>
        <br />

        <button type="submit" style={{ fontSize: "25px", marginLeft: "50%" }}>
          Submit
        </button>
      </form>
    </>
  );
}
