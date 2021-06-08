import React, { Component } from 'react';
import '../css/Faqs.css'

class Forms extends Component {
    state = {
        name: "",
        query: "",
        email: "",
        mobileNumber: "",
        address: ""
    }
    handleChange = (e) => {
        this.setState(
            {
                [e.target.id]: e.target.value
            }
        )
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);
        const data = new FormData();

        data.append('name', this.state.name);
        data.append('query', this.state.query);
        data.append('email', this.state.email)
        data.append('mobileNumber', this.state.mobileNumber)
        data.append('address', this.state.address)

        fetch(`http://localhost:8080/queries`, {

            method: "Post",
            body: data
        })
            .then(() => alert("Received"))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="forms-container">

                <form className="white"
                    onSubmit={this.handleSubmit}
                >
                    {/* <h5 className="grey-text text-darken-3">Sign Up</h5> */}
                    <h1 className="head-box" style={{ color: "#50c878", padding: "10px", margin: "10px auto", fontSize: "16px" }}>Ask your Query!</h1>

                    <div className="input-field">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name"
                            onChange={this.handleChange}
                            required
                        />
                    </div>

                    <div className="input-field">
                        <label htmlFor="query" style={{ paddingLeft: "10px", marginBottom: "10px" }}>Query</label>
                        <textarea id="query" style={{ padding: "10px", width: "300px", height: "200px" }}
                            onChange={this.handleChange}
                            required
                        />
                    </div>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email"
                            onChange={this.handleChange}
                            required
                        />
                    </div>


                    <div className="input-field">
                        <label htmlFor="mobileNumber">Number</label>
                        <input type="tel" minLength="10" maxLength="10"
                            id="mobileNumber"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address"
                            onChange={this.handleChange}

                        />
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Submit</button>
                    </div>

                </form>
            </div>
        );
    }
}

export default Forms;