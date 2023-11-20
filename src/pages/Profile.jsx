import React, { useState, useEffect } from "react";
import profile from "../images/download.png";
import "../style/profile.css";
export default function Profile() {
  const [userData, setUserData] = useState({
    userId: "989997979797979",
    dateOfBirth: "18/09/2003",
    phoneNo: "7418529630",
    email: "heemaang.saxena18@gmail.com",
    name: "Heemaang",
  });

  const [editMode, setEditMode] = useState(false);
  const [newImage, setNewImage] = useState(null);

  // Mock function to fetch user data from a database
  const fetchUserData = () => {
    // Replace this with your actual API call to fetch data from the database
    // For demonstration, we're using a setTimeout to simulate an asynchronous operation
    setTimeout(() => {
      // Simulated data from the database
      const newData = {
        userId: "123456789",
        dateOfBirth: "01/01/2000",
        phoneNo: "9876543210",
        email: "example@gmail.com",
        name: "John Doe",
      };

      // Update the state with the fetched data
      setUserData(newData);
    }, 1000); // Simulating a 1-second delay
  };

  // useEffect to fetch user data when the component mounts
  useEffect(() => {
    fetchUserData();
  }, []); // Empty dependency array ensures that it runs only once on mount

  const handleEditModeToggle = () => {
    setEditMode(!editMode);
  };

  const handleImageChange = (e) => {
    setNewImage(e.target.files[0]);
  };

  return (
    <div className="container emp-profile mt-4 shadow-lg p-3 mb-5 bg-body rounded w-50">
      <form method="">
        
        <div className="row">
          <div className="col-md-4">
            <img
              src={newImage ? URL.createObjectURL(newImage) : profile}
              alt="error"
              className="profile-image"
            />
            {editMode && (
              <div className="mt-2">
                <label htmlFor="imageUpload" className="btn btn-primary">
                  Upload Image
                </label>
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </div>
            )}
          </div>
          <div className="col-md-6">
            <div className="profile-head mt-5">
              <h5>{userData.name}</h5>
              <h6>Web developer</h6>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleEditModeToggle}
              >
                {editMode ? "Cancel Edit" : "Edit Profile"}
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 pl-5 about-info">
            <div className="tab-content profile-tab" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="about"
                role="tabpanel"
                aria-labelledby="about-tab"
              >
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label  className="font-weight-bold">User ID</label>
                  </div>
                  <div className="col-md-6">
                    {editMode ? (
                      <input
                        type="text"
                        value={userData.userId}
                        onChange={(e) =>
                          setUserData({ ...userData, userId: e.target.value })
                        }
                      />
                    ) : (
                      <p>{userData.userId}</p>
                    )}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label className="font-weight-bold">Date of Birth</label>
                  </div>
                  <div className="col-md-6">
                    {editMode ? (
                      <input
                        type="text"
                        value={userData.dateOfBirth}
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            dateOfBirth: e.target.value,
                          })
                        }
                      />
                    ) : (
                      <p>{userData.dateOfBirth}</p>
                    )}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label className="font-weight-bold">Phone No.</label>
                  </div>
                  <div className="col-md-6">
                    {editMode ? (
                      <input
                        type="text"
                        value={userData.phoneNo}
                        onChange={(e) =>
                          setUserData({ ...userData, phoneNo: e.target.value })
                        }
                      />
                    ) : (
                      <p>{userData.phoneNo}</p>
                    )}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label className="font-weight-bold">Email id</label>
                  </div>
                  <div className="col-md-6">
                    {editMode ? (
                      <input
                        type="text"
                        value={userData.email}
                        onChange={(e) =>
                          setUserData({ ...userData, email: e.target.value })
                        }
                      />
                    ) : (
                      <p>{userData.email}</p>
                    )}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label className="font-weight-bold">Name</label>
                  </div>
                  <div className="col-md-6">
                    {editMode ? (
                      <input
                        type="text"
                        value={userData.name}
                        onChange={(e) =>
                          setUserData({ ...userData, name: e.target.value })
                        }
                      />
                    ) : (
                      <p>{userData.name}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
