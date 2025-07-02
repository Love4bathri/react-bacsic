import React, { Component } from 'react'

export default class Userlist extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      url: "https://manraj-ors-1.onrender.com/user"
    }
  }

  handleApi() {
    fetch(this.state.url).then((Response) => Response.json()).then((json) => {
      this.setState({ data: json })
    })
  }


  componentDidMount() {
    this.handleApi();

  }

   handleDelete(id){
    fetch("https://manraj-ors-1.onrender.com/user/" + id ,{
      method : "DELETE"
    }).then((resp) => resp.json()).then((result) => {
      console.log(result);
      
      
      this.handleApi()
    })
  }

  render() {
    return (
      <>

      <div id="main">
<kbd className
="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">U</kbd>
<kbd className
="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">S</kbd>
<kbd className
="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">E</kbd>
<kbd className
="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">R</kbd> 
<kbd className
="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">--</kbd>

<kbd className
="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">L</kbd>
<kbd className
="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">I</kbd>

<kbd className
="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">S</kbd>


<kbd className
="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">T</kbd>
 
</div>
        <div className
="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className
="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className
="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className
="px-6 py-3">
                  #
                </th>
                <th scope="col" className
="px-6 py-3">
                  First Name
                </th>
                <th scope="col" className
="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className
="px-6 py-3">
                  Email id's
                </th>
                <th scope="col" className
="px-6 py-3">
                  Role id's
                </th>
                <th scope="col" className
="px-6 py-3">
                  Edit --
                </th>
                <th scope="col" className
="px-6 py-3">
                   Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {
                this.state?.data && this.state?.data.map((ele, i) => {
                  return (
                    <tr  key={ele.id} className
="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">

                      <th scope="row" className
="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                         {i+1}
                      </th>

                      <th scope="row" className
="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                         {ele.firstName}
                      </th>

                      <th scope="row" className
="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                         {ele.lastName}
                      </th>

                      <th scope="row" className
="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                         {ele.loginId}
                      </th>

                      <th scope="row" className
="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                         {ele.roleId}
                      </th>

                      <th scope="row" className
="px-6 py-4 font-medium text-blue-400 whitespace-nowrap dark:text-blue">
                         <a href={`/User/${ele._id}`}>Edit</a>
                      </th>
                      <th scope="row" className
="px-6 py-4 font-medium text-blue-400 whitespace-nowrap dark:text-blue">
      <button onClick={()=> this.handleDelete(ele._id)}>Delete</button>
                      </th>
                    </tr>
                  )
                })
              }
 

            </tbody>
          </table>
        </div>

      </>
    );
  }
}
