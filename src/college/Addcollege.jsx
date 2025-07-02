 
import React, { Component } from 'react'

export default class Addcollege extends Component {
  constructor() {
    super();
    this.state = {
      collegeName: "",
      address: "",
      mobileNo: "",
      city: "",
      state: "",
      MobileNo: ""
    }
    this.url = "https://manraj-ors-1.onrender.com/college";
    this.id = window.location.pathname.split("/")[2];
    console.log(this.url);

  };

  componentDidMount() {
    if (this.id) {
      this.getData1()
    }
  }

  getData1() {
    fetch(`${this.url}/${this.id}`).then((resp) => resp.json()).then((result) => {
      console.log(result);
      this.setState({
        collegeName: result.collegeName,
        address: result.address,
        mobileNo: result.mobileNo,
        city: result.city,
        state: result.state,
        MobileNo: result.mobileNo,
      })

    })
  }



  handleSub(event) {
    event.preventDefault()
    let method = !this.id ? "POST" : "PUT"
    let url = !this.id ? `${this.url}` : `${this.url}/${this.id}`;

    fetch(url, {
      method: method,
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(this.state)

    }).then((response) => response.json()).then((result) => {
      window.location.pathname = "/clglist"
    })
  console.log("college -", this.state);

  }


  render() {
    return (
      <> 
      <form className="max-w-md mx-auto bg-black m-5 p-8">
          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_email" id="floating_email" value={this.state.collegeName} onChange={(e) => this.setState({ collegeName: e.target.value })} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="College Name" required />
            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">-</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_password" id="floating_password" value={this.state.address} onChange={(e) => this.setState({ address: e.target.value })} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Address" required />
            <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">-</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input type="tel" name="repeat_password" value={this.state.mobileNo} onChange={(e) => this.setState({ mobileNo: e.target.value })} id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Phone No." required />
            <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">-</label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="floating_first_name" value={this.state.city} onChange={(e) => this.setState({ city: e.target.value })} id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="City" required />
              <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">-</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="floating_city_name" value={this.state.state} onChange={(e) => this.setState({ state: e.target.value })} id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="state" required />
              <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">-</label>
            </div>
          </div>

          <button onClick={(event) => this.handleSub(event)} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

      </>
    )
  }
}
