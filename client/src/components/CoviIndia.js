import React, { Component } from 'react'
import Loading from './Loading';
import '../css/CoviIndia.css';


class CoviIndia extends Component {


    state = {
        data: '',
        searchState: "",
        stateActive: "Jammu and Kashmir"
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
    handleClick = (value) => {

        this.setState(
            {
                stateActive: value.res.state
            }
        )

    }

    render() {
        if (this.state.data) {
            return (
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                    <div className="state-data">
                        <div className="data-top">
                            <h1 style={{ display: "flex", justifyContent: "center", textAlign: "center", margin: "20px auto", fontSize: "48px", fontWeight: "600" }}>{this.state.stateActive}</h1>
                            {this.state.data && this.state.data.filter(res => res.state === this.state.stateActive).map((res, ind) => {
                                return (<p key={ind}
                                    style={{ textAlign: "center", color: "#6c757d", margin: "20px 0" }}>last updated at {' '}<br />{res.lastupdatedtime}{' '}IST</p>)
                            })}
                            {this.state.data && this.state.data.filter(res => res.state === this.state.stateActive)
                                .map((res, ind) => {

                                    return (
                                        <ul className="data-cards" key={ind}>

                                            <li className="data-details one" style={{ color: "blue" }}>active <br /><br /><span className="data-covid">
                                                {Number(parseInt(res.active)).toLocaleString('en')}</span></li>
                                            <li className="data-details two" style={{ color: "red" }}>confirmed <br /><br /><span className="data-covid">
                                                {Number(parseInt(res.confirmed)).toLocaleString('en')}
                                            </span></li>
                                            <li className="data-details three" style={{ color: "#888" }}>deceased <br /><br /><span className="data-covid">
                                                {Number(parseInt(res.deaths)).toLocaleString('en')}</span></li>
                                            <li className="data-details four" style={{ color: "green" }}>recovered <br /><br /><span className="data-covid">
                                                {Number(parseInt(res.recovered)).toLocaleString('en')}</span></li>
                                        </ul>
                                    )

                                })}

                        </div>
                    </div>
                    <div>
                        <h1 style={{ textAlign: "center", margin: "20px" }}>Statewise Data</h1>
                        <input type="text" className="input-search"
                            onChange={this.handleChange} id="searchState"
                            placeholder="Search your state...    " />
                        <table style={{ backgroundColor: "#fff", overflow: "scroll", margin: "10px auto" }}>
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

                                                <th className="state-head" onClick={() => this.handleClick({ res })} value={res.state}
                                                >{res.state}</th>
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
