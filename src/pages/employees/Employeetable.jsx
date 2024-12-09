import React, { useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Employeetable = () => {
  const navigate = useNavigate();

  // Sample Employee Data
  const [rowData] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      status: "Active",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@example.com",
      status: "Inactive",
    },
    {
      id: 3,
      firstName: "Mark",
      lastName: "Johnson",
      email: "mark@example.com",
      status: "Active",
    },
  ]);

  // AG Grid Column Definitions
  const columnDefs = [
    { headerName: "ID", field: "id", sortable: true, filter: true },
    {
      headerName: "Name",
      field: "name",
      valueGetter: (params) =>
        `${params.data.firstName} ${params.data.lastName}`,
      sortable: true,
      filter: true,
    },
    { headerName: "Email", field: "email", sortable: true, filter: true },
    {
      headerName: "Status",
      field: "status",
      editable: true,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["Active", "Inactive"],
      },
      cellRenderer: (params) => renderStatusBadge(params),
      sortable: true,
      filter: true,
    },
    {
      headerName: "Actions",
      cellRenderer: (params) => (
        <div className="flex justify-center gap-2">
          <button
            onClick={() => handleEdit(params.data.id)}
            className="text-blue-500 transition duration-300 hover:text-blue-700"
          >
            <AiOutlineEdit size={20} />
          </button>
          <button
            onClick={() => handleDelete(params.data.id)}
            className="text-red-500 transition duration-300 hover:text-red-700"
          >
            <AiOutlineDelete size={20} />
          </button>
        </div>
      ),
      sortable: false,
      filter: false,
    },
  ];

  // Handling Edit Button Click
  const handleEdit = (id) => {
    navigate(`/addemployee/${id}`); // Pass employee ID to edit route
  };

  // Handling Delete Button Click
  const handleDelete = (id) => {
    // Code to handle deletion
    console.log(`Deleting employee with ID: ${id}`);
  };

  // Render Beautiful Status Badge
  const renderStatusBadge = (params) => {
    const status = params.value;
    let badgeClass = "px-4 py-2 rounded-full text-white text-sm font-semibold";

    // Check the status to apply appropriate badge styles
    if (status === "Active") {
      badgeClass += " bg-green-500";
    } else if (status === "Inactive") {
      badgeClass += " bg-red-500";
    }

    return <span className={badgeClass}>{status}</span>;
  };

  return (
    <div className="p-4 mx-auto max-w-7xl">
      {/* Add Employee Button - Inside the Card */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Employee List</h3>
          <button
            onClick={() => navigate("/addemployee")}
            className="px-6 py-2 text-white transition duration-300 bg-gray-600 rounded-md shadow-md hover:bg-gray-800"
          >
            Add Employee
          </button>
        </div>

        {/* AG Grid Table */}
        <div className="w-full overflow-x-auto ag-theme-alpine">
          <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            pagination={true}
            paginationPageSize={10}
            domLayout="autoHeight"
            frameworkComponents={{}}
          />
        </div>
      </div>
    </div>
  );
};

export default Employeetable;
