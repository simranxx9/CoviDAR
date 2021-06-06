import React, { Component } from 'react'
import '../css/Faqs.css'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export class Faqs extends Component {
    state = {
        faqs: [
            { 'key': 1, 'question': "how are you", 'answer': "fine" },
            { 'key': 2, 'question': "how are you", 'answer': "fine" },
            { 'key': 3, 'question': "how are you", 'answer': "fine" },
            { 'key': 4, 'question': "how are you", 'answer': "fine" },
            { 'key': 5, 'question': "how are you", 'answer': "fine" }


        ],
        searchState: "",
        isActive: false,
        keyAns: 0
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleClick = (e) => {
        e.preventDefault()
    }
    render() {
        return (
            <div>
                <div className="search-box" style={{ marginTop: "40px" }}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input type="text" className="input-search"
                        onChange={this.handleChange} id="searchState"
                    />

                </div>
                <div className="container-fluid">
                    <h3 className="faqs-name">Frequently Asked Questions(FAQS)</h3>
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

                            <Accordion key={res.key}>
                                <Card>
                                    <Accordion.Toggle eventKey={res.key} style={{ background: "#fff" }}>
                                        <div style={{ textAlign: "left", padding: "10px" }} >

                                            <h3><span style={{ color: "#000", fontWeight: "bold " }}>Q.{' '}</span>{res.question}</h3>
                                        </div>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey={res.key}>
                                        <div className='panel'>

                                            <p>{res.answer}</p>
                                        </div>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        )
                    })}
            </div>
        )
    }
}

export default Faqs
