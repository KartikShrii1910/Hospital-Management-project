//import React, { Component ,useState,render} from 'react';
import { useNavigate } from "react-router-dom";
import Blogo from "./NavBar";
//import { NavLink } from 'react-router-dom';
//import { useState } from 'react';

const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Blogo />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <button
                  type="button"
                  className="btn btn-light "
                  aria-current="page"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </li>
              <li className="nav-item mx-2">
                <button
                  type="button"
                  className="btn btn-light "
                  aria-current="page"
                  onClick={() => navigate("/patientregister")}
                >
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item  active">
            <img
              src="https://source.unsplash.com/1000x300/?hospital,hospital"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item ">
            <img
              src="https://source.unsplash.com/1000x300/?hospital,doctor"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item ">
            <img
              src="https://source.unsplash.com/1000x300/?hospital,patient"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="row featurette d-flex justify-content-center align-items-center">
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1"><u>Care</u><span className="text-muted"></span></h2>
        <p className="lead"> We recognize that every person is important, and hence deserves
              the very best care possible. We will not be mechanical in our
              approach to work. We will be personal.</p>
      </div>
      <div className="col-md-5 my-4">
      <img
            src="https://source.unsplash.com/600x300/?Courtesy,doctor,hospital"
            className="card-img-top bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            alt="..." width="500" height="200"
          />
       
      </div>
    </div>
    <div className="row featurette d-flex justify-content-center align-items-center">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading fw-normal lh-1"> <u>Capability</u><span className="text-muted"></span></h2>
        <p className="lead">Whatever be the health problem, we will be fully capable of
              diagnosing and treating it effectively. Through the use of
              advanced technology, techniques and processes.</p>
      </div>
      <div className="col-md-5 order-md-1">
      <img
            src="https://source.unsplash.com/600x300/?Care,doctor,doctor"
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"width="500" height="200"
            alt="..."
          />
        
      </div>
    </div>
    <div className="row featurette d-flex justify-content-center align-items-center">
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1"><u>Commitment</u> <span className="text-muted"></span></h2>
        <p className="lead">To continuous learning. To find better methods of prevention and
                cure. Through undertaking, supporting and commissioning
                research, in various medical and paramedical fields.</p>
      </div>
      <div className="col-md-5 my-4">
      <img
            src="https://source.unsplash.com/600x300/?doctor,Capability,doctor"
            className="card-img-top bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            alt="..."width="500" height="200"
          />
       
      </div>
    </div><>
     {}</>
      <footer style={{ float: "bottom" }}>
        <ul className="nav justify-content-center  bg-primary ">
          <li className="nav-item">
            <a
              onClick={() => navigate("/Landing")}
              className="nav-link px-2 text-light"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link px-2 text-light">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-light">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-light">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-light">
              About
            </a>
          </li>
        </ul>
        <p
          className="text-center  bg-primary text-light"
          style={{ margin: "unset" }}
        >
          © 2022 Company, Inc
        </p>
      </footer>
    </>
  );
};
export default Landing;
