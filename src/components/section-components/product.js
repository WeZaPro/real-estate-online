import React, { useState, useEffect } from "react";

//import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css";
import data from "../../data/data.json";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  let publicUrl = process.env.PUBLIC_URL + "/";

  const fetchProducts = () => {
    // axios
    //   //.get("https://jsonplaceholder.typicode.com/posts")
    //   .get("https://dummyjson.com/products")
    //   .then((res) => {
    //     console.log("res--->", res);
    //     setProducts(res.data.products);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    console.log("data --> ", data);
    setProducts(data);
  };
  return (
    <div>
      <div className="container">
        <div className="section-title text-center ">
          <h6>We are offring the best real estate</h6>
          <h2>Best House For You</h2>
        </div>
        <div className="item-container">
          {/* <div className="thumb"></div>
          {products.map((product) => (
            <div className="card" key={product.id}>
              <div className="geeks">
                <img
                  className="photo"
                  src={product.thumbnail}
                  alt={product.id}
                />
              </div>
              <div className="bottom-left">{product.title}</div>
            </div>
          ))} */}
          {products.map((product) => (
            <div className="single-product-wrap" key={product.id}>
              <div className="thumb">
                {/* <img src={publicUrl + "assets/img/product/1.png"} alt="img" /> */}
                <img
                  className="photo"
                  src={product.thumbnail}
                  alt={product.id}
                />
                {/* <Link className="cat" to="/property-details"> */}
                <Link
                  className="cat"
                  to={`/property-details?imgId=${product.id}`}
                >
                  For Sell
                </Link>
              </div>
              <div className="product-wrap-details">
                <div className="media">
                  <div className="author">
                    {/* <img
                      src={publicUrl + "assets/img/author/1.png"}
                      alt="img"
                    /> */}
                    <img
                      className="imgA"
                      src={product.author}
                      alt={product.id}
                    />
                  </div>
                  <div className="media-body">
                    <h6>
                      <Link to="/property">{product.projectname}</Link>
                    </h6>
                    <p>
                      <img
                        src={publicUrl + "assets/img/icon/location-alt.png"}
                        alt="img"
                      />
                      {product.location}{" "}
                    </p>
                  </div>
                  <a className="fav-btn float-right" href="#">
                    <i className="far fa-heart" />
                  </a>
                </div>
                <div className="product-meta">
                  <span className="price">฿ {product.price}</span>
                  <div className="float-right d-inline-block">
                    <ul>
                      <li>
                        <img
                          src={publicUrl + "assets/img/icon/triangle.png"}
                          alt="img"
                        />
                        {product.barthroom}
                      </li>
                      <li>
                        <img
                          src={publicUrl + "assets/img/icon/bed.png"}
                          alt="img"
                        />
                        {product.room}
                      </li>
                      <li>
                        <img
                          src={publicUrl + "assets/img/icon/wall.png"}
                          alt="img"
                        />
                        {product.area}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FeaturedProducts;
