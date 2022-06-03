import React from "react";

function Display(props) {
  return (

  <div class="relative flex flex-col">
  
    <div class="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
    
    <img class="aspect-video w-96 rounded-t-2xl object-cover object-center" src="https://i.imgur.com/7LudVsX.png" />
    
      <div class="p-4">
        
        <h1 class="text-2xl font-medium text-slate-600 pb-2">{props.name}</h1>
        <div className="px-1 py-10">
               <div className="flex">
                 <h6 className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center">
                   Category : 
                 </h6>
                 <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center">
                   {props.category}
                 </p>
               </div>
               <div className="flex">
                 <h6 className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center">
                   Quantity : 
                 </h6>
                 <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center">
                   {props.quantity}
                 </p>
               </div>
               <div className="flex">
                 <h6 className="mt-2 text-xs sm:text-sm md:text-base font-semibold ">
                   Re-fill Level : 
                 </h6>
                 <p className="flex mt-2 text-xs sm:text-sm md:text-base font-semibold">
                   {props.Fill_Level}
                 </p>
               </div>
               <div className="flex">
                 <h6 className="mt-2 text-xs sm:text-sm md:text-base font-semibold ">
                   Time : 
                 </h6>
                 <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold">
                   {props.Time}
                 </p>
               </div>
             </div>

             <div className="flex">
             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  border border-blue-700 rounded">
               save
             </button>
             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
               edit
             </button>
             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
               Delete
           </button>
           </div>

      </div>
    </div>
  </div>


    // <div className="h-full w-full">
    //   <div class="max-w-sm max-h-sm rounded overflow-hidden shadow-lg">
    //     <div className="bg-white shadow px-3 md:px-10 pt-5 md:pt-7 pb-7 overflow-y-auto">
    //       <div className="DisplayItem">


    //         <div>
    //           <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate text-center">
    //             {props.name}
    //           </h2>
    //         </div>
    //         <div class="px-5 py-4">
    //           <img
    //             className="w-full"
    //             src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
    //             alt="Workflow"
    //           />
    //         </div>
    //         <div className="px-1 py-10">
    //           <div className="flex">
    //             <h6 className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center">
    //               Category : 
    //             </h6>
    //             <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center">
    //               {props.category}
    //             </p>
    //           </div>
    //           <div className="flex">
    //             <h6 className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center">
    //               Quantity : 
    //             </h6>
    //             <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center">
    //               {props.quantity}
    //             </p>
    //           </div>
    //           <div className="flex">
    //             <h6 className="mt-2 text-xs sm:text-sm md:text-base font-semibold ">
    //               Re-fill Level : 
    //             </h6>
    //             <p className="flex mt-2 text-xs sm:text-sm md:text-base font-semibold">
    //               {props.Fill_Level}
    //             </p>
    //           </div>
    //           <div className="flex">
    //             <h6 className="mt-2 text-xs sm:text-sm md:text-base font-semibold ">
    //               Time : 
    //             </h6>
    //             <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold">
    //               {props.Time}
    //             </p>
    //           </div>
    //         </div>


    //         <div className="flex">
    //         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  border border-blue-700 rounded">
    //           save
    //         </button>
    //         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
    //           edit
    //         </button>
    //         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
    //           Delete
    //         </button>
    //       </div>


    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Display;
