import {  useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function  Navbar() {

const [openDropdown, setOpenDropdown] = useState(null);


  const handleDropdownToggle = (menu) => {
    setOpenDropdown((prevState) => (prevState === menu ? null : menu));
  };

  function logOut(){
    localStorage.clear()
    window.location.pathname = "/login"
  }

  let auth = localStorage.getItem("token")
  // console.log();
  auth = JSON.parse(auth)
  console.log( "auth" , auth )

  return (

     <>
    
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Love</span>
            </Link>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            <div className=" w-full md:block md:w-auto" id="navbar-default">
             {
              !auth ? 
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link as={NavLink} to="home/" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/login" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
                  Login
                </Link>
              </li>
            </ul>
             :  
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

              <li >
                <button  style={{color : "black"}} onClick={()=>logOut()} >Logout({auth.firstName})</button>
              </li>

              {/* About with Dropdown */}
              <li className="relative">
                <Link
                  to="#"
                  onClick={() => handleDropdownToggle('about')}
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  User <i className="fa-solid fa-chevron-down"></i>
                </Link>
                {openDropdown === 'about' && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                    <Link  to="/user" className="block py-2 px-3 text-gray-900 hover:bg-gray-100">Add User</Link>
                    <Link to="/userlist" className="block py-2 px-3 text-gray-900 hover:bg-gray-100">List User</Link>

                  </div>
                )}
              </li>

              {/* Services with Dropdown */}
              <li className="relative">
                <Link
                  to="#"
                  onClick={() => handleDropdownToggle('services')}
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  College  <i className="fa-solid fa-chevron-down"></i>
                </Link>
                {openDropdown === 'services' && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                    <Link to="/addcollege" className="block py-2 px-3 text-gray-900 hover:bg-gray-100">Add Colege</Link>
                    <Link to="/clglist" className="block py-2 px-3 text-gray-900 hover:bg-gray-100"> College List</Link>

                  </div>
                )}
              </li>

              {/* Pricing with Dropdown */}
              <li className="relative">
                <Link
                  to="#"
                  onClick={() => handleDropdownToggle('pricing')}
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Student <i className="fa-solid fa-chevron-down"></i>
                </Link>
                {openDropdown === 'pricing' && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                    <Link to="/addstudent" className="block py-2 px-3 text-gray-900 hover:bg-gray-100">Add Student</Link>
                    <Link to="/studentlist" className="block py-2 px-3 text-gray-900 hover:bg-gray-100"> Student List</Link>

                  </div>
                )}
              </li>

              {/* Pricing with Dropdown */}
              <li className="relative">
                <Link
                  to="#"
                  onClick={() => handleDropdownToggle('Marksheet')}
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Marksheet <i className="fa-solid fa-chevron-down"></i>
                </Link>
                {openDropdown === 'Marksheet' && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                    <Link to="/addmark" className="block py-2 px-3 text-gray-900 hover:bg-gray-100">Add Marksheet</Link>
                    <Link to="/marklist" className="block py-2 px-3 text-gray-900 hover:bg-gray-100"> Marksheet List</Link>

                  </div>
                )}
              </li>

              {/* Pricing with Dropdown */}
              <li className="relative">
                <Link
                  to="#"
                  onClick={() => handleDropdownToggle('Role')}
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Role <i className="fa-solid fa-chevron-down"></i>
                </Link>
                {openDropdown === 'Role' && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                    <Link to="/addrole" className="block py-2 px-3 text-gray-900 hover:bg-gray-100">Add Role</Link>
                    <Link to="/rolelist" className="block py-2 px-3 text-gray-900 hover:bg-gray-100"> Role List</Link>

                  </div>
                )}
              </li>
              
            </ul>
}

            </div>
          </div>

        </nav>
         
     </>
  )
}
