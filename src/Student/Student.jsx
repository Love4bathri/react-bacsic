import React, { Component } from 'react'

export default class Studentlist extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      url: "https://manraj-ors-1.onrender.com/student"
    }
  }


  handleApi2() {
    fetch(this.state.url).then((Response) => Response.json()).then((json) => {
      this.setState({ data: json })
    })
  }

  componentDidMount() {
    this.handleApi2();
  }
  render() {
    return (
      <>


        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <h1 style={{textAlign : "center",fontSize :"80px"}}>List of student</h1>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  firstName
                </th>
                <th scope="col" className="px-6 py-3">
                  lastName
                </th>
                <th scope="col" className="px-6 py-3">
                  collegeId
                </th>
                <th scope="col" className="px-6 py-3">
                  mobileNo
                </th>
                <th scope="col" className="px-6 py-3">
                  emailId
                </th>
                <th scope="col" className="px-6 py-3">
                    Operation 
                </th>
              </tr>
            </thead>
            <tbody>
              {
                this.state?.data && this.state.data.map((ele, i) => {
                  return (
                    <tr key={ele.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                      <th scope="row" className="px-1 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white">
                        {i + 1}
                      </th>
                      <th scope="row" className="px-1 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white">
                        {ele.firstName}
                      </th>
                      <th scope="row" className="px-1 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white">
                        {ele.lastName}
                      </th>
                      <th scope="row" className="px-1 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white">
                        {ele.collegeId}
                      </th>
                      <th scope="row" className="px-1 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white">
                        {ele.mobileNo}
                      </th>
                      <th scope="row" className="px-1 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white">
                        {ele.emailId}
                      </th>
                      <th scope="row" className="px-1 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white">
                        Edit <br /> <button style={{color: "red"}}>Delete</button>
                      </th>
                    </tr>
                  )
                })
              }


            </tbody>
          </table>
        </div>

      </>
    )
  }
}

