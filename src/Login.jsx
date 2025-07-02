import React, { Component } from 'react'

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            login: "",
            password: "",
            msg: ""
        }
    }
    handleSubmit(event) {
        this.setState({ msg: "" })
        // alert(msg)
        console.log("Login page : -", this.state)
        event.preventDefault();
        try {
            fetch("https://manraj-ors-1.onrender.com/login", {
                method: "POST",
                body: JSON.stringify({ loginId: this.state.login, password: this.state.password }),
                headers: { "Content-type": "application/json", "charset": "utf-8" }
            }).then((resp) => resp.json()).then((result) => {

                if (result.message) {
                    this.setState({ msg: result.message })
                } else {
                    console.log("Data submmit :- ", result)
                    localStorage.setItem("token", JSON.stringify(result))
                    window.location.pathname = "/home";
                }
            })
        } catch (err) {
            console.log("Catch error :", err)
            this.setState({ msg: "Network Error" })

        }
    }
    render() {
        return (
            <div>
                <h1>This is a login page</h1>
                <form
                    className="max-w-sm mx-auto">
                    <p style={{ color: "red" }}>{this.state.msg}</p>
                    <div className="mb-5">
                        <label htmlFor
                            ="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"
                            value={this.state.login} onChange={(e) => this.setState({ login: e.target.value })} required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required type="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })}/>
                    </div>
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={(event) => this.handleSubmit(event)}>Submit</button>
                </form>

            </div>
        )
    }
}
