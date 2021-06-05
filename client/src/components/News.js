import React, { Component } from 'react'

export class News extends Component {
    state = {
        data: '',

    }
    async getCovidData() {
        const res = await fetch("https://corona-updates.p.rapidapi.com/", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "cf20b9aaf7msh6ca24058bbdb5aap1abc80jsn5fcd4f5a5c31",
                "x-rapidapi-host": "corona-updates.p.rapidapi.com"
            }
        })

            .then(response => {
                console.log(response);
                const resData = response;
                console.log(resData)
                this.setState({
                    data: resData
                })
            })
            .catch(err => {
                console.error(err);
            });
        console.log(res)

    }
    componentDidMount() {

        this.getCovidData()
    }

    render() {
        return (
            <div>
                News
            </div>
        )
    }
}

export default News
