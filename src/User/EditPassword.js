import React, { useState, useEffect } from 'react'



import axios from 'axios';


import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';


function EditPassword(props) {

    var valuetu = props.location.state.user_uuid;

    const [user, setuser] = useState({ user_uuid: valuetu, user_name: '', user_discription: '' });







    const Updateuser = (e) => {



        e.preventDefault();



        const body = { user_uuid: valuetu, user_name: user.user_name };



        axios.post('http://localhost:5000/update_user', body)



            .then(() => {



                props.history.push('/userList')



            });



    };



    const onChange = (e) => {



        e.persist();

        console.log(e);
        setuser({ ...user, [e.target.name]: e.target.value });



    }







    return (



        < div className="app flex-row align-items-center" >


            < Container >



                < Row className="justify-content-center" >



                    < Col md="12" lg="10" xl="8" >



                        < Card className="mx-4" >



                            < CardBody className="p-4" >



                                < Form onSubmit={Updateuser} >
                                    < h1 > Update user</h1 >


                                    < InputGroup className="mb-3" >
                                        < Input type="text" name="user_name" id="user_name" placeholder="user name" value={user.user_name} onChange={onChange} />
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



                                </Form >



                            </CardBody >



                        </Card >



                    </Col >



                </Row >



            </Container >



        </div >



    )



}







export default EditPassword