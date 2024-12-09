import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import { CiCamera } from "react-icons/ci";
const Profile = () => {
  const [profileImage, setProfileImage] = useState(null); // Initially no image selected
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // Handle image change (file input)
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Update profile image
      };
      reader.readAsDataURL(file); // Read the file as base64 data
    }
  };

  // Handle profile update form submission
  const handleProfileUpdate = (e) => {
    e.preventDefault();

    // Validation: Check if all fields are filled
    if (firstName && lastName && email) {
      // Success message using Toastify
      toast.success("Profile updated successfully!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 5000,
      });
    } else {
      // Error message using Toastify
      toast.error("Please fill in all fields.", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 5000,
      });
    }
  };

  // Handle password change (mock functionality)
  const handlePasswordChange = () => {
    toast.info("Password change functionality is not implemented!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 5000,
    });
  };

  return (
    <div className="max-w-sm p-6 mx-auto bg-white shadow-lg rounded-xl">
      {/* Profile Image Section */}
      <div className="relative flex justify-center mb-6">
        {/* Displaying the image or default image */}
        <img
          src={profileImage || "https://via.placeholder.com/150"} // Default image if no profile image is selected
          alt="Profile"
          className="object-cover w-32 h-32 rounded-full"
        />

        {/* Image upload button (Camera Icon) */}
        <label
          htmlFor="file-upload"
          className="absolute bottom-0 right-0 p-2 text-white bg-gray-800 rounded-full cursor-pointer"
        >
          <CiCamera /> {/* Camera Icon */}
        </label>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>

      {/* Profile Info Fields */}
      <form onSubmit={handleProfileUpdate} className="space-y-4">
        <div>
          <label
            htmlFor="first-name"
            className="block text-sm font-semibold text-gray-700"
          >
            First Name
          </label>
          <input
            id="first-name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            placeholder="Enter First Name"
          />
        </div>

        <div>
          <label
            htmlFor="last-name"
            className="block text-sm font-semibold text-gray-700"
          >
            Last Name
          </label>
          <input
            id="last-name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            placeholder="Enter Last Name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            placeholder="Enter Email"
          />
        </div>

        {/* Update Profile Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-2 text-white bg-gray-600 rounded-md hover:bg-indigo-700"
          >
            Update Profile
          </button>
        </div>
      </form>

      {/* Change Password Button */}
      <div className="mt-4">
        <button
          onClick={handlePasswordChange}
          className="w-full py-2 text-white bg-gray-600 rounded-md hover:bg-indigo-700"
        >
          Change Password
        </button>
      </div>

      {/* Toastify Container (this is where the notifications will appear) */}
      <ToastContainer />
    </div>
  );
};

export default Profile;
