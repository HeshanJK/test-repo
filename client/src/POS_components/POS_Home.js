import React from 'react'
import Add_New_Item from './Add_New_Item';
import Display from './Display'
import Inventory from './Inventory'
import NavBar from './NavBar';
import ReFill from './ReFill';

function POS_Home() {
  return (
    
    <div className="grid grid-flow-row grid-cols-12 gap-x-1">
    <div>
      <NavBar />
    </div>
      <div className="col-start-1 col-span-9">
        <div className='h-80' >
          <Inventory />
        </div>
        <div className='h-20' style={{ padding:5, marginTop:70 }}>
          <div >
          <ReFill />
          </div>
       
        </div>
    </div>  
      <div className="col-start-10 col-span-3">
        <div >

          <Add_New_Item/>

        {/* <Display
          name="Sprite"
          category="Beverages"
          quantity="25"
          Fill_Level="10"
          Time="8.00 AM"
        /> */}
        </div>
      </div>
    </div>
    
  );
}

export default POS_Home