import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class UserAdd extends Component {
    constructor() {
        super()
        this.state = {
          "firstName": "",
          "lastName": "",
          "loginId": "",
          "password": "",
          "roleId": ""
        }
        this.url = "https://manraj-ors-1.onrender.com/user";
        this.id = window.location.pathname.split("/")[2];
    
        console.log(this.id);
    
      }
    
      componentDidMount() {
        if (this.id) {
          this.getData()
        }
      }
    

    getData() {
        fetch(`${this.url}/${this.id}`)
          .then(resp => resp.json())
          .then((result) => {
            console.log("Result :", result);
            this.setState({
              firstName: result.firstName,
              lastName: result.lastName,
              loginId: result.loginId,
              password: result.password,
              roleId: result.roleId,
            })
          })
      }
    

    handleSubmit(event) {
      event.preventDefault()

        let method = !this.id ? "POST" : "PUT";
        console.log(method,this.state)
        let url = !this.id ? `${this.url}` : `${this.url}/${this.id}`;
        console.log(url)
        fetch(url, {
          method: method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.state),
        }).then((response) => response.json())
          .then((result) => {
            console.log("Call api :-", result);
    
            window.location.pathname = "/userlist"
          })
      }
   render() {
        return (
            <div>
                <section className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 py-5 mx-auto s:h-screen lg:py-0">

                        <div className="w-full bg-black rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                                <form className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label htmlFor="text1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Frist Name</label>
                                        <input type="text" name="text1" id="text1" value={this.state.firstName}
                                            onChange={(event) => this.setState({ firstName: event.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" " required="" />
                                    </div>
                                    <div>
                                        <label htmlFor="password5" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                                        <input type="text" name="password" id="password5" value={this.state.lastName}
                                            onChange={(event) => this.setState({ lastName: event.target.value })} placeholder="--" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <div>
                                        <label htmlFor="password2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Id</label>
                                        <input type="email" name="password2" id="password2" value={this.state.loginId}
                                            onChange={(event) => this.setState({ loginId: event.target.value })} placeholder=" " className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <div>
                                        <label htmlFor="password3" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Id</label>
                                        <input type="password" name="password3" id="password3" value={this.state.password}
                                            onChange={(event) => this.setState({ password: event.target.value })} placeholder=" " className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <div>
                                        <label htmlFor="password1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role id</label>
                                        <input type="text" name="password1" id="password1" value={this.state.roleId}
                                            onChange={(event) => this.setState({ roleId: event.target.value })} placeholder=" " className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                     
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" to="#">Terms and Conditions</Link></label>
                                        </div>
                                    </div>
                                    <button onClick={(event) => this.handleSubmit(event)} type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>


                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

