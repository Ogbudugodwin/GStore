import React, { useEffect, useState, useContext } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartcontext";
import { slugify } from "../utils/slugify";
import "../component/CSS/category.css";

export default function CategoryPage() {
  const { categoryName } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart, showToast } = useContext(CartContext);


  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const searchQuery = new URLSearchParams(location.search).get("search") || "";

  const PRODUCTS_PER_PAGE = 8;

  // Fetch products on category change
  useEffect(() => {
    fetch("https://sandbox.mockerito.com/ecommerce/api/products")
      .then((res) => res.json())
      .then((data) => {
        const filtered = categoryName === "all"
          ? data
          : data.filter((p) => slugify(p.category) === categoryName);
        setAllProducts(filtered);
        setCurrentPage(1);
      });
  }, [categoryName]);


  // Apply filters
  useEffect(() => {
    let filtered = [...allProducts];

    // Search filter
    if (searchQuery) {
        filtered = filtered.filter((p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((p) =>
        selectedBrands.some((brand) =>
          p.title.toLowerCase().includes(brand.toLowerCase())
        )
      );
    }

    // Price filter
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    setProducts(filtered);
    setCurrentPage(1);
  }, [selectedBrands, priceRange, allProducts, searchQuery]);

  // Pagination
  const lastIndex = currentPage * PRODUCTS_PER_PAGE;
  const firstIndex = lastIndex - PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  // Brand selection toggle
  const handleBrandToggle = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>{categoryName.replace(/-/g, " ")}</h1>
      </div>

      <div className="category-container">
        {/* SIDEBAR */}
        <aside className="sidebar">
          <h3>Filter By</h3>

          <div className="filter-group">
            <h4>Brand</h4>
            {["Apple", "Samsung", "Google"].map((brand) => (
              <label key={brand}>
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandToggle(brand)}
                />
                {brand}
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h4>Price Range</h4>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([0, parseFloat(e.target.value)])
              }
            />
            <p>
              ₦{priceRange[0]} - ₦{priceRange[1]}
            </p>
          </div>
        </aside>

        {/* PRODUCTS GRID */}
        <div className="products-section">
          {currentProducts.length === 0 ? (
            <p className="no-products">No products found</p>
          ) : (
            <>
              <div className="product-grid">
                {currentProducts.map((p) => (
                  <div
                    key={p.id}
                    className="product-card"
                    onClick={() => navigate(`/product/${slugify(p.title)}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={p.image} alt={p.title} />
                    <h4>{p.title.substring(0, 40)}...</h4>
                    <p>₦{p.price}</p>
                    <button onClick={(e) => {
                        e.stopPropagation();
                        addToCart(p);
                        showToast("Added to cart!");
                    }}>Add to Cart</button>
                  </div>


                ))}
              </div>

              {/* Conditional Pagination */}
              {products.length > PRODUCTS_PER_PAGE && (
                <div className="pagination">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    Prev
                  </button>

                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      className={currentPage === i + 1 ? "active" : ""}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}