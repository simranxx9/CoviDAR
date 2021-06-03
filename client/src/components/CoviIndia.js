import React, { Component } from 'react'
import Loading from './Loading';
import '../css/CoviIndia.css';
import Faqs from "./Faqs"

class CoviIndia extends Component {


    state = {
        data: '',
        searchState: ""
    }
    async getCovidData() {
        const res = await fetch(`https://api.covid19india.org/data.json`);
        const resData = await res.json()
        // console.log(resData.statewise)
        this.setState({
            data: resData.statewise
        })
    }
    componentDidMount() {

        this.getCovidData()
    }
    handleChange = (e) => {
        this.setState(
            {
                [e.target.id]: e.target.value
            }
        )
    }


    render() {
        if (this.state.data) {
            return (
                <div>
                    <h1 style={{ textAlign: "center", margin: "20px" }}>Statewise Data</h1>
                    <input type="text" className="input-search"
                        onChange={this.handleChange} id="searchState"
                        placeholder="Search your state..." />
                    <table style={{ width: "70%", overflow: "scroll", margin: "10px auto" }}>
                        <tbody>
                            <tr>
                                <th className="table-head">State/UT</th>
                                <th className="table-head">Confirmed</th>
                                <th className="table-head">Active</th>
                                <th className="table-head">Recovered</th>
                                <th className="table-head">Deceased</th>
                            </tr>
                            {this.state.data && this.state.data.filter((res) => {
                                if (res.state.toLowerCase().includes(this.state.searchState.toLowerCase())) {
                                    return res;
                                }
                                else if (this.state.searchState === "") {
                                    return res;
                                }

                            })
                                .map((res, ind) => {
                                    return (
                                        <tr key={ind}>

                                            <th className="state-head">{res.state}</th>
                                            <td className="covid-confirmed">{res.confirmed}</td>
                                            <td className="covid-active">{res.active}</td>
                                            <td className="covid-recovered">{res.recovered}</td>
                                            <td className="covid-deaths">{res.deaths}</td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
                </div>
            )
        }
        else {
            return (
                <Loading />
            )
        }
    }

}

export default CoviIndia
