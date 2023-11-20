import React from "react";
import AttendanceButton from "./Attendance";
import AttendanceHistory from "./Attendancehistory";

const UserProfile = () => {
  const userId = "123"; // Replace with the actual user ID

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h1>User Profile</h1>
          {/* Other profile information/components */}
          <AttendanceButton userId={userId} />
        </div>
        <div className="col-md-6">
          <AttendanceHistory userId={userId} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
