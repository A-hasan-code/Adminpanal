import React, { useState } from "react";

const SalesForm = () => {
  const [customerName, setCustomerName] = useState("");
  const [facebookId, setFacebookId] = useState("");
  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [productName, setProductName] = useState(""); // New state for product name
  const [message, setMessage] = useState("");
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // New state for filtered products
  const [isCustomerDropdownVisible, setIsCustomerDropdownVisible] =
    useState(false);
  const [isProductDropdownVisible, setIsProductDropdownVisible] =
    useState(false); // New state for product dropdown

  // Static customer data
  const [customers, setCustomers] = useState([
    {
      id: 1,
      customerName: "John Doe",
      facebookId: "john_doe_123",
      weight: 10,
      weightUnit: "kg",
      quantity: 2,
      price: 50,
      address: ["123 Main St, City A"],
    },
    {
      id: 2,
      customerName: "Jane Smith",
      facebookId: "jane_smith_456",
      weight: 20,
      weightUnit: "kg",
      quantity: 5,
      price: 100,
      address: ["456 Elm St, City B"],
    },
    {
      id: 3,
      customerName: "Alice Johnson",
      facebookId: "alice_johnson_789",
      weight: 15,
      weightUnit: "kg",
      quantity: 3,
      price: 75,
      address: ["789 Oak St, City C"],
    },
  ]);

  // Static product data
  const [products, setProducts] = useState([
    { id: 1, productName: "Product A", price: 50 },
    { id: 2, productName: "Product B", price: 100 },
    { id: 3, productName: "Product C", price: 75 },
  ]);

  // Function to filter customers based on name or Facebook ID
  const handleSearchChange = (input, field) => {
    if (field === "customerName" || field === "facebookId") {
      const updatedCustomers = customers.filter(
        (customer) =>
          customer.customerName.toLowerCase().includes(input.toLowerCase()) ||
          customer.facebookId.toLowerCase().includes(input.toLowerCase())
      );
      if (field === "customerName") {
        setCustomerName(input);
      } else {
        setFacebookId(input);
      }
      setFilteredCustomers(updatedCustomers);
      setIsCustomerDropdownVisible(input.length > 0); // Show customer dropdown if input exists
    } else if (field === "productName") {
      const updatedProducts = products.filter((product) =>
        product.productName.toLowerCase().includes(input.toLowerCase())
      );
      setProductName(input);
      setFilteredProducts(updatedProducts);
      setIsProductDropdownVisible(input.length > 0); // Show product dropdown if input exists
    }
  };

  // Function to handle selecting a customer from the dropdown
  const handleSelectCustomer = (customer) => {
    setCustomerName(customer.customerName);
    setFacebookId(customer.facebookId);
    setAddress(customer.address[0]);
    setFilteredCustomers([]); // Clear customer dropdown
    setIsCustomerDropdownVisible(false);
  };

  // Function to handle selecting a product from the dropdown
  const handleSelectProduct = (product) => {
    setProductName(product.productName);
    setPrice(product.price); // Set product price when selected
    setFilteredProducts([]); // Clear product dropdown
    setIsProductDropdownVisible(false);
  };

  // Function to create or update a customer and handle the sale creation
  const handleSubmit = () => {
    const existingCustomer = customers.find(
      (customer) =>
        customer.facebookId === facebookId ||
        customer.customerName === customerName
    );

    if (existingCustomer) {
      // Customer exists, check if address is the same
      if (existingCustomer.address.includes(address)) {
        setMessage("Customer address is the same.");
      } else {
        // Address is different, add the new address
        existingCustomer.address.push(address);
        setCustomers([...customers]); // Update customer list with the new address
        setMessage("Customer address updated!");
      }

      // Create a sale
      existingCustomer.sales = existingCustomer.sales || [];
      existingCustomer.sales.push({
        productName,
        weight,
        weightUnit,
        quantity,
        price,
        address,
      });
      setMessage("Sale created successfully!");
    } else {
      // Customer doesn't exist, create new customer
      const newCustomer = {
        id: customers.length + 1,
        customerName,
        facebookId,
        weight,
        weightUnit,
        quantity,
        price,
        address: [address],
        sales: [{ productName, weight, weightUnit, quantity, price, address }],
      };
      setCustomers([...customers, newCustomer]); // Add new customer to the list
      setMessage("New customer added and sale created!");
    }

    // Reset form fields
    setCustomerName("");
    setFacebookId("");
    setWeight("");
    setWeightUnit("kg");
    setQuantity("");
    setPrice("");
    setAddress("");
    setProductName("");
  };

  // Helper function to check if input is a valid number
  const handleNumericChange = (value, setter) => {
    if (!isNaN(value) || value === "") {
      setter(value);
    }
  };

  // Calculate total price
  const total =
    quantity && price ? parseFloat(quantity) * parseFloat(price) : 0;

  return (
    <div className="max-w-lg p-6 mx-auto bg-white border rounded-lg shadow-lg">
      <h2 className="mb-4 text-xl font-bold text-center">Customer Form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="space-y-4"
      >
        {/* Customer Name */}
        <div className="relative flex flex-col">
          <label htmlFor="customerName" className="text-gray-700">
            Customer Name
          </label>
          <input
            type="text"
            id="customerName"
            className="p-2 mt-1 border rounded-md"
            value={customerName}
            onChange={(e) => handleSearchChange(e.target.value, "customerName")}
            required
          />
          {isCustomerDropdownVisible && filteredCustomers.length > 0 && (
            <ul className="absolute w-full mt-1 overflow-auto bg-white border border-gray-300 max-h-48">
              {filteredCustomers.map((customer) => (
                <li
                  key={customer.id}
                  className="p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSelectCustomer(customer)}
                >
                  {customer.customerName} - {customer.facebookId}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Facebook ID */}
        <div className="relative flex flex-col">
          <label htmlFor="facebookId" className="text-gray-700">
            Facebook ID
          </label>
          <input
            type="text"
            id="facebookId"
            className="p-2 mt-1 border rounded-md"
            value={facebookId}
            onChange={(e) => handleSearchChange(e.target.value, "facebookId")}
            required
          />
          {isCustomerDropdownVisible && filteredCustomers.length > 0 && (
            <ul className="absolute w-full mt-1 overflow-auto bg-white border border-gray-300 max-h-48">
              {filteredCustomers.map((customer) => (
                <li
                  key={customer.id}
                  className="p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSelectCustomer(customer)}
                >
                  {customer.customerName} - {customer.facebookId}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Product Name */}
        <div className="relative flex flex-col">
          <label htmlFor="productName" className="text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            className="p-2 mt-1 border rounded-md"
            value={productName}
            onChange={(e) => handleSearchChange(e.target.value, "productName")}
            required
          />
          {isProductDropdownVisible && filteredProducts.length > 0 && (
            <ul className="absolute w-full mt-1 overflow-auto bg-white border border-gray-300 max-h-48">
              {filteredProducts.map((product) => (
                <li
                  key={product.id}
                  className="p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSelectProduct(product)}
                >
                  {product.productName}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Weight */}
        <div className="flex flex-col">
          <label htmlFor="weight" className="text-gray-700">
            Weight
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              id="weight"
              className="p-2 mt-1 border rounded-md"
              value={weight}
              onChange={(e) => handleNumericChange(e.target.value, setWeight)}
              required
            />
            <select
              id="weightUnit"
              value={weightUnit}
              onChange={(e) => setWeightUnit(e.target.value)}
              className="p-2 mt-1 border rounded-md"
            >
              <option value="kg">kg</option>
              <option value="g">g</option>
              <option value="lbs">lbs</option>
            </select>
          </div>
        </div>

        {/* Quantity */}
        <div className="flex flex-col">
          <label htmlFor="quantity" className="text-gray-700">
            Quantity
          </label>
          <input
            type="text"
            id="quantity"
            className="p-2 mt-1 border rounded-md"
            value={quantity}
            onChange={(e) => handleNumericChange(e.target.value, setQuantity)}
            required
          />
        </div>

        {/* Price */}
        <div className="flex flex-col">
          <label htmlFor="price" className="text-gray-700">
            Price
          </label>
          <input
            type="text"
            id="price"
            className="p-2 mt-1 border rounded-md"
            value={price}
            onChange={(e) => handleNumericChange(e.target.value, setPrice)}
            required
          />
        </div>

        {/* Total */}
        <div className="flex flex-col">
          <label htmlFor="total" className="text-gray-700">
            Total
          </label>
          <input
            type="text"
            id="total"
            className="p-2 mt-1 bg-gray-200 border rounded-md"
            value={total.toFixed(2)}
            readOnly
          />
        </div>

        {/* Address */}
        <div className="flex flex-col">
          <label htmlFor="address" className="text-gray-700">
            Address
          </label>
          <input
            type="text"
            id="address"
            className="p-2 mt-1 border rounded-md"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-4 text-white bg-gray-500 rounded-md hover:bg-gray-800"
        >
          Submit
        </button>
      </form>

      {message && (
        <div className="p-3 mt-4 text-green-700 bg-green-100 rounded-md">
          {message}
        </div>
      )}
    </div>
  );
};

export default SalesForm;
