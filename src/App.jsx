import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/authentication/Login";
import ForgotPassword from "./pages/authentication/Forgetpassword";
import Addpassword from "./pages/authentication/Addpassword";
import Dashboard from "./pages/dashboard/Dashboard";
import Admindashboard from "./pages/dashboard/Admindashboard";
import Adminemployee from "./pages/employees/Adminemployees";

import Addemployee from "./pages/employees/addemployes/Addemployee";

import Adminproduct from "./pages/product/Adminproduct";

import Adminproductform from "./pages/product/Addproduct/Adminproductform";
import Salestable from "./pages/order/Sales/Salestable";
import Adminsales from "./pages/order/Sales/AdminSales";
import Adminsaleform from "./pages/order/Sales/Adminsaleform";
import Customertable from "./pages/order/customer/Customertable";
import AdminCustomer from "./pages/order/customer/admincustomer";
import Profile from "./pages/profile/Profile";
import Adminprofile from "./pages/profile/Adminprofile";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Admindashboard />} />
      <Route path="/profile" element={<Adminprofile />} />
      <Route path="/customer" element={<AdminCustomer />} />
      <Route path="/sale" element={<Adminsales />} />
      <Route path="/saleform" element={<Adminsaleform />} />
      {/*Product*/}
      <Route path="/product" element={<Adminproduct />} />
      <Route path="/addproduct" element={<Adminproductform />} />

      {/*Employee*/}
      <Route path="/employeetable" element={<Adminemployee />} />
      <Route path="/addemployee" element={<Addemployee />} />
      {/*Authentication*/}
      <Route path="/login" element={<Login />} />
      <Route path="/forgetpassword" element={<ForgotPassword />} />
      <Route path="/forgetpassword/password" element={<Addpassword />} />
    </Routes>
  );
}

export default App;
