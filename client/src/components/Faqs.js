import React, { Component } from 'react'
import '../css/Faqs.css'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';
import Forms from './Forms'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export class Faqs extends Component {
    state = {
        faqs: [
            { 'key': 1, 'question': "What is Covid19", 'answer': "Corona virus is a contiguous desease(desease which spread by transmission of pathogen from infected person to other person) which is caused by SARS-CoV-2(Severe Acute Respiratory Syndrome Coronavirus-2." },
            { 'key': 2, 'question': "Why it is coronavirus", 'answer': "These viruses are called coronaviruses because the virus is visually characterized by fringed projections surrounding it, similar to rays and flares of the plasma aura around the sun, known as a solar corona." },
            { 'key': 3, 'question': "Why SARS-Cov-2", 'answer': "The International Committee on Taxonomy of Viruses (ICTV) who generally names the viruses termed it as SARS-Cov-2 because the virus is genetically related to the coronavirus that caused the SARS outbreak in 2003. Despite this genetic link, the viruses are distinct from each other." },
            { 'key': 7, 'question': "Why it is Covid19", 'answer': "The first case of corona virus was seen in Wuhan,China in December,2019" },
            { 'key': 8, 'question': "What are the symptoms of Covid19", 'answer': "Symtoms include fever, cough, cold, loss of smelling sense, breathing difficulty, and fatigueness." },
            { 'key': 4, 'question': "How to register for vaccination", 'answer': "You can log into the Co-WIN portal using the link\n www.cowin.gov.in \nand click on the “Register/Sign In yourself” tab to register for the COVID-19 vaccination." },
            { 'key': 5, 'question': "How many vaccines are there for Covid 19 in India", 'answer': "India has authorized three COVID-19 vaccines: Covaxin, developed by Bharat Biotech. Covishield, developed by Oxford/AstraZeneca. Sputnik V, developed by the Gamaleya Research Institute of Epidemiology and Microbiology, Russia." },
            { 'key': 6, 'question': "Which institute discovered covidshied along with Oxford/AstraZaneca", 'answer': "Serum Institute of India, Pune" }
            , { 'key': 9, 'question': "Which drug is developed by DRDO", 'answer': "2-DG(2-Deoxy-D-Glucose) and it is taken orally." },
            { 'key': 10, 'question': "Name the rapid antigen self test kit", 'answer': `CoviSelf made by MyLab and it costs ₹250 and you can purchase it by visiting https://www.flipkart.com/mylab-coviself-covid-19-rapid-antigen-self-test-kit/p/itm4d34ea09cad97 ` },
            // { 'key': 10, 'question': "", 'answer': "" },
            // { 'key': 10, 'question': "", 'answer': "" },
            // { 'key': 10, 'question': "", 'answer': "" }


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
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

                {/* form-container */}
                <Forms />

                <div className="faqs-container">
                    <h1 className="head-box" style={{ color: "#98f898", padding: "10px", margin: "0", fontSize: "16px" }}>Search your question</h1>
                    <div className="search-box">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <input type="text" className="input-search"
                            onChange={this.handleChange} id="searchState"
                        />

                    </div>
                    <div className="container-fluid">
                        <h2 className="faqs-name">Frequently Asked Questions(FAQS)</h2>
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

                                                <p style={{ textTransform: "none" }}>{res.answer}</p>
                                            </div>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            )
                        })}
                </div>

            </div>
        )
    }
}

export default Faqs
