import React from "react";

function Add_New_Item() {
  return (
    <div
      class="container flex flex-col overflow-y-scroll w-full "
      style={{ height: "87vh" }}
    >
      <form class="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border rounded-lg ">
        <section class="flex flex-col w-full h-full p-1 overflow-auto">
          <label for="name" class="text-base leading-7 text-blueGray-500 mb-5">
            Input Image
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
          <label for="name" class="text-base leading-7 text-blueGray-500">
            Input Text
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            class="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
          />
        </div>
        <div class="relative pt-4">
          <label for="name" class="text-base leading-7 text-blueGray-500">
            Input Text
          </label>
          <input
            type="number"
            id="number"
            name="number"
            placeholder="number"
            class="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
          />
        </div>
        <div class="relative pt-4">
          <label for="name" class="text-base leading-7 text-blueGray-500">
            Input Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            placeholder="name"
            class="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
          />
        </div>
        <div class="relative pt-4">
          <label for="name" class="text-base leading-7 text-blueGray-500">
            Input Color
          </label>
          <input
            type="color"
            id="color"
            name="color"
            placeholder="name"
            class="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
          />
        </div>
        <div class="relative pt-4">
          <label for="name" class="text-base leading-7 text-blueGray-500">
            Input Range
          </label>
          <input
            type="range"
            id="range"
            name="range"
            placeholder="name"
            class="w-full px-0 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
          />
        </div>
        <div class="relative mt-4">
          <label for="name" class="text-base leading-7 text-blueGray-500">
            Component Select
          </label>
          <select class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
            <option>Surabaya</option>
            <option>Bandung</option>
            <option>jakarta</option>
          </select>
        </div>
        <div class="flex flex-wrap mt-4 mb-6 -mx-3">
          <div class="w-full px-3">
            <label
              class="text-base leading-7 text-blueGray-500"
              for="description"
            >
              Text Area{" "}
            </label>
            <textarea
              class="w-full h-32 px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform bg-white border rounded-lg focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 apearance-none autoexpand"
              id="description"
              type="text"
              name="description"
              placeholder="Message..."
              required=""
            ></textarea>
          </div>
        </div>
        <div class="flex">
          <label class="flex items-center">
            <input type="checkbox" class="form-checkbox " />
            <span class="ml-2 text-blueGray-500">checkbox </span>
          </label>
        </div>
        <div class="flex items-center w-full pt-4 mb-4">
          <button class="w-full py-3 text-base text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800 ">
            {" "}
            Button{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Add_New_Item;
