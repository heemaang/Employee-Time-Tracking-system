import React, { useState, useEffect } from "react";

const AttendanceButton = () => {
  const [isAttending, setIsAttending] = useState(false);

  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  const handleAttendanceClick = () => {
    console.log("Button clicked");

    // Simulate a delay to mimic the API call
    setTimeout(() => {
      console.log("Attendance marked");
      setIsAttending(!isAttending);
    }, 1000);
  };

  return (
    <div>
      <button
        type="button"
        className={`btn ${isAttending ? "btn-success" : "btn-primary"}`}
        onClick={handleAttendanceClick}
      >
        {isAttending ? "Marked Attending" : "Mark Attendance"}
      </button>
    </div>
  );
};

export default AttendanceButton;
