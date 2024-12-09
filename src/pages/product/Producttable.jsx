import React, { useState, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { FaSearch, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductTable = () => {
  const [gridApi, setGridApi] = useState(null);
  // const [searchText, setSearchText] = useState("");

  const columnDefs = [
    {
      headerName: "Product Name",
      field: "productName",
      width: 200,
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Description",
      field: "description",
      width: 200,
      filter: "agTextColumnFilter",
      cellStyle: { whiteSpace: "normal", wordWrap: "break-word" },
      autoHeight: true,
      cellRenderer: (params) => {
        return (
          <div
            style={{
              maxHeight: "5rem",
              overflowY: "auto",
              lineHeight: "1.5rem",
            }}
          >
            {params.value}
          </div>
        );
      },
    },
    {
      headerName: "Weight",
      field: "weight",
      width: 150,
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Price",
      field: "price",
      width: 100,
      filter: "agNumberColumnFilter",
    },
    {
      headerName: "Tags",
      field: "tags",
      width: 370,
      autoHeight: true,
      cellRenderer: (params) => (
        <div
          className="flex flex-wrap gap-1"
          style={{
            maxHeight: "4rem",
            overflowY: "auto",
            lineHeight: "1.5rem",
          }}
        >
          {params.value.map((tag, index) => (
            <span
              key={index}
              className={`inline-block px-3 py-1 text-sm rounded-full text-white ${getTagClass(
                tag
              )}`}
            >
              {tag}
            </span>
          ))}
        </div>
      ),
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Actions",
      field: "actions",
      width: 150,
      cellRenderer: (params) => (
        <div className="flex space-x-2">
          <button className="text-blue-500 hover:text-blue-700">
            <FaEdit />
          </button>
          <button className="text-red-500 hover:text-red-700">
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  const getTagClass = (tag) => {
    switch (tag) {
      case "New":
        return "bg-green-500";
      case "Sale":
        return "bg-red-500";
      case "Popular":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const rowData = [
    {
      productName: "Product 1",
      description:
        "A great product that has a long description to test how the wrapping works in AG Grid.",
      weight: "1kg",
      price: "$10",
      tags: ["New", "Sale"],
    },
    {
      productName: "Product 2",
      description:
        "Another product with an interesting description to display in a wrapped format.",
      weight: "1.5kg",
      price: "$15",
      tags: ["Popular"],
    },
    {
      productName: "Product 3",
      description: "Amazing product with a more detailed description.",
      weight: "0.8kg",
      price: "$8",
      tags: [
        "New",
        "Popular",
        "New",
        "Popular",
        "New",
        "Popular",
        "New",
        "Popular",
        ,
        "New",
        "Popular",
        ,
        "New",
        "Popular",
        "New",
        "Popular",
        "New",
        "Popular",
      ],
    },
    {
      productName: "Product 4",
      description: " cell.",
      weight: "2kg",
      price: "$20",
      tags: ["Sale", "Popular"],
    },
  ];

  const onGridReady = useCallback((params) => {
    setGridApi(params.api);
  }, []);

  // Inline CSS for custom scrollbar
  const gridStyle = {
    height: "400px",
    width: "100%",
    overflowX: "auto", // Enable horizontal scroll
  };

  return (
    <div className="p-6 mx-auto max-w-7xl">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <div className="flex flex-wrap items-center justify-between mb-4 sm:flex-nowrap">
          <div className="flex items-center w-full p-2 mb-4 rounded-md sm:w-1/3 sm:mb-0">
            <h3 className="text-xl font-semibold">Product List</h3>
          </div>
          <Link
            className="px-4 py-2 text-white bg-gray-500 rounded-md"
            to={"/addproduct"}
          >
            Add New Product
          </Link>
        </div>

        <div className="ag-theme-alpine" style={gridStyle}>
          <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            pagination={true}
            onGridReady={onGridReady}
            domLayout="autoHeight"
            paginationPageSize={20}
            enableSorting={true}
            enableFilter={true}
            suppressRowClickSelection={true}
            rowSelection="single"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
