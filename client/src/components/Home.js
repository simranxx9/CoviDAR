import React, { Component } from 'react'

class Home extends Component {
    state = {
        data: ''
    }
    async getCovidData() {
        const res = await fetch(`https://api.covid19india.org/data.json`);
        const resData = await res.json()
        console.log(resData.statewise)
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
                {this.state.data && this.state.data.map((res, ind) => {
                    return (
                        <li key={ind}>
                            {res.state === "Total" &&
                                <h2>{res.active}</h2>}
                        </li>
                    )
                })}
            </div>
        )
    }

}

export default Home
