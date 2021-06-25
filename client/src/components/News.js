import React, { Component } from 'react'
import Loading from './Loading'

export class News extends Component {
    state = {
        news: '',

    }
    async getCovidData() {
        const resNews = await fetch("https://coronavirus-smartable.p.rapidapi.com/news/v1/US/", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "cf20b9aaf7msh6ca24058bbdb5aap1abc80jsn5fcd4f5a5c31",
                "x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com"
            }
        })
        const res = await resNews.json()

        this.setState({
            news: res.news
        })
        console.log(this.state.news)

    }
    componentDidMount() {

        this.getCovidData()
        console.log(this.state.news)
    }

    render() {
        if (this.state.news) {
            return (
                <div>
                    {this.state.news && this.state.news.map((res, ind) => {
                        return (
                            <ul key={ind}>
                                <li>{res.title}</li>
                                <li>{res.excerpt}</li>
                                <a href={res.webUrl}>For more</a>
                            </ul>
                        )
                    })}
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

export default News
