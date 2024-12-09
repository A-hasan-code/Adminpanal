import React, { useState } from "react";
import { FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa"; // For action buttons (Edit, Delete, Add)
import { useNavigate } from "react-router-dom"; // For navigation to '/addsale'
import { AgGridReact } from "ag-grid-react"; // Import AG-Grid React component
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Salestable = () => {
  const history = useNavigate();

  // Sample Sales Data
  const [salesData, setSalesData] = useState([
    {
      id: 1,
      productName: "Product A",
      customerName: "John Doe",
      facebookId: "john_doe_123",
      totalSales: 500,
    },
    {
      id: 2,
      productName: "Product B",
      customerName: "Jane Smith",
      facebookId: "jane_smith_456",
      totalSales: 1000,
    },
    {
      id: 3,
      productName: "Product C",
      customerName: "Alice Johnson",
      facebookId: "alice_johnson_789",
      totalSales: 750,
    },
  ]);

  // Define column definitions for AG-Grid
  const columns = [
    {
      headerName: "Product Name",
      field: "productName",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Customer Name",
      field: "customerName",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Facebook ID",
      field: "facebookId",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Total Sales",
      field: "totalSales",
      sortable: true,
      filter: true,
      valueFormatter: (params) => `$${params.value.toFixed(2)}`, // Format as currency
    },
    {
      headerName: "Actions",
      cellRenderer: (params) => (
        <div className="flex justify-around">
          <button
            onClick={() => handleEdit(params.data.id)}
            className="px-3 py-1 mr-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => handleDelete(params.data.id)}
            className="px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
          >
            <FaTrashAlt />
          </button>
        </div>
      ),
    },
  ];

  // Handle delete action
  const handleDelete = (id) => {
    setSalesData(salesData.filter((sale) => sale.id !== id));
  };

  // Handle edit action (redirect to /addsale with the sale id)
  const handleEdit = (id) => {
    history(`/saleform?id=${id}`);
  };

  return (
    <div className="container p-6 mx-auto rounded-lg shadow-lg bg-gray-50">
      {/* Sales Table Card Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Sales Overview</h2>
        <button
          onClick={() => history("/saleform")} // Navigate to the add sale page
          className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-800"
        >
          <FaPlus className="inline mr-2" />
          Add Sale
        </button>
      </div>

      {/* AG-Grid Table */}
      <div
        className="ag-theme-alpine"
        style={{ height: "500px", width: "100%" }}
      >
        <AgGridReact
          columnDefs={columns}
          rowData={salesData}
          pagination={true} // Enable pagination
          domLayout="autoHeight" // Automatically adjust height of the grid
          enableSorting={true} // Enable sorting
          enableFilter={true} // Enable filtering
        />
      </div>
    </div>
  );
};

export default Salestable;
