import React from "react";
import CountDown from "./CountDown";
import ProfileDropdown from "./ProfileDropdown";

const data = [
  {
    item: "coca cola",
    qty: 5,
    time: "2.00 pm",
    estimateTime:[1,30,0]
  },
  {
    item: "coca cola 1",
    qty: 5,
    time: "2.00 pm",
    estimateTime:[0,30,0]
  },
  {
    item: "coca cola 2",
    qty: 5,
    time: "2.00 pm",
    estimateTime:[0,0,5]
  },
  {
    item: "coca cola 3",
    qty: 5,
    time: "2.00 pm",
    estimateTime:[1,10,0]
  },
];

function OderTable() {
  return (
    <div>
      <div style={{ padding: 10 }}>
        <div class="">
          <div className="px-400 md:px-10 py-4 md:py-7 bg-blue-100 rounded-tl-lg rounded-tr-lg border">
            <div
              style={{ display: "flex", justifyContent: "center" }}
              className="sm:flex items-center "
            >
              <p
                style={{ color: "blue",fontSize:"40px"}}
                className="text-base sm:text-lg md:text-xl lg:text-xl font-bold leading-normal text-gray-800"
              >
                My Orders
              </p>
             <ProfileDropdown/>

            </div>
          </div>

          <table className="table table-striped" style={{ padding: 10 }}>
            <thead className="flex w-full font-mono  text-2xl">
              <tr className="flex w-full">
                <th className="p-4 w-1/4" scope="col">
                  No.
                </th>
                <th className="p-4 w-1/4" scope="col">
                  Item Name
                </th>
                <th className="p-4 w-1/4" scope="col">
                  Quantity
                </th>
                <th className="p-4 w-1/4" scope="col">
                  Time
                </th>
                <th className="p-4 w-1/4" scope="col">
                  Start
                </th>
                <th className="p-4 w-1/4" scope="col">
                  Finished
                </th>
                <th className="p-4 w-1/4" scope="col">
                  Countdown Time
                </th>
              </tr>
            </thead>
            <tbody class="flex flex-col overflow-y-scroll w-full">
              {data.map((item, i) => {
                const hoursMinSecs = { hours: 1, minutes: 20, seconds: 40 };
                return (
                  
                    <tr className="flex w-full ">
                      <th className="p-4 w-1/4 font-bold font-mono text-2xl" scope="row">
                        {+1}
                      </th>
                      <td className="p-4 w-1/4 font-bold font-mono text-2xl">{item.item}</td>

                      <td className="p-4 w-1/4 font-bold font-mono text-2xl">{item.qty}</td>
                      <td className="p-4 w-1/4 font-bold font-mono text-2xl">{item.time}</td>

                      <CountDown initialTime={item.estimateTime} />
                    </tr>
                 
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OderTable;
