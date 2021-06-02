import React, { Component } from 'react'
import '../css/Home.css'
import CoviIndia from './CoviIndia'
class Home extends Component {
    state = {
        data: '',
        vaccineCount: ''
    }
    async getCovidData() {
        const res = await fetch(`https://api.covid19india.org/data.json`);
        const resData = await res.json()
        const totalVaccine = resData.tested[resData.tested.length - 1].totaldosesadministered;
        // console.log(totalVaccine)
        this.setState({
            data: resData.statewise,
            vaccineCount: totalVaccine
        })
    }
    componentDidMount() {

        this.getCovidData()
    }

    render() {
        return (
            <div>
                Home COvid
                {this.state.data && this.state.data.filter(res => res.state === "Total").map((res, ind) => {
                    return (<p key={ind}
                        style={{ textAlign: "center", color: "#6c757d" }}>last updated at {' '}<br />{res.lastupdatedtime}{' '}IST</p>)
                })}
                {this.state.data && this.state.data.filter(res => res.state === "Total")
                    .map((res, ind) => {

                        return (
                            <ul className="data-cards" key={ind}>

                                <li className="data-details one" style={{ color: "blue" }}>active <br /><br />{res.active}</li>
                                <li className="data-details two" style={{ color: "red" }}>confirmed <br /><br />{res.confirmed}</li>
                                <li className="data-details three" style={{ color: "#888" }}>deaths <br /><br />{res.deaths}</li>
                                <li className="data-details four" style={{ color: "green" }}>recovered <br /><br />{res.recovered}</li>
                            </ul>
                        )

                    })}
                <ul className="data-cards">
                    <li className="data-details four" style={{ color: "green" }}>total vaccination administered <br /><br />{this.state.vaccineCount}</li>
                </ul>
                <CoviIndia />
            </div>
        )
    }

}

export default Home
