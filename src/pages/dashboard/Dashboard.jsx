import React, { useState } from "react";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { MdBorderClear } from "react-icons/md";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components for ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const adminOrders = [
    {
      _id: "1",
      firstName: "xorts",
      totalPrice: 100,
      status: "Delivered",
      Facebook: "3453224",
      cart: [{ qty: 2 }, { qty: 3 }],
      createdAt: "2024-12-01",
    },
    {
      _id: "2",
      firstName: "xorts",
      totalPrice: 200,
      status: "Pending",
      Facebook: "3453224",
      cart: [{ qty: 1 }, { qty: 2 }],
      createdAt: "2024-12-02",
    },
    {
      _id: "3",
      firstName: "xorts",
      totalPrice: 150,
      status: "Delivered",
      Facebook: "3453224",
      cart: [{ qty: 1 }, { qty: 1 }],
      createdAt: "2024-12-03",
    },
  ];

  const sellers = [
    { name: "Seller 1" },
    { name: "Seller 2" },
    { name: "Seller 3" },
    { name: "Seller 4" },
  ];
  const totalCustomers = 50;

  const adminEarning = adminOrders.reduce(
    (acc, item) => acc + item.totalPrice * 0.1,
    0
  );
  const adminBalance = adminEarning.toFixed(2);

  const [filteredOrders, setFilteredOrders] = useState(adminOrders);
  const [startDate, setStartDate] = useState("2024-12-01");
  const [endDate, setEndDate] = useState("2024-12-03");

  const handleDateRangeChange = () => {
    const filteredData = adminOrders.filter(
      (order) => order.createdAt >= startDate && order.createdAt <= endDate
    );
    setFilteredOrders(filteredData);
  };

  const rows = filteredOrders.map((order) => ({
    id: order._id,
    firstName: order.firstName,
    Facebook: order.Facebook,
    status: order.status,
    total: `$${order.totalPrice}`,
    orderDate: order.createdAt.slice(0, 10),
  }));

  const monthlySalesData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Monthly Sales ($)",
        data: [300, 500, 450, 600, 700, 800],
        borderColor: "#077f9c",
        backgroundColor: "rgba(7, 127, 156, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const deliveredOrders = filteredOrders.filter(
    (order) => order.status === "Delivered"
  );
  const pendingOrders = filteredOrders.filter(
    (order) => order.status === "Pending"
  );

  const salesDistributionData = {
    labels: ["Delivered", "Pending"],
    datasets: [
      {
        data: [
          deliveredOrders.reduce((acc, order) => acc + order.totalPrice, 0),
          pendingOrders.reduce((acc, order) => acc + order.totalPrice, 0),
        ],
        backgroundColor: ["#077f9c", "#e74c3c"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="p-4 sm:p-12">
      <h3 className="pb-6 text-2xl font-semibold">Overview</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Card 1 */}
        <div className="w-full p-5 mb-4 bg-white rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <AiOutlineMoneyCollect size={30} className="mr-2 text-gray-600" />
            <h3 className="text-lg font-medium text-gray-600">Total Earning</h3>
          </div>
          <h5 className="text-2xl font-semibold text-gray-800">
            ${adminBalance}
          </h5>
        </div>

        {/* Card 2 */}
        <div className="w-full p-5 mb-4 bg-white rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <AiOutlineMoneyCollect size={30} className="mr-2 text-gray-600" />
            <h3 className="text-lg font-medium text-gray-600">Total Earning</h3>
          </div>
          <h5 className="text-2xl font-semibold text-gray-800">
            ${adminBalance}
          </h5>
        </div>

        {/* Card 3 */}
        <div className="w-full p-5 mb-4 bg-white rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <MdBorderClear size={30} className="mr-2 text-gray-600" />
            <h3 className="text-lg font-medium text-gray-600">All Employees</h3>
          </div>
          <h5 className="text-2xl font-semibold text-gray-800">
            {sellers.length}
          </h5>
        </div>

        {/* Card 4 */}
        <div className="w-full p-5 mb-4 bg-white rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <AiOutlineMoneyCollect size={30} className="mr-2 text-gray-600" />
            <h3 className="text-lg font-medium text-gray-600">All Orders</h3>
          </div>
          <h5 className="text-2xl font-semibold text-gray-800">
            {adminOrders.length}
          </h5>
        </div>
      </div>

      <div className="pt-8">
        <h3 className="pb-6 text-2xl font-semibold">Charts</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Line Chart */}
          <div className="w-full p-4 bg-white rounded-lg shadow-lg">
            <h5 className="mb-4 text-xl font-medium text-gray-800">
              Monthly Sales
            </h5>
            <div className="w-full">
              <Line
                data={monthlySalesData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: "top",
                    },
                  },
                  scales: {
                    x: {
                      beginAtZero: true,
                    },
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
                height={300}
              />
            </div>
          </div>

          {/* Doughnut Chart */}
          <div className="w-full p-4 bg-white rounded-lg shadow-lg">
            <h5 className="mb-4 text-xl font-medium text-gray-800">
              Sales Distribution
            </h5>
            <div className="flex flex-col items-center justify-between gap-4 mb-4 sm:flex-row sm:gap-6">
              <div className="flex flex-col w-full gap-4 sm:flex-row sm:gap-6 sm:w-auto">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md sm:w-36"
                />
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md sm:w-36"
                />
              </div>
              <button
                onClick={handleDateRangeChange}
                className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md sm:w-auto sm:mt-0"
              >
                Apply Filter
              </button>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full sm:w-[50%] md:w-[60%]">
                <Doughnut data={salesDistributionData} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <h3 className="pb-6 text-2xl font-semibold">Orders</h3>
        <div className="p-4 overflow-x-auto bg-white rounded-lg shadow-lg">
          <table className="min-w-full text-sm">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Order Date</th>
                <th className="px-4 py-2 text-left">Total</th>
                <th className="px-4 py-2 text-left">Facebook</th>
                <th className="px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td className="px-4 py-2">{row.firstName}</td>
                  <td className="px-4 py-2">{row.orderDate}</td>
                  <td className="px-4 py-2">{row.total}</td>
                  <td className="px-4 py-2">{row.Facebook}</td>
                  <td className="px-4 py-2">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
