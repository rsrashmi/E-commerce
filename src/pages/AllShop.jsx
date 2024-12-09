import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Col, Container, Row } from "reactstrap";
import ProductCard from "../components/UI/product-card/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/shopping-cart/productsSlice";
import { debounce } from "lodash";
const AllShop = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default"); // Sort option state
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSearchChange = debounce((e) => {
    setSearchTerm(e.target.value); // Update search term
  }, 500); // Debounce with 500ms delay
  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle the sort option change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };
  // Sort products based on the selected sort option
  const sortedProducts = [...filteredProducts];
  if (sortOption === "ascending") {
    sortedProducts.sort((a, b) => a.title.localeCompare(b.title)); // Sort A-Z
  } else if (sortOption === "descending") {
    sortedProducts.sort((a, b) => b.title.localeCompare(a.title)); // Sort Z-A
  } else if (sortOption === "high-price") {
    sortedProducts.sort((a, b) => b.price - a.price); // Sort by high price
  } else if (sortOption === "low-price") {
    sortedProducts.sort((a, b) => a.price - b.price); // Sort by low price
  }
  return (
    <Helmet title="All-Shops">
      <CommonSection title="Shopping" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="search_widget">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  onChange={handleSearchChange}
                />
                <span>
                  <i className="ri-sarch-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="sorting_widget">
                <select onChange={handleSortChange} value={sortOption}>
                  <option value="default">Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              sortedProducts.map((item) => (
                <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                  {" "}
                  <ProductCard item={item} key={item.id} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllShop;
