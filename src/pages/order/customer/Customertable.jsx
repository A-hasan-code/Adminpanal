import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa"; // For Delete action
import { AgGridReact } from "ag-grid-react"; // Import AG-Grid React component
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Customertable = () => {
  // Sample customer data
  const [customerData, setCustomerData] = useState([
    {
      id: 1,
      customerName: "John Doe",
      address: "1234 Elm St",
      facebookId: "john_doe_123",
    },
    {
      id: 2,
      customerName: "Jane Smith",
      address: "5678 Oak St",
      facebookId: "jane_smith_456",
    },
    {
      id: 3,
      customerName: "Alice Johnson",
      address: "9102 Pine St",
      facebookId: "alice_johnson_789",
    },
  ]);

  // Column definitions for AG-Grid
  const columns = [
    {
      headerName: "Customer Name",
      field: "customerName",
      sortable: true,
      filter: true,
    },
    { headerName: "Address", field: "address", sortable: true, filter: true },
    {
      headerName: "Facebook ID",
      field: "facebookId",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Actions",
      cellRenderer: (params) => (
        <div className="flex justify-around">
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
    setCustomerData(customerData.filter((customer) => customer.id !== id));
  };

  return (
    <div className="container p-6 mx-auto rounded-lg shadow-lg bg-gray-50">
      {/* Customer Table Card Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Customer List</h2>
      </div>

      {/* AG-Grid Table */}
      <div
        className="ag-theme-alpine"
        style={{ height: "400px", width: "100%" }}
      >
        <AgGridReact
          columnDefs={columns} // Pass column definitions
          rowData={customerData} // Pass customer data to the grid
          pagination={true} // Enable pagination
          domLayout="autoHeight" // Automatically adjust height of the grid
          enableSorting={true} // Enable sorting
          enableFilter={true} // Enable filtering
        />
      </div>
    </div>
  );
};

export default Customertable;
