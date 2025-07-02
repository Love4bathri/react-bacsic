import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 
export default class Addmark extends Component {
  render() {
    return (
       <>
       <form className="max-w-sm mx-auto">
 <div className="mb-5">
   <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
   <input type="text" id="text" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Name" required />
 </div>
 <div className="mb-5">
   <label htmlFor="text2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
   <input type="text" id="text2" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder='Last Name' required />
 </div>
 <div className="mb-5">
   <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
   <input type="number" id="id" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder='student Id' required />
 </div>
 <div className="mb-5">
   <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
   <input type="number" id="email" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder='
   Roll No' required />
 </div>
 <div className="mb-5">
   <label htmlFor="ph" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
   <input type="text" id="ph" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder='Physics' required />
 </div>
 <div className="mb-5">
   <label htmlFor="mt" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
   <input type="text" id="mt" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder='Maths' required />
 </div>
 <div className="mb-5">
   <label htmlFor="cm" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
   <input type="text" id="cm" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder='Chemistry' required />
 </div>
 <div className="flex items-start mb-5">
   <div className="flex items-center h-5">
     <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
   </div>
   <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <Link to="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</Link></label>
 </div>
 <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit </button>
</form>
       </>
    )
  }
}
