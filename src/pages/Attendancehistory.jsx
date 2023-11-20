import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const AttendanceHistory = ({ userId }) => {
  const [attendanceHistory, setAttendanceHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAttendanceHistory = async () => {
      try {
        const response = await axios.get(
          `YOUR_BACKEND_API_ENDPOINT/history/${userId}`
        );

        setAttendanceHistory(response.data);
      } catch (error) {
        console.error("Error fetching attendance history:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAttendanceHistory();
  }, [userId]);

  if (loading) {
    return <p>Loading attendance history...</p>;
  }

  return (
    <div>
      <h2>Attendance History</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {attendanceHistory.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.date}</td>
              <td>{entry.attendance ? "Present" : "Absent"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceHistory;
