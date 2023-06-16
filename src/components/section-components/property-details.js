// import React, { useState, useEffect, Component } from "react";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";
// import sprite from "../../sprite.svg";
// import parse from "html-react-parser";
//import data from "../../data/data.json";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const useDataA = [
  {
    id: 1,
    thumbnail:
      "https://solverwp.com/demo/react/mingrand/assets/img/product/1.png",
    carouselA:
      "https://solverwp.com/demo/react/mingrand/assets/img/project/9.png",
    carouselB:
      "https://solverwp.com/demo/react/mingrand/assets/img/product/cat-1.png",
    carouselC:
      "https://solverwp.com/demo/react/mingrand/assets/img/product/cat-2.png",
    carouselD:
      "https://solverwp.com/demo/react/mingrand/assets/img/product/cat-3.png",
    carouselE:
      "https://solverwp.com/demo/react/mingrand/assets/img/product/cat-5.png",
    carouselF:
      "https://solverwp.com/demo/react/mingrand/assets/img/project/16.png",
    floorPlan:
      "https://solverwp.com/demo/react/mingrand/assets/img/project-single/6.png",
    imageStatic:
      "https://solverwp.com/demo/react/mingrand/assets/img/project-single/7.png",
    video: "https://www.youtube.com/watch?v=Wimkqo8gDZ0&t=1s",
    title: "บ้านเดี่ยว 2 ชั้น",
    detail: "บ้านเดี่ยว 2 ชั้น เนื้อที่ 200 ตรว.",
    price: "3,500,000",
    location: "Bangna Bangkok",
    projectname: "Project Ana",
    author: "https://cdn-icons-png.flaticon.com/512/4128/4128176.png",
    room: 3,
    barthroom: 2,
    area: "100 ตร.วา",
  },
];

const useDataB = [
  {
    id: 1,
    thumbnail:
      "https://solverwp.com/demo/react/mingrand/assets/img/product/2.png",
    carouselA:
      "https://solverwp.com/demo/react/mingrand/assets/img/project/9.png",
    carouselB:
      "https://solverwp.com/demo/react/mingrand/assets/img/product/cat-1.png",
    carouselC:
      "https://solverwp.com/demo/react/mingrand/assets/img/product/cat-2.png",
    carouselD:
      "https://solverwp.com/demo/react/mingrand/assets/img/product/cat-3.png",
    carouselE:
      "https://solverwp.com/demo/react/mingrand/assets/img/product/cat-5.png",
    carouselF:
      "https://solverwp.com/demo/react/mingrand/assets/img/project/16.png",
    floorPlan:
      "https://solverwp.com/demo/react/mingrand/assets/img/project-single/6.png",
    imageStatic:
      "https://solverwp.com/demo/react/mingrand/assets/img/project-single/7.png",
    video: "https://www.youtube.com/watch?v=Wimkqo8gDZ0&t=1s",
    title: "บ้านเดี่ยว 2 ชั้น",
    detail: "บ้านเดี่ยว 2 ชั้น เนื้อที่ 200 ตรว.",
    price: "2,500,000",
    location: "Bangna Bangkok",
    projectname: "Project Ana",
    author: "https://cdn-icons-png.flaticon.com/512/4128/4128176.png",
    room: 3,
    barthroom: 2,
    area: "100 ตร.วา",
  },
];

const imagesA = [
  "https://solverwp.com/demo/react/mingrand/assets/img/project-single/1.png",
  "https://solverwp.com/demo/react/mingrand/assets/img/project-single/5.png",
  "https://solverwp.com/demo/react/mingrand/assets/img/project-single/3.png",
  "https://solverwp.com/demo/react/mingrand/assets/img/project-single/2.png",
  "https://solverwp.com/demo/react/mingrand/assets/img/project-single/5.png",
  "https://solverwp.com/demo/react/mingrand/assets/img/project-single/3.png",
  "https://solverwp.com/demo/react/mingrand/assets/img/project-single/2.png",
];

