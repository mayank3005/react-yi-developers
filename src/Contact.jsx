import React, { useState } from "react";

const Contact = () => {

  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    msg: ''
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((prevData) => {
      return {
        ...prevData,
        [name]: value
      };
    });

  }

  const formSubmit = (event) => {
    event.preventDefault();
    alert(`Name : ${data.fullname}, Phone ${data.phone}: ,Email ${data.email}: ,Message : ${data.msg}`);
  }

  return (<>
    <div className="my-5">
      <h1 className=" text-center">Contact Us</h1>
    </div>
    <div className="container contain-div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1"
                autoComplete="off" name='fullname' value={data.fullname} onChange={InputEvent} placeholder="Enter your full name" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
              <input type="number" class="form-control" id="exampleFormControlInput1"
                autoComplete="off" name='phone' value={data.phone} onChange={InputEvent} placeholder="Mobile Number" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1"
                autoComplete="off" name='email' value={data.email} onChange={InputEvent} placeholder="name@example.com" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                autoComplete="off" name='msg' value={data.msg} onChange={InputEvent}></textarea>
            </div>
            <button type="submit" class="btn btn-outline-info">Submit Form</button>
          </form>
        </div>
      </div>
    </div>
  </>);
};

export default Contact;