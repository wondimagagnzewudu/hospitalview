import React, { useState, useEffect } from 'react'



import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useAlert } from 'react-alert'


import { Button, CardText, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, DropdownMenu, Dropdown, DropdownItem, DropdownToggle, Row, Alert } from 'reactstrap';


function Createuser(props) {


    const [user, setuser] = useState({ user_name: '', password: '', user_type: '', phone_number: '' });

    const [showLoading, setShowLoading] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [message, setmessage] = useState(false);
    const [messagevalue, setmessagevalue] = useState('');
    const toggle = () => setDropdownOpen(prevState => !prevState);

    var apiUrl = "http://localhost:5000/create_user";






    const alertpop = (alertval) => {

        setmessagevalue(alertval);
        console.log(alertval);
        if (alertval === 'user added') {
            setTimeout(() => {
                props.history.push('/Createuser')

            }, 200);
        }
        setmessage(true);

    }
    const Insertuser = (e) => {



        e.preventDefault();
        console.log(user.user_type);


        if (user.user_type === 'admin') {

            apiUrl = "http://localhost:5000/create_user_admin";
            const data = { user_name: user.user_name, password: user.password, };



            axios.post(apiUrl, data)



                .then((result) => {

                    console.log(result);
                    alertpop(result.data.message)




                });
        }
        else if (user.user_type === 'controller') {
            apiUrl = "http://localhost:5000/create_user_controller";
            const data = { user_name: user.user_name, password: user.password, };



            axios.post(apiUrl, data)



                .then((result) => {
                    console.log(result.data);
                    alertpop(result.data.message)





                });
        }
        else if (user.user_type === 'user') {
            var apiUrl = "http://localhost:5000/create_user";
            const data = { user_name: user.user_name, password: user.password, };



            axios.post(apiUrl, data)



                .then((result) => {

                    console.log(result);

                    alertpop(result.data.message)




                });

        }

    };



    const onChange = (e) => {



        e.persist();







        setuser({ ...user, [e.target.name]: e.target.value });

    }

    return (



        < div className="app flex-row align-items-center" >



            < Container >



                < Row className="justify-content-center" >



                    < Col md="12" lg="10" xl="8" >



                        < Card className="mx-4" >



                            < CardBody className="p-4" >



                                < Form onSubmit={Insertuser} >



                                    < h1 > Register</h1 >



                                    < InputGroup className="mb-3" >






                                        < Input type="text" name="user_name" id="user_name" placeholder="user_name" value={user.user_name} onChange={onChange} />



                                    </InputGroup >



                                    < InputGroup className="mb-3" >
                                        < Input type="password" placeholder="password" name="password" id="password" value={user.password} onChange={onChange} />
                                    </InputGroup >
                                    < InputGroup className="mb-3" >
                                        < Input type="text" placeholder="phone_number" name="phone_number" id="phone_number" value={user.phone_number} onChange={onChange} />
                                    </InputGroup >
                                    <div class="input-group mb-3">
                                        <div class="input-group-append">
                                            <label class="input-group-text" for="inputGroupSelect02">user type</label>
                                        </div>
                                        <select name="user_type" value={user.user_type} onChange={onChange} class="custom-select" id="inputGroupSelect02">
                                            <option value="user" selected>nurse</option>
                                            <option value="admin">admin</option>
                                            <option value="controller">controller</option>

                                        </select>

                                    </div>
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



export default Createuser