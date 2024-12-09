import React, { useState } from "react";
import { toast } from "react-toastify"; // For showing toast notifications
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Addpassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visibleNewPassword, setVisibleNewPassword] = useState(false); // State for new password visibility
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false); // State for confirm password visibility
  const [passwordError, setPasswordError] = useState(""); // State to track password error

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset the error state before checking
    setPasswordError("");

    // Check if both fields are filled
    if (!newPassword || !confirmPassword) {
      toast.error("Please fill in both password fields.");
      return;
    }

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      toast.error("Passwords do not match.");
      return;
    }

    // Simulate password change process
    toast.success("Password changed successfully!");
  };

  return (
    <div className="flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
          Change your password
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* New Password Field */}
            <div className="relative">
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <div className="relative mt-1">
                <input
                  type={visibleNewPassword ? "text" : "password"}
                  name="newPassword"
                  autoComplete="new-password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className={`block w-full px-3 py-2 placeholder-gray-400 border ${
                    passwordError ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
                {visibleNewPassword ? (
                  <AiOutlineEye
                    className="absolute cursor-pointer right-2 top-2"
                    size={25}
                    onClick={() => setVisibleNewPassword(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute cursor-pointer right-2 top-2"
                    size={25}
                    onClick={() => setVisibleNewPassword(true)}
                  />
                )}
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="relative">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="relative mt-1">
                <input
                  type={visibleConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`block w-full px-3 py-2 placeholder-gray-400 border ${
                    passwordError ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
                {visibleConfirmPassword ? (
                  <AiOutlineEye
                    className="absolute cursor-pointer right-2 top-2"
                    size={25}
                    onClick={() => setVisibleConfirmPassword(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute cursor-pointer right-2 top-2"
                    size={25}
                    onClick={() => setVisibleConfirmPassword(true)}
                  />
                )}
              </div>
            </div>

            {/* Display Error Message Below the Confirm Password */}
            {passwordError && (
              <p className="text-sm text-red-500">{passwordError}</p>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addpassword;
