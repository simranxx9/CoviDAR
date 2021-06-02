import React, { Component } from 'react'
import Loading from './Loading';

class CoviIndia extends Component {

    constructor(props) {
        super(props);
        this.handleChangefor = this.handleChangefor.bind(this);


    }
    state = {
        data: '',
        searchState: "",
        showResults: false
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
    handleChangefor = () => {
        this.setState({
            showResults: true
        })
    }
    handleSearch = (e) => {
        const inside = e.target.value.toLowerCase();

        this.state.data.forEach(function (book) {
            // console.log(book)
            const content = book.state;
            {
                content.toLowerCase().indexOf(inside) !== -1 ?
                    console.log(book.state) : <>null</>
            }
            // if (content.toLowerCase().indexOf(inside) !== -1) {
            //     // book.style.display = 'block';
            //     console.log(book.state)
            //     return (
            //         <h3>{book.state}</h3>
            //     )
            // }
            // else {
            //     // book.style.display = 'none';
            //     return (
            //         <h2>not</h2>
            //     )
            // }
        });
    }
    render() {
        if (this.state.data) {
            return (
                <div>
                    CoviIndia COvid
                    <input type="text" onChange={this.handleChange} id="searchState"
                        onKeyUp={this.handleSearch} placeholder="search" />
                    <table style={{ width: "100%" }}>
                        <tbody>
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Active</th>
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
        else {
            return (
                <Loading />
            )
        }
    }

}

export default CoviIndia
