import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import {
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Spinner,
} from "reactstrap";
import heroImg from "../assets/images/mainpage.webp";
import "../styles/hero-section.css";
import Category from "../components/UI/category/Category";
import "../styles/home.css";
import featureImg01 from "../assets/images/pickup.png";
import featureImg02 from "../assets/images/return.png";
import featureImg03 from "../assets/images/policy.png";

import shopCategoryImg01 from "../assets/images/electronics1.png";
import shopCategoryImg02 from "../assets/images/jwelery1.png";
import shopCategoryImg03 from "../assets/images/men1.png";
import shopCategoryImg04 from "../assets/images/women.png";
import ProductCard from "../components/UI/product-card/ProductCard";
import whyImg from "../assets/images/location.png";
import networkImg from "../assets/images/network.png";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/shopping-cart/productsSlice.js";

const featureData = [
  {
    title: "Delivery At Home",
    imgUrl: featureImg01,
    desc: "Get your favorite products delivered right to your doorstep with ease. Shop online and enjoy fast, reliable, and hassle-free home delivery!",
  },
  {
    title: "Easy Payment",
    imgUrl: featureImg02,
    desc: "Experience hassle-free shopping with our easy and secure payment options. Convenience and safety at your fingertips!",
  },
  {
    title: "Refund Policy",
    imgUrl: featureImg03,
    desc: "Shop with confidence! Our customer-friendly refund policy ensures easy returns and quick refunds for a seamless shopping experience.",
  },
];
const Home = () => {
  const [category, setCategory] = useState("ALL");
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]); // For the filtered data
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const productsPerPage = 5;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    if (category === "ALL") {
      setFilteredProducts(products.slice(startIndex, endIndex)); // Reset to all products
    } else {
      const filtered = products.filter((item) => item.category === category);
      setFilteredProducts(filtered); // Update filtered list
    }
  }, [category, currentPage, products]); // Dependency includes allProducts to reflect updates from fetch
  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1)); // Prevent going below page 1
  };

  if (loading) {
    return (
      <Container className="text-center">
        <Spinner color="primary" />
      </Container>
    );
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero_title">
                  <span>Shopping?</span>
                  Just wait <br /> shopping at
                  <span> your door</span>
                </h1>
                <p></p>
                <div className="hero_btns d-flex align-items-center gap-5 mt-4">
                  <button className="order_btn d-flex align-items-center justify-content-between">
                    Order now <i className="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all_shops-btn">See all Material</button>
                </div>
                <div className="hero_service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping_icon">
                      <i className="ri-car-line"></i>
                    </span>{" "}
                    No Shipping charge
                  </p>

                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping_icon">
                      <i className="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature_subtitle mb-4">What we serve</h5>
              <h2 className="feature_title">Just sit back at home</h2>
              <h2 className="feature_title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature_text">
                Experience hassle-free shopping from the comfort of your home
                with our ई-commerce platform. We bring you an extensive range of
                products, from electronics to fashion, groceries, and more,
                tailored to meet your needs. With a user-friendly interface,
                secure payment options, and swift delivery, we make shopping a
                breeze.
              </p>
              <p className="feature_text">
                Enjoy personalized recommendations, exclusive deals, and 24/7
                customer support. Whether you're looking for the latest gadgets,
                trendy clothing, or daily essentials, we've got you covered. Sit
                back, relax, and let us take care of your shopping needs!
              </p>
            </Col>
            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature_item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container className="">
          <Row className="">
            <Col lg="12" className="text-center">
              <h2>Popular Items</h2>
            </Col>
            <Col lg="12">
              <div className="shop_category d-flex align-items-center justify-content-center gap-4">
                <button
                  className="all_btn shopBtnActive"
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className="d-flex align-items-center gap-2"
                  onClick={() => setCategory("electronics")}
                >
                  <img
                    src={shopCategoryImg01}
                    alt=""
                    className="img-background"
                  />
                  Electronics
                </button>
                <button
                  className="d-flex align-items-center gap-2"
                  onClick={() => setCategory("jewelery")}
                >
                  <img
                    src={shopCategoryImg02}
                    alt=""
                    className="img-background"
                  />
                  Jewelery
                </button>
                <button
                  className="d-flex align-items-center gap-2"
                  onClick={() => setCategory("men's clothing")}
                >
                  <img
                    src={shopCategoryImg03}
                    alt=""
                    className="img-background"
                  />
                  Men's
                </button>
                <button
                  className="d-flex align-items-center gap-2"
                  onClick={() => setCategory("women's clothing")}
                >
                  <img
                    src={shopCategoryImg04}
                    alt=""
                    className="img-background"
                  />
                  Women's
                </button>
              </div>
            </Col>
            {filteredProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
          <Row>
            {category === "ALL" && (
              <Col className="text-center mt-4">
                <button
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  className="btn btn-primary me-3"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentPage * productsPerPage >= products.length}
                  className="btn btn-primary"
                >
                  Next
                </button>
              </Col>
            )}
          </Row>
        </Container>
      </section>
      <section className="why-choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>
            <Col lg="6" md="6">
              <div className="why_tasty_treat">
                <h2 className="tasty_treat-title mb-4">
                  Why <span>Shop with Us?</span>
                </h2>
                <p className="tasty_treat_desc">
                  Discover a seamless shopping experience with us, where quality
                  meets convenience. Shop anytime, anywhere, and enjoy top-notch
                  services crafted to make your life easier and more delightful.
                </p>
                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose_us_title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>
                      Wide Range of Products
                    </p>
                    <p className="choose_us_desc">
                      The best things in life are just a click away. Find what
                      you need, when you need it.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose_us_title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>
                      Exceptional Customer Support
                    </p>
                    <p className="choose_us_desc">
                      Great customer service is not a department, it's our
                      commitment to you.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose_us_title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>
                      Shop Anytime, Anywhere
                    </p>
                    <p className="choose_us_desc">
                      Convenience at your fingertips – shop from the comfort of
                      your home or on the go.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial">
                <h5 className="testimonial_subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial_title mb-4">
                  What our <span>customers </span>say about us
                </h2>
                <p className="testimonial_desc">
                  Your satisfaction is our top priority! Hear from our happy
                  shoppers who have discovered a seamless and delightful online
                  shopping experience with us.
                </p>
                <TestimonialSlider />
              </div>
            </Col>
            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
