import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import photo22 from "../Assets/Vector (12).png";

import "./Model.css";
function Example() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        className="btn shadow-none w-100  text-start p-0 "
        onClick={() => setShow(true)}
      >
        Edit
      </button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        ClassName="modal-80w "
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card ">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 text-start">
                  <h5>Title</h5>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control py-3 "
                      placeholder=""
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="col-md-6 text-start">
                  <h5>Photo</h5>
                  <div className="border rounded py-3 ps-3">
                    <input
                      type="file"
                      id="myfile"
                      placeholder="Picture.jgp"
                      name="myfile"
                      multiple
                    />
                  </div>
                </div>

                <div className="input-group mt-2">
                  <textarea
                    className="form-control "
                    aria-label="With textarea"
                  ></textarea>
                </div>
                <div className="px-2 d-flex justify-content-evenly " style={{gap:"10px"}}>
                  <button className="py-2 post_color mt-4 w-100 fs-4 d-flex align-items-center justify-content-center">
                   Save
                  </button>
                  <button className="py-2 post_color mt-4 w-100 fs-4 d-flex align-items-center justify-content-center">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
