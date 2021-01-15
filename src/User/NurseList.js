import React from 'react'



import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';



import axios from 'axios';



import { useState, useEffect } from 'react'



function NurseList(props) {




    const [data, setData] = useState([]);







    useEffect(() => {



        const GetData = async () => {

            const body = {

                identify: 'user_type',
                value: 'user'

            }

            const result = await axios.post('http://localhost:5000/search_user', body);


            setData(result.data.users);



        };







        GetData();



    }, []);

    const Listofspecficuseruser = (id) => {



        props.history.push({



            pathname: '/User_NurseList',

            state: {
                'user_uuid': id,
            }



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



    const Edituser = (id, id2) => {



        props.history.push({



            pathname: '/Edituser/',

            state: {
                user_uuid: id,
                destination_uuid: id2,
            }


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





    return (



        < div className="animated fadeIn" >



            < Row >


                < Col >



                    < Card >



                        < CardHeader >



                            < i className="fa fa-align-justify" ></i >Nurse  List



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



                                        data.map((item, idx) => {



                                            return <tr>



                                                <td>{item.user_name}</td>
                                                <td>{item.user_type}</td>
                                                <td>{item.created_at}</td>
                                                <td>{item.phone_number}</td>







                                                <td>



                                                    <div class="btn-group">



                                                        <button className="btn btn-info" onClick={() => { Edituser(item.user_uuid, item.user_uuid) }}>Edit</button>

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



                    </Card >



                </Col >



            </Row >



        </div >



    )



}







export default NurseList;