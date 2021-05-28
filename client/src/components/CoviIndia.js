import React, { Component } from 'react'

class CoviIndia extends Component {
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
                CoviIndia COvid
                <table style={{ width: "100%" }}>
                    <tbody>
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Actie</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                        </tr>
                        {this.state.data && this.state.data.map((res, ind) => {
                            return (
                                <tr key={ind}>
                                    <th>{res.state}</th>
                                    <td>{res.confirmed}</td>
                                    <td>{res.active}</td>
                                    <td>{res.recovered}</td>
                                    <td>{res.deaths}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default CoviIndia
