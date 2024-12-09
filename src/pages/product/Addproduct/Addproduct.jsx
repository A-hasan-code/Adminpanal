import React, { useState } from "react";
import { FaTag } from "react-icons/fa"; // Importing tag icon from react-icons

const Addproduct = ({ product = null, onSave }) => {
  const [productName, setProductName] = useState(product?.name || "");
  const [description, setDescription] = useState(product?.description || "");
  const [weight, setWeight] = useState(product?.weight || "");
  const [price, setPrice] = useState(product?.price || "");
  const [tags, setTags] = useState(product?.tags || []);
  const [newTag, setNewTag] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg"); // Default unit is kg

  const handleTagAdd = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleWeightChange = (e) => {
    const value = e.target.value;
    // Allow clearing of input, and make sure value is a valid positive number, including decimals
    if (value === "" || /^[0-9]*\.?[0-9]+$/.test(value)) {
      setWeight(value);
    }
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    // Allow clearing of input, and make sure value is a valid positive number
    if (value === "" || (/^\d+$/.test(value) && parseInt(value) > 0)) {
      setPrice(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!weight || !price || weight <= 0 || price <= 0) {
      alert("Weight and price must be positive whole numbers.");
      return;
    }

    const productData = {
      name: productName,
      description,
      weight: parseInt(weight), // storing weight as integer
      weightUnit,
      price: parseInt(price), // storing price as integer
      tags,
    };

    onSave(productData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg p-6 mx-auto space-y-6 border rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-semibold">
        {product ? "Edit Product" : "Add New Product"}
      </h2>

      {/* Product Name */}
      <div className="flex flex-col">
        <label
          htmlFor="productName"
          className="text-sm font-medium text-gray-700"
        >
          Product Name
        </label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      {/* Product Description */}
      <div className="flex flex-col">
        <label
          htmlFor="description"
          className="text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Weight */}
      <div className="flex flex-col">
        <label htmlFor="weight" className="text-sm font-medium text-gray-700">
          Weight (greater than 0)
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={handleWeightChange}
            className="px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            min="0.01"
            required
          />
          <select
            value={weightUnit}
            onChange={(e) => setWeightUnit(e.target.value)}
            className="px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="kg">Kg</option>
            <option value="g">Grams</option>
            <option value="lbs">Pounds</option>
          </select>
        </div>
      </div>

      {/* Price */}
      <div className="flex flex-col">
        <label htmlFor="price" className="text-sm font-medium text-gray-700">
          Price (greater than 0)
        </label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={handlePriceChange}
          className="px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          min="1"
          required
        />
      </div>

      {/* Tags */}
      <div className="flex flex-col">
        <label htmlFor="tags" className="text-sm font-medium text-gray-700">
          Tags
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            id="tags"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            className="px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="button"
            onClick={handleTagAdd}
            className="px-3 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-800"
          >
            <FaTag /> {/* Using the FaTag icon from react-icons */}
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block px-3 py-1 text-sm text-gray-700 bg-gray-200 rounded-full"
            >
              {tag}
              <button
                type="button"
                onClick={() => handleTagRemove(tag)}
                className="ml-2 text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 text-white bg-gray-800 border-white rounded-lg border-x-2 hover:bg-white hover:text-black hover:border-black"
        >
          {product ? "Save Changes" : "Add Product"}
        </button>
      </div>
    </form>
  );
};

export default Addproduct;
