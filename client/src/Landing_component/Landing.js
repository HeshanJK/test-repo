import { useNavigate } from 'react-router-dom';
import React from 'react'

function Landing() {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500">

      <div className='grid grid-flow-row grid-cols-3 gap-x-0 gap-y-0'>

        <div class=" col-start-1 min-h-screen flex items-center justify-center">
          <div class="col-start-1 bg-white rounded-xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer">
            <div class="p-4">
              
              <h1 class="mt-4 text-3xl font-bold cursor-pointer">
                Admin Panel
              </h1>
              <p class="mt-2 font-sans text-gray-700">For Admin</p>
            </div>
            <div class="relative ">
              <img
                class="w-80 aspect-[12/16]"
                src="https://i.imgur.com/NjmJb.jpeg"
              />
              <button class="absolute text-lg transform translate-x-20 -translate-y-24 bg-blue-600 text-white py-3 px-10 rounded-full cursor-pointer hover:scale-105 duration-500">
                 Sign in
              </button>
            </div>
          </div>
        </div>

        <div class=" col-start-2 min-h-screen flex items-center justify-center">
          <div class="col-start-1 bg-white rounded-xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer">
            <div class="p-4">
              
              <h1 class="mt-4 text-3xl font-bold cursor-pointer">
                POS & Inventory
              </h1>
              <p class="mt-2 font-sans text-gray-700">For POS Staff</p>
            </div>
            <div class="relative ">
              <img
                class="w-80 aspect-[12/16]"
                src="https://i.imgur.com/YSJayCb.jpeg"
              />
              <button onClick={() => navigate('/POS_Home') } class="absolute text-lg transform translate-x-20 -translate-y-24 bg-blue-600 text-white py-3 px-10 rounded-full cursor-pointer hover:scale-105 duration-500">
                 Sign in
              </button>
            </div>
          </div>
        </div>

        <div class=" col-start-3 min-h-screen flex items-center justify-center">
          <div class="col-start-1 bg-white rounded-xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer">
            <div class="p-4">
              
              <h1 class="mt-4 text-3xl font-bold cursor-pointer">
                Kitchen Panel
              </h1>
              <p class="mt-2 font-sans text-gray-700">For Kitchen Staff</p>
            </div>
            <div class="relative ">
              <img
                class=" w-80 aspect-[12/16]"
                src="https://i.imgur.com/hNf5iYi.jpeg"
              />
              <button class="absolute text-lg transform translate-x-20 -translate-y-24 bg-blue-600 text-white py-3 px-10 rounded-full cursor-pointer hover:scale-105 duration-500">
                 Sign in
              </button>
            </div>
          </div>
        </div>

      </div>


    </div>
  );
}

export default Landing