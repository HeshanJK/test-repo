import React from "react";

function ReFill() {
  return (
    <div style={{padding:5}}>
      <div class="container ">
        <div className="px-4 md:px-10 py-3 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg ">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-xl font-bold leading-normal text-gray-800">
              Re-Fill
            </p>
          </div>
        </div>

        <table className="table-auto w-full bg-white">
          <thead className="flex w-full">
            <tr className="flex w-full">
              <th className="p-4 w-1/4">#</th>
              <th className="p-4 w-1/4" scope="col">
                Name
              </th>
              <th className="p-4 w-1/4" scope="col">
                Time
              </th>
              <th className="p-4 w-1/4" scope="col">
                Quantity
              </th>
              <th className="p-4 w-1/4" scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody
            class="flex flex-col overflow-y-scroll w-full"
            style={{ height: "23vh" }}
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

export default ReFill;
