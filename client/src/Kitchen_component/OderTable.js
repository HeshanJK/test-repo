import React from 'react'
import CountDown from './CountDown'

const data =[
    {
      "item":"coca cola",
      "qty":5,
      "time":'2.00 pm'
    },
    {
      "item":"coca cola 1",
      "qty":5,
      "time":'2.00 pm'
    },
    {
      "item":"coca cola 2",
      "qty":5,
      "time":'2.00 pm'
    },
    {
      "item":"coca cola 3",
      "qty":5,
      "time":'2.00 pm'
    }
  ]

function OderTable() {
    const childFunc = React.useRef(null)
  return (
    <div>
        <div style={{padding:10}}>
      <div class="">
        <div className="px-400 md:px-10 py-3 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg border">
          <div style ={{display:"flex",justifyContent:"center"}}  className="sm:flex items-center ">
            <p style ={{color:"red"}} className="text-base sm:text-lg md:text-xl lg:text-xl font-bold leading-normal text-gray-800">
              Orders
            </p>
              <p>
                <div class="dropdown">
                <button class="dropbtn">Dropdown</button>
                  <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                <a href="#">Link 3</a>
    
                </div>
                </div>
                </p>
            
            
          </div>
        </div>
    
        <table className="table table-striped" style={{padding:10}}>
          
          <thead className="flex w-full">
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
          <tbody
            class="flex flex-col overflow-y-scroll w-full">
            

           {data.map((item,i)=>{
             return(
<>
              <tr className="flex w-full ">
              <th className="p-4 w-1/4" scope="row">
                {+1}
              </th>
              <td className="p-4 w-1/4">{item.item}</td>
              
              <td className="p-4 w-1/4">{item.qty}</td>
              <td className="p-4 w-1/4">{item.time}</td>
              <td className="p-4 w-1/4">
                <button class=" btn btn-primary" onClick={() => {
                  childFunc.current()
                }}>Start</button>
              </td>
              <td className="p-4 w-1/4">
                <button class="btn btn-success" >Finished</button>
              </td>
              <td className="p-4 w-1/4"><CountDown childFunc={childFunc} /></td>
            </tr></>
             )
           })}

            

          

          

          </tbody>
        </table>
      </div>
      </div>
    </div>
  )
}

export default OderTable