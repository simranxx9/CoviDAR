import React, { Component } from 'react'

export class Faqs extends Component {
    state = {
        faqs: [
            { 'question': "how are you", 'answer': "fine" },
            { 'question': "how are you", 'answer': "fine" },
            { 'question': "how are you", 'answer': "fine" }
        ],
        searchState: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <div className="search-box">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input type="text" className="input-search"
                        onChange={this.handleChange} id="searchState"
                    />
                </div>
                {this.state.faqs.filter((res) => {
                    if (res.question.toLowerCase().includes(this.state.searchState.toLowerCase())) {
                        return res;

                    }
                    else if (this.state.searchState === "") {
                        return res;
                    }

                })
                    .map((res, ind) => {
                        return (
                            <ul key={ind}>
                                <li>{res.question}</li>
                                <li>{res.answer}</li>
                            </ul>
                        )
                    })}
            </div>
        )
    }
}

export default Faqs
