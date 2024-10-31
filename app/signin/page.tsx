// app/signin/page.tsx

"use client";
import React, { useState } from "react";
import "./signin.css";

// Define the structure of student details
interface StudentDetails {
  student_id: string;
  student_name: string;
  class: number;
  center_id: string;
}

// Define the structure of volunteer details
interface VolunteerDetails {
  volunteer_id: string;
  volunteer_name: string;
  no_of_session_taken: number;
  center_id: string;
}

// Sample volunteer data
const volunteerData: VolunteerDetails[] = [
  { volunteer_id: "V001", volunteer_name: "John Doe", no_of_session_taken: 10, center_id: "D001" },
  { volunteer_id: "V002", volunteer_name: "Jane Smith", no_of_session_taken: 12, center_id: "D002" },
  { volunteer_id: "V003", volunteer_name: "Sam Wilson", no_of_session_taken: 8, center_id: "D003" },
];

const SignIn: React.FC = () => {
  const [userType, setUserType] = useState("volunteer");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [studentDetails, setStudentDetails] = useState<StudentDetails | null>(null);
  const [volunteerDetails, setVolunteerDetails] = useState<VolunteerDetails | null>(null);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    if (userType === "student") {
      try {
        const response = await fetch(`/api/students?student_id=${userId}`);
        if (response.ok) {
          const data = await response.json();
          setStudentDetails(data); // Show student details in the UI
          setVolunteerDetails(null); // Clear volunteer details
        } else {
          alert("Student not found.");
          setStudentDetails(null);
        }
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    } else if (userType === "volunteer") {
      // Look up volunteer data
      const volunteer = volunteerData.find(v => v.volunteer_id === userId);
      if (volunteer) {
        setVolunteerDetails(volunteer); // Show volunteer details in the UI
        setStudentDetails(null); // Clear student details
      } else {
        alert("Volunteer not found.");
        setVolunteerDetails(null);
      }
    }
  };

  return (
    <div className="wrapper">
      <div className="form-box">
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <div className="input-box">
            <label htmlFor="userType">User Type</label>
            <select
              id="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              required
              className="input-field"
            >
              <option value="volunteer">Volunteer</option>
              <option value="student">Student</option>
            </select>
          </div>
          <div className="input-box">
            <label htmlFor="userId">User ID</label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter your User ID"
              required
              className="input-field"
            />
          </div>
          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              required
              className="input-field"
            />
          </div>
          <button type="submit" className="submit">
            Sign In
          </button>
        </form>

        {/* Display student details if available */}
        {studentDetails && (
          <div className="student-details">
            <h3>Student Details</h3>
            <p><strong>ID:</strong> {studentDetails.student_id}</p>
            <p><strong>Name:</strong> {studentDetails.student_name}</p>
            <p><strong>Class:</strong> {studentDetails.class}</p>
            <p><strong>Center ID:</strong> {studentDetails.center_id}</p>
          </div>
        )}

        {/* Display volunteer details if available */}
        {volunteerDetails && (
          <div className="volunteer-details">
            <h3>Volunteer Details</h3>
            <p><strong>ID:</strong> {volunteerDetails.volunteer_id}</p>
            <p><strong>Name:</strong> {volunteerDetails.volunteer_name}</p>
            <p><strong>Sessions Taken:</strong> {volunteerDetails.no_of_session_taken}</p>
            <p><strong>Center ID:</strong> {volunteerDetails.center_id}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignIn;
