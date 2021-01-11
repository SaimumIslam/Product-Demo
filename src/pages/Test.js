import React, { useEffect, Fragment, useRef } from "react";
import "./ProductCard.css";

import logo from "./assets/img/logo.png";
import blue from "./assets/img/blue.png";
import black from "./assets/img/black.png";
import green from "./assets/img/green.png";
import red from "./assets/img/red.png";
import orange from "./assets/img/orange.png";

const Info = () => {
  const shoeName = (
    <div className='shoeName'>
      <div>
        <h1 className='big'>Nike Zoom KD 12</h1>
        <span className='new'>new</span>
      </div>
      <h3 className='small'>Men's running shoes</h3>
    </div>
  );

  const description = (
    <div className='description'>
      <h3 className='title'>Product Info</h3>
      <p className='text'>
        Ensure a comfortable running session by wearing this pair of cool
        running shoes from Nike.
      </p>
    </div>
  );

  const ColorContainer = (
    <div className='color-container'>
      <h3 className='title'>Color</h3>
      <div className='colors'>
        <span className='color active' primary='#2175f5' color='blue'></span>
        <span className='color' primary='#f84848' color='red'></span>
        <span className='color' primary='#29b864' color='green'></span>
        <span className='color' primary='#ff5521' color='orange'></span>
        <span className='color' primary='#444' color='black'></span>
      </div>
    </div>
  );

  const SizeContainer = (
    <div className='size-container'>
      <h3 className='title'>size</h3>
      <div className='sizes'>
        <span className='size'>7</span>
        <span className='size'>8</span>
        <span className='size active'>9</span>
        <span className='size'>10</span>
        <span className='size'>11</span>
      </div>
    </div>
  );

  const BuySection = (
    <div className='buy-price'>
      <a href='/#' className='buy'>
        <i className='fas fa-shopping-cart'></i>Add to card
      </a>
      <div className='price'>
        <i className='fas fa-dollar-sign'></i>
        <h1>149.99</h1>
      </div>
    </div>
  );

  return (
    <div className='info'>
      {shoeName}
      {description}
      {ColorContainer}
      {SizeContainer}
      {BuySection}
    </div>
  );
};

const ProductImages = () => {
  return (
    <Fragment>
      <img src={blue} alt='blue shoe' className='shoe show' color='blue' />
      <img src={red} alt='red shoe' className='shoe' color='red' />
      <img src={green} alt='green shoe' className='shoe' color='green' />
      <img src={orange} alt='orange shoe' className='shoe' color='orange' />
      <img src={black} alt='black shoe' className='shoe ' color='black' />
    </Fragment>
  );
};

const Gradients = () => {
  return (
    <div className='gradients'>
      <div className='gradient behind' color='blue'></div>
      <div className='gradient' color='red'></div>
      <div className='gradient' color='green'></div>
      <div className='gradient' color='orange'></div>
      <div className='gradient' color='black'></div>
    </div>
  );
};

const Home = () => {
  let sizes = document.querySelectorAll(".size");
  let colors = document.querySelectorAll(".color");
  let shoes = document.querySelectorAll(".shoe");
  let gradients = document.querySelectorAll(".gradient");
  let shoeBackground = useRef({});
  let shoeHeight;
  let prevColor = "blue";
  let animateOrNot = true;

  function changeColor() {
    if (!animateOrNot) {
      console.log("waittttt");
      return;
    }
    const primary = this.getAttribute("primary");
    const color = this.getAttribute("color");
    const shoe = document.querySelector(`.shoe[color="${color}"]`);
    const gradient = document.querySelector(`.gradient[color="${color}"]`);
    const prevGradient = document.querySelector(
      `.gradient[color="${prevColor}"]`
    );

    // showing correct color
    colors.forEach((color) => color.classList.remove("active"));
    this.classList.add("active");

    // changing primary css variable
    document.documentElement.style.setProperty("--primary", primary);

    // showing correct img
    shoes.forEach((s) => s.classList.remove("show"));
    shoe.classList.add("show");

    // dealing with gradient
    gradients.forEach((g) => g.classList.remove("display", "behind"));
    prevGradient.classList.add("behind");
    gradient.classList.add("display");

    // logic
    prevColor = color;
    animateOrNot = false;

    // hack
    setTimeout(() => {
      animateOrNot = true;
    }, 800);
  }

  function changeSize() {
    sizes = document.querySelectorAll(".size");
    sizes.forEach((size) => size.classList.remove("active"));
    this.classList.add("active");
  }

  // for responsive behaviour
  const changeHeight = () => {
    var x = window.matchMedia("(max-width:1000px)");
    shoes = document.querySelectorAll(".shoe");

    !shoes ? (shoeHeight = 0) : (shoeHeight = shoes[0].offsetHeight);

    if (x.matches) {
      if (shoeHeight === 0) {
        try {
          setTimeout(changeHeight, 50);
        } catch (error) {
          alert("Something is Wrong!!");
        }
      }
      shoeBackground.current.style.height = `${shoeHeight * 0.9}px`;
    } else if (!!shoeBackground) {
      // go back to default
      shoeBackground.current.style.height = "475px";
    }
  };

  useEffect(() => {
    colors.forEach((color) => color.addEventListener("click", changeColor));
    sizes.forEach((size) => size.addEventListener("click", changeSize));

    window.addEventListener("resize", changeHeight);
    // return () => window.removeEventListener("resize", changeHeight);
  });

  return (
    <div className='Home'>
      <div className='container'>
        <div className='card'>
          <div className='shoeBackground' ref={shoeBackground}>
            <Gradients />

            <h1 className='nike'>nike</h1>
            <img src={logo} alt='logo' className='logo' />
            <a href='/#' className='share'>
              <i className='fas fa-share-alt'></i>
            </a>

            <ProductImages />
          </div>
          <Info />
        </div>
      </div>
    </div>
  );
};

export default Home;
