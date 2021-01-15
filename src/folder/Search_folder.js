import React from 'react'



import { Button, CardText, Table, Card, CardBody, CardHeader, CardFooter, Col, Container, Form, Input, InputGroup, DropdownMenu, Dropdown, DropdownItem, DropdownToggle, Row, Alert } from 'reactstrap';



import axios from 'axios';



import { useState, useEffect } from 'react'



function Search_folder(props) {



    const todosPerPage = 10;
    const [issearcherd, setIssearcherd] = useState(false);
    const [value, setvalue] = useState({ identify: '', value: '' });
    const [data, setData] = useState([]);
    const [dataserched, setDataserched] = useState([]);
    const [serchedValue, setserchedValue] = useState('');
    const [activePage, setCurrentPage] = useState(1);
    const indexOfLastTodo = activePage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;










    const Listofspecficuseruser = (id) => {



        props.history.push({



            pathname: '/User_Search_folder',

            state: {
                'user_uuid': id,
            }



        });



    };
    const Searchuser = (e) => {



        e.preventDefault();


        console.log(value);
        const body = {
            'identify': value.identify,
            'value': value.value
        }
        axios.post('http://localhost:5000/search_mrn', body)



            .then((response) => {


                console.log(response);
                setData(response.data.mrn
                );
                setIssearcherd(true);



            });



    };
    const deleteeployee = (id) => {
        const bodyn = {

            'user_uuid': id,

        };

        axios({
            url: 'http://localhost:5000/delet_user',
            method: 'DELETE',
            data: bodyn,
            headers: {
                'Content-Type': 'application/json',
                responseType: 'arraybuffer',
            },
            responseType: 'blob',
        }).then((response) => {



            props.history.push('/userList')



        });



    };


    const EditPassword = (id, id2) => {



        props.history.push({



            pathname: '/EditPassword/',

            state: {
                user_uuid: id,
                destination_uuid: id2,
            }


        });



    };
    const create_tracer = (id) => {



        props.history.push({



            pathname: '/Createtracer',

            state: {
                mrn_uuid: id,
            }


        });



    };
    const view_tracer = (id) => {



        props.history.push({



            pathname: '/TracerList',

            state: {
                mrn_uuid: id,
            }


        });



    };
    const Edituser = (id, id2) => {



        props.history.push({



            pathname: '/Edituser/',

            state: {
                user_uuid: id,
                destination_uuid: id2,
            }


        });



    };



    const onChange = (e) => {



        e.persist();







        setvalue({ ...value, [e.target.name]: e.target.value });

    }




    return (



        < div className="animated fadeIn" >
            <CardBody>

                {issearcherd ?
                    < Row >


                        < Col >



                            < Card >



                                < CardHeader >



                                    < i className="fa fa-align-justify" ></i >Individual Folder  List



              </CardHeader >



                                < CardBody >



                                    < Table hover bordered striped responsive size="sm" >



                                        < thead >  < tr >


                                            < th > medical_record_number</th >
                                            < th > name </th >
                                            < th > father_name</th >
                                            < th > grand_father_name</th >
                                            < th > date_of_birth_date</th >
                                            < th > birth_month</th >
                                            < th >birth_year</th >
                                            < th > age</th >
                                            < th > address</th >
                                            < th > region </th >
                                            < th > worda</th >
                                            < th > gott</th >
                                            < th > kebele</th >
                                            < th > house_number </th >
                                            < th > phone_number</th >
                                            < th > Action</th >
                                        </tr >



                                        </thead >



                                        < tbody >  {data.map((item, idx) => {
                                            return <tr>


                                                <td>{item.medical_record_number}</td>
                                                <td>{item.name}</td>
                                                <td>{item.father_name}</td>
                                                <td>{item.grand_father_name}</td>
                                                <td>{item.date_of_birth_date}</td>
                                                <td>{item.birth_month}</td>
                                                <td>{item.birth_year}</td>
                                                <td>{item.age}</td>
                                                <td>{item.address}</td>
                                                <td>{item.region}</td>
                                                <td>{item.worda}</td>
                                                <td>{item.gott}</td>
                                                <td>{item.kebele}</td>
                                                <td>{item.house_number}</td>
                                                <td>{item.phone_number}</td>



                                                <td>                  <div class="btn-group">                      <button className="btn btn-info" onClick={() => { Edituser(item.user_uuid, item.user_uuid) }}>Edit</button>

                                                    <button className="btn btn-info" onClick={() => { create_tracer(item.mrn_uuid) }}>add tracker</button>
                                                    <button className="btn btn-info" onClick={() => { view_tracer(item.mrn_uuid) }}>view tracker</button>
                                                    <button className="btn btn-info" onClick={() => { EditPassword(item.user_uuid, item.user_uuid) }}>view tracker</button>
                                                    <button className="btn btn-danger" onClick={() => { deleteeployee(item.user_uuid) }}>Delete</button>                  </div>              </td>          </tr>
                                        })
                                        }



                                        </tbody >



                                    </Table >



                                </CardBody >



                            </Card >



                        </Col >



                    </Row >

                    :
                    < CardBody >
                        <div>
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <label class="input-group-text" for="inputGroupSelect02">Search form</label>
                                </div>
                                < Form onSubmit={Searchuser} >
                                    <select name="identify" value={value.identify} onChange={onChange} class="custom-select" id="identify">
                                        <option value="medical_record_number">select search option</option>
                                        <option value="medical_record_number">medical record number</option>
                                        <option value="name" selected>name</option>
                                        <option value="father_name" selected>father name</option>
                                        <option value="grand_father_name">grand father name</option>
                                        <option value="date_of_birth_date">date of birth date</option>
                                        <option value="dbirth_month">birth month</option>
                                        <option value="birth_year">birth year</option>
                                        <option value="age">age</option>
                                        <option value="address"> 	address</option>
                                        <option value="region">region</option>
                                        <option value="worda">worda</option>
                                        <option value="gott">gott</option>
                                        <option value="kebele">kebele</option>
                                        <option value="house_number">house number</option>
                                        <option value="phone_number">phone number</option>


                                    </select>
                                    < InputGroup className="mb-3" >
                                        < Input type="value" placeholder="value" name="value" id="value" value={value.value} onChange={onChange} />
                                    </InputGroup >
                                    < CardFooter className="p-4" >
                                        < Row >
                                            < Col xs="12" sm="6" >
                                                < Button type="submit" className="btn btn-info mb-1" block > <span>search</span></Button >
                                            </Col >

                                        </Row >
                                    </CardFooter >
                                </Form>

                            </div>
                        </div>
                    </ CardBody >
                }
            </ CardBody >

        </div >



    )



}







export default Search_folder;