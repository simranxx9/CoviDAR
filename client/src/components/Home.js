import React, { Component } from 'react'
import '../css/Home.css'
class Home extends Component {
    state = {
        data: ''
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

    render() {
        return (
            <div>
                Home COvid
                {this.state.data && this.state.data.filter(res => res.state === "Total").map((res, ind) => {
                    return (<h2 key={ind}>{res.lastupdatedtime}</h2>)
                })}
                {this.state.data && this.state.data.filter(res => res.state === "Total").
                    map((res, ind) => {

                        return (
                            <ul className="data-cards" key={ind}>

                                <li className="data-details one" style={{ color: "blue" }}>active <br /><br />{res.active}</li>
                                <li className="data-details two" style={{ color: "red" }}>confirmed <br /><br />{res.confirmed}</li>
                                <li className="data-details three" style={{ color: "#888" }}>deaths <br /><br />{res.deaths}</li>
                                <li className="data-details four" style={{ color: "green" }}>recovered <br /><br />{res.recovered}</li>
                            </ul>
                        )

                    })}
            </div>
        )
    }

}

export default Home
