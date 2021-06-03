import React, { Component } from 'react'
import '../css/Home.css'
import CoviIndia from './CoviIndia'
import back from '../images/back2.jpg'
import back3 from '../images/back3.jpg'


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
                    <div className="data-jumbo-detail">
                        <h2>CORONA VIRUS(Covid19)</h2>
                        <p>SARS-Cov-2 Virus</p>
                    </div>
                    <div className="data-top">
                        <h1 style={{ display: "flex", justifyContent: "center", margin: "20px auto", fontSize: "48px", fontWeight: "600" }}>INDIA</h1>
                        {this.state.data && this.state.data.filter(res => res.state === "Total").map((res, ind) => {
                            return (<p key={ind}
                                style={{ textAlign: "center", color: "#6c757d", margin: "20px 0" }}>last updated at {' '}<br />{res.lastupdatedtime}{' '}IST</p>)
                        })}
                        {this.state.data && this.state.data.filter(res => res.state === "Total")
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
                <div className="data-jumbo">
                    <ul className="data-cards vaccine" style={{ display: "flex", alignItems: "center", margin: "20px" }}>
                        <li className="data-vaccine" style={{ color: "#22bb33" }}>total vaccination administered <br /><br /><span className="data-covid">
                            {Number(parseInt(this.state.vaccineCount)).toLocaleString('en')}</span></li>
                    </ul>
                    <div className="data-jumbo-detail2">
                        <h2>Vaccination Drive</h2>
                        <p>Ready for your turn.</p>
                    </div>
                    <div className="data-back"><img src={back3} alt="" className="data-back-img" /></div>

                </div>

                <CoviIndia />
            </>
        )
    }

}

export default Home
