//React fragment & Icons
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

//Export Navigation Bar
export default function Topbar() {
  return (
    <div className="relative flex container  ">
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"></div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        

        {/* Profile dropdown */}
        <Menu as="div" className="ml-3 relative">
          <div>
            <Menu.Button className="bg-gray-1000 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-11 w-11 rounded-full "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYxPUWIV-9L0Atp9eClW6DMuWbxKnfNhDcyQ&usqp=CAU"
                alt="profile image"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            {/* Dropdown Menu Items */}
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/Dashboard/profile"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Your Profile
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Sign out
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}