import React, { useState, useEffect } from 'react'



import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useAlert } from 'react-alert'


import { Button, CardText, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, DropdownMenu, Dropdown, DropdownItem, DropdownToggle, Row, Alert } from 'reactstrap';


function Createtracer(props) {
    var valuetu = props.location.state.mrn_uuid;

    const [tracer, settracer] = useState({ mrn_uuid: valuetu, send_to: '', remark: '' });

    const [showLoading, setShowLoading] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [message, setmessage] = useState(false);
    const [messagevalue, setmessagevalue] = useState('');
    const toggle = () => setDropdownOpen(prevState => !prevState);

    var apiUrl = "http://localhost:5000/create_tracer_card";






    const alertpop = (alertval) => {

        setmessagevalue(alertval);
        console.log(alertval);
        if (alertval === 'tracer added') {
            setTimeout(() => {
                props.history.push('/Createtracer')

            }, 200);
        }
        setmessage(true);

    }
    const Inserttracer = (e) => {



        e.preventDefault();
        console.log(tracer.tracer_type);




        apiUrl = "http://localhost:5000/create_tracer_card";
        const data = tracer;



        axios.post(apiUrl, data)



            .then((result) => {

                console.log(result);
                alertpop(result.data.message)
                props.history.push('/FolderList')



            });




    };



    const onChange = (e) => {



        e.persist();







        settracer({ ...tracer, [e.target.name]: e.target.value });

    }

    return (



        < div className="app flex-row align-items-center" >



            < Container >



                < Row className="justify-content-center" >



                    < Col md="12" lg="10" xl="8" >



                        < Card className="mx-4" >



                            < CardBody className="p-4" >



                                < Form onSubmit={Inserttracer} >



                                    < h1 > Register</h1 >



                                    < InputGroup className="mb-3" >






                                        < Input type="send_to" name="send_to" id="send_to" placeholder="send to" value={tracer.send_to} onChange={onChange} />



                                    </InputGroup >

                                    < InputGroup className="mb-3" >
                                        < Input type="text" placeholder="remark" name="remark" id="remark" value={tracer.remark} onChange={onChange} />
                                    </InputGroup >


                                    < CardFooter className="p-4" >
                                        < Row >
                                            < Col xs="12" sm="6" >
                                                < Button type="submit" className="btn btn-info mb-1" block > <span>Save</span></Button >
                                            </Col >
                                            < Col xs="12" sm="6" >
                                                < Button className="btn btn-info mb-1" block > <span>Cancel</span></Button >
                                            </Col >
                                        </Row >
                                    </CardFooter >
                                    {message ?
                                        < CardFooter className="p-4" >
                                            <CardText >
                                                {messagevalue}
                                            </ CardText>
                                        </CardFooter >
                                        : <CardText></CardText>}
                                </Form >
                            </CardBody >
                        </Card >
                    </Col >
                </Row >
            </Container >
        </div >
    )
}



export default Createtracer