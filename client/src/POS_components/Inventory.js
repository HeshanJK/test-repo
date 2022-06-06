import React, { Component } from 'react'
//import axios from 'axios'

function Inventory() {
  return (
    <div style={{padding:0}}>
      <div class="">
        <div className="px-4 md:px-10 py-3 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg border">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-xl font-bold leading-normal text-gray-800">
              Inventory
            </p>
            <button className='btn btn-primary'>
              Add Item
            </button>
          </div>
        </div>

        <table className="table-auto w-full bg-white border">
          <thead className="flex w-full">
            <tr className="flex w-full">
              <th className="p-4 w-1/4" scope="col">
              Main
              </th>
              <th className="p-4 w-1/4" scope="col">
              Beverages
              </th>
              <th className="p-4 w-1/4" scope="col">
              Short Eats
              </th>
              <th className="p-4 w-1/4" scope="col">
              Desserts
              </th>
            </tr>
          </thead>
          <tbody
            class="flex flex-col overflow-y-scroll w-full"
            style={{ height: "62vh" }}
          >
            <tr className="flex w-full ">
              <th className="p-4 w-1/4" scope="row">
                {+1}
              </th>
              <td className="p-4 w-1/4">Coca-Cola</td>
              <td className="p-4 w-1/4">10.00 PM</td>
              <td className="p-4 w-1/4">10</td>
              <td className="p-4 w-1/4">
                <button class="btn btn-primary">Re-Fill</button>
              </td>
            </tr>

            <tr className="flex w-full ">
              <th className="p-4 w-1/4" scope="row">
                {+1}
              </th>
              <td className="p-4 w-1/4">Coca-Cola</td>
              <td className="p-4 w-1/4">10.00 PM</td>
              <td className="p-4 w-1/4">10</td>
              <td className="p-4 w-1/4">
                <button class="btn btn-primary">Re-Fill</button>
              </td>
            </tr>

            <tr className="flex w-full ">
              <th className="p-4 w-1/4" scope="row">
                {+1}
              </th>
              <td className="p-4 w-1/4">Coca-Cola</td>
              <td className="p-4 w-1/4">10.00 PM</td>
              <td className="p-4 w-1/4">10</td>
              <td className="p-4 w-1/4">
                <button class="btn btn-primary">Re-Fill</button>
              </td>
            </tr>

            <tr className="flex w-full ">
              <th className="p-4 w-1/4" scope="row">
                {+1}
              </th>
              <td className="p-4 w-1/4">Coca-Cola</td>
              <td className="p-4 w-1/4">10.00 PM</td>
              <td className="p-4 w-1/4">10</td>
              <td className="p-4 w-1/4">
                <button class="btn btn-primary">Re-Fill</button>
              </td>
            </tr>

            <tr className="flex w-full ">
              <th className="p-4 w-1/4" scope="row">
                {+1}
              </th>
              <td className="p-4 w-1/4">Coca-Cola</td>
              <td className="p-4 w-1/4">10.00 PM</td>
              <td className="p-4 w-1/4">10</td>
              <td className="p-4 w-1/4">
                <button class="btn btn-primary">Re-Fill</button>
              </td>
            </tr>

            <tr className="flex w-full ">
              <th className="p-4 w-1/4" scope="row">
                {+1}
              </th>
              <td className="p-4 w-1/4">Coca-Cola</td>
              <td className="p-4 w-1/4">10.00 PM</td>
              <td className="p-4 w-1/4">10</td>
              <td className="p-4 w-1/4">
                <button class="btn btn-primary">Re-Fill</button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}

{/* <div className="overflow-auto">
<div className="px-4 md:px-10 py-2 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
  <div className="sm:flex items-center justify-between">
    <p className="text-base sm:text-lg md:text-xl lg:text-xl font-bold leading-normal text-gray-800">
      INVENTORY
    </p>
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        Add New Item
      </button>
    </div>
  </div>
</div>
<div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
  <table class="w-full whitespace-nowrap">
    <thead>
      <tr className="h-16 w-full text-sm leading-none text-gray-800">
        <th scope="col">Main</th>
        <th scope="col">Beverages</th>
        <th scope="col">Short Eats</th>
        <th scope="col">Desserts</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
</div>
</div> */}

export default Inventory