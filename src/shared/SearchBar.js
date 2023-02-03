import React, { useState, useRef } from "react";
import "./searchBar.css";
import { Col, Form, FormGroup } from "react-bootstrap";

export default function SearchBar() {
  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const memberRef = useRef(0);

  const searchHandler = () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const member = memberRef.current.value;

    if (!location || !distance || !member) {
      return alert("Enter all fields");
    }
  };
  return (
    <div>
      <Col lg="12">
        <div className="searchBar">
          <Form className="d-flex align-items-center g-4">
            <FormGroup className="d-flex gap-3 from_group from-group-fast">
              <span>
                <i className="ri-map-pin-line"></i>
              </span>
              <div>
                <h6>Location</h6>
                <input
                  type="text"
                  placeholder="Place you want to go"
                  ref={locationRef}
                />
              </div>
            </FormGroup>

            <FormGroup className="d-flex gap-3 from_group from-group-fast">
              <span>
                <i className="ri-pin-distance-line"></i>
              </span>
              <div>
                <h6>Distance</h6>
                <input
                  type="number"
                  placeholder="Distance k/m"
                  className="numberInput"
                  ref={distanceRef}
                />
              </div>
            </FormGroup>

            <FormGroup className="d-flex gap-3 from_group from-group-last">
              <span>
                <i className="ri-group-line"></i>
              </span>
              <div>
                <h6>Max people</h6>
                <input
                  type="number"
                  placeholder="0"
                  className="numberInput"
                  ref={memberRef}
                />
              </div>
            </FormGroup>
            <span
              className="search-icons"
              type="submit"
              onClick={() => searchHandler()}
            >
              <i className="ri-search-2-line"></i>
            </span>
          </Form>
        </div>
      </Col>
    </div>
  );
}
//camouflage
