// import js from '@eslint/js';
// import { Result } from 'postcss';
import React, { Component } from 'react'
 
export default class Marklist extends Component {
  constructor(){
    super();
    this.state ={
      data : [],
      url : "https://manraj-ors-1.onrender.com/marksheet"
    }
  }

  handleapimark(){
    fetch(this.state.url).then((resp) => resp.json()).then((json) => {
      this.setState({data : json})
    })
  }

  componentDidMount(){
    this.handleapimark();
  }
  render() {
    return (
      <>
        
<div id="mainlove">
<h1>
  List of Marksheet
</h1>
</div>
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    #
                </th>
                <th scope="col" className="px-6 py-3">
                Student name
                </th>
                <th scope="col" className="px-6 py-3">
                Student Id
                </th>
                <th scope="col" className="px-6 py-3">
                Roll number
                </th>
                <th scope="col" className="px-6 py-3">
                Physics
                </th>
                <th scope="col" className="px-6 py-3">
                Chemistry
                </th>
                <th scope="col" className="px-6 py-3">
                Maths
                </th>
                <th scope="col" className="px-6 py-3">
                Operation
                </th>
            </tr>
        </thead>
        <tbody>
{
  this.state?.data && this.state?.data.map((ele, i )=> {
    return(
      <tr  key={ele.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
         {i+1}
      </th> 
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
         {ele.name}
      </th> 
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
         {ele.studentId}
      </th> 
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
         {ele.rollNo}
      </th> 
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
         {ele.physics}
      </th> 
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
         {ele.chemistry}
      </th> 
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
         {ele.maths}
      </th> 
      <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap dark:text-red">
         
         <a href="#edit">Edit</a>
         <br />
         <button style={{border: "2px solid red"}}>Delete</button>
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

