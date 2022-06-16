import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Add_New_Item({ getAllItems }) {
  const [values, setValues] = useState({
    foodName: "",
    price: "",
    category: "rice",
    EstimateTime: "0",
    image: "",
    adminId: "",
    chefId: ""
  });


  useEffect(() => {
    console.log(values);
  }, [values])

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const addItem = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:8000/api/food/addFood', values)
      .then((res) => {
        console.log(res);
        getAllItems()
        document.getElementById("myForm").reset();
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <div
      class="container flex flex-col overflow-y-scroll w-full rounded-lg "
      style={{ height: "87.5vh" }}
    >
      <form onSubmit={addItem} id='myForm' class="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-1 mb-2 transition duration-500 ease-in-out transform bg-white rounded-lg ">
        <section class="flex flex-col w-full h-full p-1 overflow-auto">
          <label for="name" class="text-base leading-7 text-blueGray-500 mb-5">
            Add New Food
          </label>
          <header class="flex flex-col items-center justify-center py-12 text-base text-blueGray-500 transition duration-500 ease-in-out transform bg-white border border-dashed rounded-lg focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
            <p class="flex flex-wrap justify-center mb-3 text-base leading-7 text-blueGray-500">
              <span>Drag and drop your</span> <span>files anywhere or</span>
            </p>
            <button class="w-auto px-2 py-1 my-2 mr-2 text-blueGray-500 transition duration-500 ease-in-out transform border rounded-md hover:text-blueGray-600 text-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-gray-100">
              {" "}
              Upload a file{" "}
            </button>
          </header>
        </section>
        <div class="relative pt-4">

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Food Name"
            class="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            onChange={handleChange("foodName")}
            required
          />
        </div>
        <div class="relative pt-4">
          <input
            type="number"
            id="number"
            name="number"
            placeholder="Enter Price"
            class="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            onChange={handleChange("price")}
            required
          />
        </div>

        <Form className='mt-3 mb-3'>
          <Form.Check
            label="Rice"
            name="group1"
            type='radio'
            value='rice'
            onChange={handleChange("category")}
            defaultChecked

          />
          <Form.Check
            label="Fast Food"
            name="group1"
            type='radio'
            value='fastFood'
            onChange={handleChange("category")}
          />
          <Form.Check
            label="Beverage"
            name="group1"
            type='radio'
            value='beverage'
            onChange={handleChange("category")}
          />
        </Form>


        <div class="relative pt-4">

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter estimated time"
            class="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            onChange={handleChange("EstimateTime")}
            required
          />
        </div>
        <div class="flex items-center w-full pt-4 mb-4">
          <button class="w-full py-3 text-base text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800 ">
            {" "}
            Add{" "}
          </button>
        </div>

      </form>
    </div>

  );
}

export default Add_New_Item;
