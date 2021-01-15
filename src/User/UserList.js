import React from 'react'

import Pagination from "react-js-pagination";

import { Badge, Card, Form, Button, Input, InputGroup, CardBody, CardHeader, Col, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';



import axios from 'axios';



import { useState, useEffect } from 'react'



function UserList(props) {

    const todosPerPage = 10;
    const [issearcherd, setIssearcherd] = useState(false);
    const [data, setData] = useState([]);
    const [dataserched, setDataserched] = useState([]);
    const [serchedValue, setserchedValue] = useState('');
    const [activePage, setCurrentPage] = useState(1);
    const indexOfLastTodo = activePage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    ;



    useEffect(() => {



        const GetData = async () => {



            const result = await axios.get('http://localhost:5000/all_user');


            setData(result.data.user);



        };







        GetData();



    }, []);



    const deleteeployee = (id) => {



        debugger;



        axios.delete('http://localhost:62168/api/hooks/Deleteemployee?id=' + id)



            .then((result) => {



                props.history.push('/userList')



            });



    };



    const edituser = (id) => {



        props.history.push({



            pathname: '/Edituser/',
            state: {
                'user_uuid': id
            }



        });



    };
    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setCurrentPage(pageNumber)
    };
    const Listofspecficticket = (id) => {



        props.history.push({



            pathname: '/ticketspecficList',

            state: {
                'user_uuid': id,
            }



        });



    };
    const Searchuser = (e) => {



        e.preventDefault();


        console.log(serchedValue);
        const body = {
            'value': serchedValue
        }
        axios.post('http://localhost:5000/search_user', body)



            .then((response) => {


                console.log(response);
                setDataserched(response.data.user
                );
                setIssearcherd(true);



            });



    };
    const onChange = (e) => {


        e.persist();

        setserchedValue(e.target.value);



    }
    const Adduser = (id) => {



        props.history.push({



            pathname: '/Createuser/',



        });



    };
    const AdminList = (id) => {



        props.history.push({



            pathname: '/AdminList',



        });



    };
    const ControllerList = (id) => {



        props.history.push({



            pathname: '/ControllerList/',



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
    const NurseList = (id) => {



        props.history.push({



            pathname: '/NurseList',



        });



    };
    const Createticket = (id) => {



        props.history.push({



            pathname: '/Createticket/',
            state: {
                'user_uuid': id,
            }



        });



    };

    const currentTodos = data.slice(indexOfFirstTodo, indexOfLastTodo);




    return (



        < div className="animated fadeIn" >

            { issearcherd ?
                < CardBody   >
                    Result of the search
               < Table hover bordered striped responsive size="sm" >



                        < thead >



                            < tr >



                                < th > User name</th >
                                < th > User type</th >
                                < th > User created time</th >
                                < th > Phone number</th >


                                < th > Action</th >



                            </tr >



                        </thead >



                        < tbody >



                            {



                                dataserched.map((item, idx) => {



                                    return <tr>



                                        <td>{item.user_name}</td>
                                        <td>{item.user_type}</td>
                                        <td>{item.created_at}</td>
                                        <td>{item.phone_number}</td>


                                        <td>



                                            <div class="btn-group">


                                                <button className="btn btn-info" onClick={() => { edituser(item.user_uuid) }}>Edit</button>
                                                <button className="btn btn-info" onClick={() => { EditPassword(item.user_uuid, item.user_uuid) }}>Edit Password</button>


                                                <button className="btn btn-danger" onClick={() => { deleteeployee(item.user_uuid) }}>Delete</button>



                                            </div>



                                        </td>



                                    </tr>



                                })
                            }



                        </tbody >
                    </Table >
                </CardBody >


                :
                < Row >


                    < Col >



                        < Card >



                            < CardHeader >
                                < h1 className="fa fa-align-justify" ></h1 >All user List
                                <br />
                                <button className="btn btn-info" onClick={() => { Adduser() }}>Add user </button>
                                < Table>
                                    < thead >
                                        <br />
                                        <br />
                                        < tr >
                                            < th >
                                                <button className="btn btn-info" onClick={() => { NurseList() }}>Nurses list  </button>
                                            </th>
                                            < th >
                                                <button className="btn btn-info" onClick={() => { ControllerList() }}>Controller List </button>
                                            </th>
                                            < th >
                                                <button className="btn btn-info" onClick={() => { AdminList() }}>Admin List </button>
                                            </ th>
                                        </tr>
                                    </thead >

                                </Table>

                                < Form inline style={{ position: "relative", verticalalign: "top" }} className="mb-2 mr-sm-2 mb-sm-0" onSubmit={Searchuser} >


                                    < InputGroup style={{ position: "relative", verticalalign: "top" }} >
                                        < Input type="text" name="serchedValue" id="serchedValue" placeholder="SEARCH" value={serchedValue} onChange={onChange} />
                                    </InputGroup >

                                    < Button style={{ position: "relative", verticalalign: "top" }} type="submit" className="btn btn-info mb-1"  > <span>SEARCH</span></Button >

                                </ Form>

                            </CardHeader >



                            < CardBody >



                                < Table hover bordered striped responsive size="sm" >



                                    < thead >



                                        < tr >



                                            < th > User name</th >
                                            < th > User type</th >
                                            < th > User created time</th >
                                            < th > Phone number</th >


                                            < th > Action</th >












                                        </tr >



                                    </thead >



                                    < tbody >



                                        {



                                            currentTodos.map((item, idx) => {



                                                return <tr>



                                                    <td>{item.user_name}</td>
                                                    <td>{item.user_type}</td>
                                                    <td>{item.created_at}</td>
                                                    <td>{item.phone_number}</td>











                                                    <td>



                                                        <div class="btn-group">



                                                            <button className="btn btn-info" onClick={() => { edituser(item.user_uuid) }}>Edit</button>
                                                            <button className="btn btn-info" onClick={() => { EditPassword(item.user_uuid, item.user_uuid) }}>Edit Password</button>



                                                            <button className="btn btn-danger" onClick={() => { deleteeployee(item.user_uuid) }}>Delete</button>



                                                        </div>



                                                    </td>



                                                </tr>



                                            })
                                        }
                                        <div className="pagination">
                                            <Pagination
                                                activePage={activePage}
                                                itemsCountPerPage={2}
                                                totalItemsCount={data.length}
                                                pageRangeDisplayed={3}
                                                onChange={handlePageChange}
                                            />
                                        </div>

                                    </tbody >



                                </Table >



                            </CardBody >



                        </Card >



                    </Col >



                </Row >

            }


        </div >



    )



}







export default UserList