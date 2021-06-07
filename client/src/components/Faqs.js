import React, { Component } from 'react'
import '../css/Faqs.css'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export class Faqs extends Component {
    state = {
        faqs: [
            { 'key': 1, 'question': "What is Covid19", 'answer': "Corona virus is a contiguous desease(desease which spread by transmission of pathogen from infected person to other person) which is caused by SARS-CoV-2(Severe Acute Respiratory Syndrome Coronavirus-2." },
            { 'key': 2, 'question': "Why it is coronavirus", 'answer': "These viruses are called coronaviruses because the virus is visually characterized by fringed projections surrounding it, similar to rays and flares of the plasma aura around the sun, known as a solar corona." },
            { 'key': 3, 'question': "Why SARS-Cov-2", 'answer': "The International Committee on Taxonomy of Viruses (ICTV) who generally names the viruses termed it as SARS-Cov-2 because the virus is genetically related to the coronavirus that caused the SARS outbreak in 2003. Despite this genetic link, the viruses are distinct from each other." },
            { 'key': 7, 'question': "Why it is Covid19", 'answer': "The first case of corona virus was seen in Wuhan,China in December,2019" },
            { 'key': 8, 'question': "What are the symptoms of Covid19", 'answer': "fine" },
            { 'key': 4, 'question': "how are you", 'answer': "fine" },
            { 'key': 5, 'question': "how are you", 'answer': "fine" },
            { 'key': 6, 'question': "how are you", 'answer': "fine" }


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
                <h1 className="head-box" style={{ marginTop: "50px" }}>Search your question</h1>
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

                                            <h3><span style={{ color: "#000", fontWeight: "bold " }}>
                                                Q.{' '}</span><span style={{ color: "#50c878" }}>{res.question}</span>
                                                <span style={{ color: "#ff0000", fontWeight: "bold " }}>{' '}?</span>
                                            </h3>
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
