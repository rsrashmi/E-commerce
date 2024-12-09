import React from "react";
import { Container, Row, Col } from "reactstrap";
import categoryImg01 from "../../../assets/images/electronics1.png";
import categoryImg02 from "../../../assets/images/jwelery1.png";
import categoryImg03 from "../../../assets/images/men1.png";
import categoryImg04 from "../../../assets/images/women.png";

import "../../../styles/category.css";
const categoryData = [
  {
    display: "Electronics",
    imgUrl: categoryImg01,
  },
  {
    display: "jewellery",
    imgUrl: categoryImg02,
  },
  {
    display: "Men's Cloth's",
    imgUrl: categoryImg03,
  },
  {
    display: "Women's Cloth's",
    imgUrl: categoryImg04,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className="category_item d-flex align-items-center gap-3">
              <div className="category_img">
                <img src={item.imgUrl} alt="category_item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
