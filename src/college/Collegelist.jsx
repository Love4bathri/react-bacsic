import React from 'react'

export default class Collegelist extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            url: "https://manraj-ors-1.onrender.com/college"
        }
    }

    handleApi2() {
        fetch(this.state.url).then((Response) => Response.json().then((json) => {
            this.setState({ data: json })
        }))
    }

    componentDidMount() {
        this.handleApi2();
    }

    handleDelete1(id) {
        fetch("https://manraj-ors-1.onrender.com/college/" + id, {
            method: "DELETE"
        }).then((resp) => resp.json()).then((result) => {
            console.log(result);

            this.handleApi2()
        })
    }


    render() {
        return (
            <>

                <h1 className="text-center mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className
                    ="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">College-List</span> Scalable AI.</h1>
                <div className
                    ="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className
                        ="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
                        <thead className
                            ="text-xs text-white uppercase bg-blue-600 dark:text-white">
                            <tr>
                                <th scope="col" className
                                    ="px-6 py-3">
                                    #
                                </th>
                                <th scope="col" className
                                    ="px-6 py-3">
                                    College Id's
                                </th>
                                <th scope="col" className
                                    ="px-6 py-3">
                                    College Name
                                </th>
                                <th scope="col" className
                                    ="px-6 py-3">
                                    Address
                                </th>
                                <th scope="col" className
                                    ="px-6 py-3">
                                    City
                                </th>
                                <th scope="col" className
                                    ="px-6 py-3">
                                    Phone Number
                                </th>
                                <th scope="col" className
                                    ="px-6 py-3">
                                    State
                                </th>
                                <th scope="col" className
                                    ="px-6 py-3">
                                    Operation
                                </th>


                            </tr>
                        </thead>
                        <tbody>

                            {
                                this.state?.data && this.state?.data.map((ele, i) => {
                                    return (
                                        <tr key={ele.id} className
                                            ="bg-blue-500 border-b border-blue-400">
                                            <th scope="row" className
                                                ="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                                {i + 1}
                                            </th>
                                            <th scope="row" className
                                                ="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                                {ele._id}
                                            </th>
                                            <th scope="row" className
                                                ="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                                {ele.collegeName}
                                            </th>
                                            <th scope="row" className
                                                ="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                                {ele.address}
                                            </th>
                                            <th scope="row" className
                                                ="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                                {ele.city}
                                            </th>
                                            <th scope="row" className
                                                ="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                                {ele.mobileNo}
                                            </th>
                                            <th scope="row" className
                                                ="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                                {ele.state}
                                            </th>
                                            <th scope="row" className
                                                ="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-800">

                                                <a href={`/addcollege/${ele._id}`}>EDIT</a>                                                  <br />
                                                <button onClick={() => this.handleDelete1(ele._id)}>Delete</button>
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
