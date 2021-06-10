import React, { Component } from 'react'

export class News extends Component {
    state = {
        data: '',

    }
    getCovidData() {
        fetch("https://covid-19-news.p.rapidapi.com/v1/covid?q=covid&lang=en&media=True", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "cf20b9aaf7msh6ca24058bbdb5aap1abc80jsn5fcd4f5a5c31",
                "x-rapidapi-host": "covid-19-news.p.rapidapi.com"
            }
        })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.error(err);
            });

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