const imagesB = [
  "https://solverwp.com/demo/react/mingrand/assets/img/project-single/1.png",
  "https://solverwp.com/demo/react/mingrand/assets/img/project-single/5.png",
  "https://solverwp.com/demo/react/mingrand/assets/img/project-single/3.png",
  "https://solverwp.com/demo/react/mingrand/assets/img/project-single/2.png",
  "https://solverwp.com/demo/react/mingrand/assets/img/project-single/5.png",
  "https://solverwp.com/demo/react/mingrand/assets/img/project-single/3.png",
  "https://solverwp.com/demo/react/mingrand/assets/img/project-single/2.png",
];

const PropertyDetails = () => {
  //
  const search = useLocation().search;
  const searchParams = new URLSearchParams(search);
  const pathImage = searchParams.get("imgId");
  console.log("pathImage ==> ", pathImage);

  const [images, setImages] = useState([]);
  useEffect(() => {
    fetchImages();
  });

  const fetchImages = () => {
    // console.log("data --> ", data);
    // setImages(imagesA);
    if (pathImage === "1") {
      console.log("pathImage 1==> ");
      setImages(imagesA);
    } else {
      console.log("pathImage 2==> ");
      setImages(imagesB);
    }
  };

  // if (pathImage === "1") {
  //   console.log("pathImage 1==> ");
  // } else {
  //   console.log("pathImage 2==> ");
  // }

  //

  const rotateAnimationHandler = (props, state) => {
    const transitionTime = props.transitionTime + "ms";
    const transitionTimingFunction = "ease-in-out";
    let slideStyle = {
      display: "block",
      minHeight: "100%",
      transitionTimingFunction: transitionTimingFunction,
      msTransitionTimingFunction: transitionTimingFunction,
      MozTransitionTimingFunction: transitionTimingFunction,
      WebkitTransitionTimingFunction: transitionTimingFunction,
      OTransitionTimingFunction: transitionTimingFunction,
      transform: `rotate(0)`,
      position:
        state.previousItem === state.selectedItem ? "relative" : "absolute",
      inset: "0 0 0 0",
      zIndex: state.previousItem === state.selectedItem ? "1" : "-2",
      opacity: state.previousItem === state.selectedItem ? "1" : "0",
      WebkitTransitionDuration: transitionTime,
      MozTransitionDuration: transitionTime,
      OTransitionDuration: transitionTime,
      transitionDuration: transitionTime,
      msTransitionDuration: transitionTime,
    };
    return {
      slideStyle,
      selectedStyle: {
        ...slideStyle,
        opacity: 1,
        position: "relative",
        zIndex: 2,
        filter: `blur(0)`,
      },
      prevStyle: {
        ...slideStyle,
        transformOrigin: " 0 100%",
        transform: `rotate(${
          state.previousItem > state.selectedItem ? "-45deg" : "45deg"
        })`,
        opacity: "0",
        filter: `blur( ${
          state.previousItem === state.selectedItem ? "0px" : "5px"
        })`,
      },
    };
  };
  //==========================

  const $ = window.$;
  $("body").addClass("body-bg");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  let publicUrl = process.env.PUBLIC_URL + "/";

  const fetchProducts = () => {
    // console.log("useDataA --> ", useDataA);
    // setProducts(useDataA);
    if (pathImage === "1") {
      console.log("pathImage 1==> ");
      setProducts(useDataA);
    } else {
      console.log("pathImage 2==> ");
      setProducts(useDataB);
    }
  };

  return (
    <div className="property-page-area pd-top-120 pd-bottom-90 ">
      {products.map((product) => (
        <div className="container" key={product.id}>
          <div className="property-details-top pd-bottom-70">
            <div className="property-details-top-inner">
              <div className="row">
                <div className="col-lg-7">
                  <h3>Lorem ipsum dolor eiusmod.</h3>
                  <p>
                    <img
                      src={publicUrl + "assets/img/icon/location2.png"}
                      alt="img"
                    />{" "}
                    {product.location}{" "}
                  </p>
                  <ul>
                    <li>3 Bedroom</li>
                    <li>Bathroom</li>
                    <li>1026 sqft-edit</li>
                  </ul>
                </div>
                <div className="col-lg-5 text-lg-right">
                  <h4>฿ {product.price}</h4>
                  <div className="btn-wrap">
                    <a className="btn btn-base btn-sm" href="#">
                      BUILD
                    </a>
                    <a className="btn btn-blue btn-sm" href="#">
                      BUY
                    </a>
                    <a className="btn btn-blue btn-sm" href="#">
                      RENT
                    </a>
                  </div>
                  <ul>
                    <li>
                      <img
                        src={publicUrl + "assets/img/icon/1.png"}
                        alt="img"
                      />
                      Marce 9 , 2020
                    </li>
                    <li>
                      <img
                        src={publicUrl + "assets/img/icon/2.png"}
                        alt="img"
                      />
                      4263
                    </li>
                    <li>
                      <img
                        src={publicUrl + "assets/img/icon/3.png"}
                        alt="img"
                      />
                      68
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="product-thumbnail-wrapper">
              <div className="box">
                <Carousel
                  showIndicators
                  renderIndicator={(clickHandler, isSelected, index) => {
                    return (
                      <li
                        onClick={clickHandler}
                        className={`ind ${isSelected ? "active" : ""}`}
                        key={index}
                        role="button"
                      />
                    );
                  }}
                  statusFormatter={(currentItem, total) => {
                    return (
                      <p>
                        image {currentItem} of {total}
                      </p>
                    );
                  }}
                  transitionTime={310}
                  animationHandler={rotateAnimationHandler}
                  swipeable={false}
                >
                  {images.map((URL, index) => (
                    <div className="slide">
                      <img alt="sample_file" src={URL} key={index} />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
          <div className="row go-top">
            <div className="col-lg-8">
              <div className="single-property-details-inner">
                <h4>Daily Apartment</h4>
                <p>
                  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                  consectetuLorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                  consectetuLorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.{" "}
                </p>
                <div className="single-property-grid">
                  <h4>Poperty Details</h4>
                  <div className="row">
                    <div className="col-md-4">
                      <ul>
                        <li>Bedrooms: 3</li>
                        <li>All Rooms: 12</li>
                        <li>Kitchen: 2</li>
                        <li>Type: Privet House</li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li>Bedrooms: 3</li>
                        <li>Livingroom: 2</li>
                        <li>Year Built: 2020</li>
                        <li>Area: 1258</li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li>Bedrooms: 3</li>
                        <li>All Rooms: 12</li>
                        <li>Kitchen: 2</li>
                        <li>Type: Privet House</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="single-property-grid">
                  <h4>Amenities</h4>
                  <div className="row">
                    <div className="col-md-4">
                      <ul>
                        <li>
                          <i className="fa fa-check" />
                          Air Conditionar
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Fencing
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Internet
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li>
                          <i className="fa fa-check" />
                          Wardrobes
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          School
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Park
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li>
                          <i className="fa fa-check" />
                          Dishwasher
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Floor Covering
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Internet
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="single-property-grid">
                  <h4>Additional Details</h4>
                  <div className="row">
                    <div className="col-md-4">
                      <ul>
                        <li>Remodale Year: 3</li>
                        <li>Amenites: Half of Fame</li>
                        <li>Equepment: Grill-gass</li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li>Diposit: 7065$</li>
                        <li>Pool Size: 1620</li>
                        <li>Additional Room: 2</li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li>Ground: 2</li>
                        <li>Additional Room: 2</li>
                        <li>Floor: 1203</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="single-property-grid">
                  <h4>Proparty Attachment</h4>
                  <div className="row">
                    <div className="col-sm-6">
                      <a href="PDFLINK" download>
                        <img
                          src={publicUrl + "assets/img/icon/9.png"}
                          alt="img"
                        />
                      </a>
                    </div>
                    <div className="col-sm-6 mt-2 mt-sm-0">
                      <a href="PDFLINK" download>
                        <img
                          src={publicUrl + "assets/img/icon/9.png"}
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="single-property-grid">
                  <h4>Estate Location</h4>
                  <div className="property-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d198059.49240377638!2d-84.68048827338674!3d39.13652252762691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1615660592820!5m2!1sen!2sbd" />
                  </div>
                </div>
                {products.map((product) => (
                  <div className="single-property-grid" key={product.id}>
                    {/* <div className="single-property-grid"> */}
                    <h4>Floor Plans</h4>
                    {/* <img
                    src="https://solverwp.com/demo/react/mingrand/assets/img/project-single/6.png"
                    alt="img"
                  /> */}
                    <img
                      className="photo"
                      src={product.floorPlan}
                      alt={product.id}
                    />
                  </div>
                ))}
                <div className="single-property-grid">
                  <h4>Intro Video</h4>
                  <div
                    // style={{
                    //   backgroundImage: `url(https://solverwp.com/demo/react/mingrand/assets/img/product/1.png))`,
                    // }}
                    // className="property-video text-center"
                    className="property-video text-center"
                    style={{
                      background:
                        // "url( https://solverwp.com/demo/react/mingrand/assets/img/project-single/1.png)",
                        `url(  ${product.thumbnail} )`,
                    }}
                  >
                    <a
                      className="play-btn"
                      // href="https://www.youtube.com/embed/Wimkqo8gDZ0"
                      href={product.video}
                      data-effect="mfp-zoom-in"
                    >
                      <i className="fa fa-play" aria-hidden="true" />
                    </a>
                  </div>
                </div>
                <div className="single-property-grid">
                  <h4>Whats Nearby?</h4>
                  <div className="media single-review-inner">
                    <div className="media-left">
                      <div className="thumb">
                        <img
                          src={publicUrl + "assets/img/project-single/9.png"}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="media-body align-self-center">
                      <div className="row">
                        <div className="col-md-8">
                          <h5>Eureka/Harvey Milk Branch</h5>
                          <p>consectetuLorem ipsum dolor sit amet</p>
                        </div>
                        <div className="col-md-4 text-md-right">
                          <p className="ratting-title">
                            <span>32</span> Reviews
                          </p>
                          <div className="ratting-inner">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="media single-review-inner">
                    <div className="media-left">
                      <div className="thumb">
                        <img
                          src={publicUrl + "assets/img/project-single/10.png"}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="media-body align-self-center">
                      <div className="row">
                        <div className="col-md-8">
                          <h5>Milbaly Extension &amp; Academy</h5>
                          <p>consectetuLorem ipsum dolor sit amet</p>
                        </div>
                        <div className="col-md-4 text-md-right">
                          <p className="ratting-title">
                            <span>32</span> Reviews
                          </p>
                          <div className="ratting-inner">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="media single-review-inner">
                    <div className="media-left">
                      <div className="thumb">
                        <img
                          src={publicUrl + "assets/img/project-single/11.png"}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="media-body align-self-center">
                      <div className="row">
                        <div className="col-md-8">
                          <h5>Nilgao School</h5>
                          <p>consectetuLorem ipsum dolor sit amet</p>
                        </div>
                        <div className="col-md-4 text-md-right">
                          <p className="ratting-title">
                            <span>32</span> Reviews
                          </p>
                          <div className="ratting-inner">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-property-grid">
                  <h4>Page statistics</h4>
                  {/* <img
                    src={publicUrl + "assets/img/project-single/7.png"}
                    alt="img"
                  /> */}
                  <img
                    className="photo"
                    src={product.imageStatic}
                    alt={product.id}
                  />
                </div>
                <form className="single-property-comment-form">
                  <div className="single-property-grid bg-black">
                    <div className="single-property-form-title">
                      <div className="row">
                        <div className="col-md-8">
                          <h4>Post Your Comment</h4>
                        </div>
                        <div className="col-md-4 text-md-right">
                          <div className="ratting-inner">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <label className="single-input-inner style-bg">
                          <span className="label">Enter Your Name</span>
                          <input type="text" placeholder="Your name here...." />
                        </label>
                      </div>
                      <div className="col-lg-6">
                        <label className="single-input-inner style-bg">
                          <span className="label">Enter Your MAil</span>
                          <input
                            type="text"
                            placeholder="Your email here...."
                          />
                        </label>
                      </div>
                      <div className="col-12">
                        <label className="single-input-inner style-bg">
                          <span className="label">Enter Your Messege</span>
                          <textarea
                            placeholder="Enter your messege here...."
                            defaultValue={""}
                          />
                        </label>
                      </div>
                      <div className="col-12 mb-4">
                        <button className="btn btn-base radius-btn">
                          Submit Now
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="sidebar-area">
                <div className="widget widget-author text-center">
                  <h4 className="widget-title">About Me</h4>
                  <div className="thumb">
                    {/* <img src={publicUrl + "assets/img/agent/1.png"} alt="img" /> */}
                    <img
                      className="crop"
                      src={product.author}
                      alt={product.id}
                    />
                  </div>
                  <div className="details">
                    <h5>Sandara Mrikon</h5>
                    <p>
                      Lorem ipsum dolor amet, Lore ipsum dolor sit amet,
                      consectetur et eiLorem ipsum dolor sit amet
                    </p>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="fab fa-linkedin-in"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget widget-category">
                  <h5 className="widget-title">Category</h5>
                  <ul>
                    <li>
                      <a href="#">
                        Design <span>26</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Villa House <span>20</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Business <span>21</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Global World <span>31</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Technology <span>12</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Ui Design <span>12</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-place">
                  <h5 className="widget-title">Place</h5>
                  <ul>
                    <li>
                      New York <span>26</span>
                    </li>
                    <li>
                      Love Road <span>20</span>
                    </li>
                    <li>
                      Beach Side <span>21</span>
                    </li>
                    <li>
                      Golden city <span>31</span>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-news">
                  <h5 className="widget-title">Popular Feeds</h5>
                  <div className="single-news-wrap media">
                    <div className="thumb">
                      <img
                        src={publicUrl + "assets/img/blog/5.png"}
                        alt="img"
                      />
                    </div>
                    <div className="media-body align-self-center">
                      <h6>
                        <Link to="/blog-details">
                          Dolor eorem ipsum sit amet Lorem ipsum
                        </Link>
                      </h6>
                      <p className="date">
                        <i className="far fa-calendar-alt" />
                        25 Aug 2020
                      </p>
                    </div>
                  </div>
                  <div className="single-news-wrap media">
                    <div className="thumb">
                      <img
                        src={publicUrl + "assets/img/blog/6.png"}
                        alt="img"
                      />
                    </div>
                    <div className="media-body align-self-center">
                      <h6>
                        <Link to="/blog-details">
                          Responsive Web And Desktop Develope
                        </Link>
                      </h6>
                      <p className="date">
                        <i className="far fa-calendar-alt" />
                        25 Aug 2020
                      </p>
                    </div>
                  </div>
                  <div className="single-news-wrap media">
                    <div className="thumb">
                      <img
                        src={publicUrl + "assets/img/blog/7.png"}
                        alt="img"
                      />
                    </div>
                    <div className="media-body align-self-center">
                      <h6>
                        <Link to="/blog-details">
                          Admin Web is Django Highlig Models
                        </Link>
                      </h6>
                      <p className="date">
                        <i className="far fa-calendar-alt" />
                        25 Aug 2020
                      </p>
                    </div>
                  </div>
                </div>
                <div className="widget widget-tags">
                  <h5 className="widget-title">Popular Tags</h5>
                  <div className="tagcloud">
                    <Link to="/blog">Popular</Link>
                    <Link to="/blog">Art</Link>
                    <Link to="/blog">Business</Link>
                    <Link to="/blog">Design</Link>
                    <Link to="/blog">Creator</Link>
                    <Link to="/blog">CSS</Link>
                    <Link to="/blog">Planing</Link>
                    <Link to="/blog">Creative</Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  // }
};

export default PropertyDetails;
