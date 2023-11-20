// import React from "react";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Profile from "./pages/Profile";
// import Attendance from "./pages/Attendance";
// import Attendancehistory from "./pages/Attendancehistory";
// import Checking from "./pages/Checking";



// export default function App() {
//   return (
//     <div>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Profile />} />
//           {/* <Route path="/" element={<Checking />} /> */}
//           <Route path="/attendance" element={<Attendance />} />
//           <Route path="/attendancehistory" element={<Attendancehistory />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Checking from "./pages/Checking";
import AttendanceButton from "./pages/Attendance";
import AttendanceHistory from "./pages/Attendancehistory";

export default function App() {
  const userId = "123"; // Replace with the actual user ID

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/checking" element={<Checking />} />
          <Route path="/attendance" element={<AttendanceButton userId={userId} />} />
          <Route path="/attendancehistory" element={<AttendanceHistory userId={userId} />} />
        </Routes>
      </div>
    </Router>
  );
}

