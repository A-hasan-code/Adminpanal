import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input"; // Import the PhoneInput component
import "react-phone-number-input/style.css"; // Import the styles for phone input

const Employform = () => {
  const { id } = useParams(); // Extracting 'id' from the URL to check for Edit
  const navigate = useNavigate();

  // State to manage form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    emailConfirmation: "", // Added field for email confirmation
    emailType: "work", // New field to select email type (personal or work)
  });

  // If 'id' exists, simulate fetching the user data
  useEffect(() => {
    if (id) {
      // Simulate fetching user data by id (replace with your actual data fetching logic)
      const userData = {
        firstName: "John",
        lastName: "Doe",
        phone: "+1234567890", // Phone number should be in international format
        email: "john.doe@company.com",
        emailConfirmation: "john.doe@company.com", // Pre-fill confirmation email
        emailType: "work", // Pre-fill email type as work
      };
      setFormData(userData);
    }
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle phone number change
  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  // Handle form submit (Add or Edit)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to either Add or Edit based on `id`
    if (id) {
      // Edit functionality (Submit data to API or state management)
      console.log("Editing Employee", formData);
    } else {
      // Add functionality (Submit data to API or state management)
      console.log("Adding Employee", formData);
    }
    // Redirect after submit (You can customize this)
    navigate("/employees"); // Redirect to the employees list page after submit
  };

  return (
    <div className="max-w-4xl p-4 mx-auto">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-semibold text-center">
          {id ? "Edit Employee" : "Add Employee"}
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Grid for form fields with responsive design */}
          <div className="grid gap-6 mb-6 sm:grid-cols-1 md:grid-cols-2">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="John"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Doe"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Phone Number
              </label>
              <PhoneInput
                international
                defaultCountry="US"
                value={formData.phone}
                onChange={handlePhoneChange}
                className="w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                required
              />
            </div>

            {/* Dropdown */}
            <div>
              <label
                for="countries"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Select an option
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="Operator">Operator</option>
                <option value="Packing">Packing</option>
              </select>
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="john.doe@company.com"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full sm:w-auto px-5 py-2.5 bg-blue-700 text-white rounded-lg text-sm hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            {id ? "Update Employee" : "Add Employee"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Employform;
