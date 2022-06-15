import React from "react";
import Add_New_Item from "./Add_New_Item";
import Display from "./Display";
import Inventory from "./Inventory";
import NavBar from "./NavBar";
import ReFill from "./ReFill";
import Index from "./Index";
import Inventory_Menu from "./Inventory_Menu";
import Subjectcard from "./SubjectCard/Subjectcard";
import Datalist from "./datalist";

function Admin_Home() {
  const list = [
    {
        key : 1,
        category : 'drinks',
        items : [
          {itemkey:1,
          listitem:'cocacola'},
          {itemkey:2,
            listitem:'pepsi'},
            {itemkey:3,
              listitem:'sprite'},
        ]
    },
    {
        key : 2,
        category : 'foods',
        items : [
          {itemkey:1,
          listitem:'cocacola'},
          {itemkey:2,
            listitem:'pepsi'},
            {itemkey:3,
              listitem:'sprite'},
        ]
    },
    {
        key : 3,
        category : 'kottu',
        items : [
          {itemkey:1,
          listitem:'cocacola'},
          {itemkey:2,
            listitem:'pepsi'},
            {itemkey:3,
              listitem:'sprite'},
        ]
    },
    {
      key : 4,
      category : 'kottu',
      items : [
        {itemkey:1,
        listitem:'cocacola'},
        {itemkey:2,
          listitem:'pepsi'},
          {itemkey:3,
            listitem:'sprite'},
      ]
  },
  {
    key : 5,
    category : 'kottu',
    items : [
      {itemkey:1,
      listitem:'cocacola'},
      {itemkey:2,
        listitem:'pepsi'},
        {itemkey:3,
          listitem:'sprite'},
    ]
},
{
  key : 6,
  category : 'kottu',
  items : [
    {itemkey:1,
    listitem:'cocacola'},
    {itemkey:2,
      listitem:'pepsi'},
      {itemkey:3,
        listitem:'sprite'},
  ]
},
{
  key : 7,
  category : 'kottu',
  items : [
    {itemkey:1,
    listitem:'cocacola'},
    {itemkey:2,
      listitem:'pepsi'},
      {itemkey:3,
        listitem:'sprite'},
  ]
},
]
  return (
    <div style={{ backgroundColor: "white"}}>
      <div className="p-0.5">
        <NavBar />
      </div>

      <div className="grid grid-flow-row grid-cols-12 gap-x-0.1">
        <div className="col-start-1 col-span-9">
          <div className="rounded-tr-lg " style={{ backgroundColor: "gray"  }}>
            <div className="">
              <Index />
            </div>
            <div>
             
             <Subjectcard foods={list}/>
            </div>
          </div>
        </div>
        <div className="col-start-10 col-span-3">
          <div>
            <Add_New_Item /> 

             {/* <Display
          name="Sprite"
          category="Beverages"
          quantity="25"
          Fill_Level="10"
          Time="8.00 AM"
        />  */}
        
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin_Home;
