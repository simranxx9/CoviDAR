import React, { Component } from 'react'
import '../css/Home.css'
import CoviIndia from './CoviIndia'
import back from '../images/back2.jpg'

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
            <>
                <div className="data-jumbo">
                    <div className="data-back"><img src={back} alt="" className="data-back-img" /></div>
                    <div className="data-jumbo-detail">CORONA</div>
                    <div className="data-top">
                        {this.state.data && this.state.data.filter(res => res.state === "Total").map((res, ind) => {
                            return (<p key={ind}
                                style={{ textAlign: "center", color: "#6c757d" }}>last updated at {' '}<br />{res.lastupdatedtime}{' '}IST</p>)
                        })}
                        {this.state.data && this.state.data.filter(res => res.state === "Total")
                            .map((res, ind) => {

                                return (
                                    <ul className="data-cards" key={ind}>

                                        <li className="data-details one" style={{ color: "blue" }}>active <br /><br /><span className="data-covid">{res.active}</span></li>
                                        <li className="data-details two" style={{ color: "red" }}>confirmed <br /><br /><span className="data-covid">{res.confirmed}</span></li>
                                        <li className="data-details three" style={{ color: "#888" }}>deaths <br /><br /><span className="data-covid">{res.deaths}</span></li>
                                        <li className="data-details four" style={{ color: "green" }}>recovered <br /><br /><span className="data-covid">{res.recovered}</span></li>
                                    </ul>
                                )

                            })}

                    </div>
                </div>
                <ul className="data-cards">
                    <li className="data-vaccine" style={{ color: "#22bb33" }}>total vaccination administered <br /><br /><span className="data-covid">{this.state.vaccineCount}</span></li>
                </ul>
                <CoviIndia />
            </>
        )
    }

}

export default Home
