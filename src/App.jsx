import React, { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const products = [
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football",
    },
    {
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball",
    },
    {
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball",
    },
    {
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch",
    },
    {
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5",
    },
    {
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "iPhone 7",
    },
    {
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "iPhone 7",
    },
  ];

  const search = (event) => {
    setSearchTerm(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.name.includes(searchTerm);
    const matchesStock = !inStockOnly || product.stocked;
    return matchesSearchTerm && matchesStock;
  });

  return (
    <div className="FilterableProductTable">
      <div className="searchBar">
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={search}
          />
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
          />
          <label htmlFor="checkbox">Only show products in stock</label>
        </form>
      </div>
      <div className="ProductTable">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
