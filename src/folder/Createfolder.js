import React, { useState, useEffect } from 'react'



import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useAlert } from 'react-alert'


import { Button, CardText, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, DropdownMenu, Dropdown, DropdownItem, DropdownToggle, Row, Alert } from 'reactstrap';


function Createfolder(props) {


    const [folder, setfolder] = useState({ medical_record_number: '', name: '', father_name: '', grand_father_name: '', date_of_birth_date: '', birth_month: '', birth_year: '', age: '', address: '', region: '', worda: '', gott: '', kebele: '', house_number: '', name_of_facility: '', phone_number: '', });

    const [showLoading, setShowLoading] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [message, setmessage] = useState(false);
    const [messagevalue, setmessagevalue] = useState('');
    const toggle = () => setDropdownOpen(prevState => !prevState);

    var apiUrl = "http://localhost:5000/create_folder";






    const alertpop = (alertval) => {

        setmessagevalue(alertval);
        console.log(alertval);
        if (alertval === 'folder added') {
            setTimeout(() => {
                props.history.push('/Createfolder')

            }, 200);
        }
        setmessage(true);

    }
    const Insertfolder = (e) => {



        e.preventDefault();
        console.log(folder.folder_type);




        apiUrl = "http://localhost:5000/create_mrn";
        const data = folder;



        axios.post(apiUrl, data)



            .then((result) => {

                console.log(result);
                alertpop(result.data.message)




            });




    };



    const onChange = (e) => {



        e.persist();







        setfolder({ ...folder, [e.target.name]: e.target.value });

    }

    return (



        < div className="app flex-row align-items-center" >



            < Container >



                < Row className="justify-content-center" >



                    < Col md="12" lg="10" xl="8" >



                        < Card className="mx-4" >



                            < CardBody className="p-4" >



                                < Form onSubmit={Insertfolder} >



                                    < h1 > Register</h1 >



                                    < InputGroup className="mb-3" >






                                        < Input type="medical_record_number" name="medical_record_number" id="medical_record_number" placeholder="medical record number" value={folder.medical_record_number} onChange={onChange} />



                                    </InputGroup >


                                    < InputGroup className="mb-3" >
                                        < Input type="text" placeholder="name_of_facility" name="name_of_facility" id="name_of_facility" value={folder.name_of_facility} onChange={onChange} />
                                    </InputGroup >
                                    < InputGroup className="mb-3" >
                                        < Input type="text" placeholder="name" name="name" id="name" value={folder.name} onChange={onChange} />
                                    </InputGroup >
                                    < InputGroup className="mb-3" >
                                        < Input type="text" placeholder="father_name" name="father_name" id="father_name" value={folder.father_name} onChange={onChange} />
                                    </InputGroup >
                                    < InputGroup className="mb-3" >
                                        < Input type="text" placeholder="grand_father_name" name="grand_father_name" id="grand_father_name" value={folder.grand_father_name} onChange={onChange} />
                                    </InputGroup >
                                    < InputGroup className="mb-3" >
                                        < Input type="text" placeholder="date_of_birth_date" name="date_of_birth_date" id="date_of_birth_date" value={folder.date_of_birth_date} onChange={onChange} />
                                    </InputGroup >
                                    < InputGroup className="mb-3" >
                                        < Input type="text" placeholder="birth_month" name="birth_month" id="birth_month" value={folder.birth_month} onChange={onChange} />
                                    </InputGroup >
                                    < InputGroup className="mb-3" >
                                        < Input type="text" placeholder="birth_year" name="birth_year" id="birth_year" value={folder.birth_year} onChange={onChange} />
                                    </InputGroup >
                                    < InputGroup className="mb-3" >
                                        < Input type="number" placeholder="age" name="age" id="age" value={folder.age} onChange={onChange} />
                                    </InputGroup >
                                    < InputGroup className="mb-3" >
                                        < Input type="text" placeholder="address" name="address" id="address" value={folder.address} onChange={onChange} />
                                    </InputGroup >
                                    < InputGroup className="mb-3" >
                                        < Input type="text" placeholder="region" name="region" id="region" value={folder.region} onChange={onChange} />
                                    </InputGroup >
                                    < InputGroup className="mb-3" >
                                        < Input type="text" placeholder="kebele" name="kebele" id="kebele" value={folder.kebele} onChange={onChange} />
                                    </InputGroup >
                                    < InputGroup className="mb-3" >
                                        < Input type="text" placeholder="house_number" name="house_number" id="house_number" value={folder.house_number} onChange={onChange} />
                                    </InputGroup >
                                    < InputGroup className="mb-3" >
                                        < Input type="text" placeholder="phone_number" name="phone_number" id="phone_number" value={folder.phone_number} onChange={onChange} />
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



export default Createfolder