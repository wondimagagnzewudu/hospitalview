import React from 'react'



import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';



import axios from 'axios';



import { useState, useEffect } from 'react'



function TracerList(props) {


    var valuetu = props.location.state.mrn_uuid;
    console.log(valuetu);
    const [data, setData] = useState([]);







    useEffect(() => {









        const body = {
            'identify': 'mrn_uuid',
            'value': valuetu
        }
        axios.post('http://localhost:5000/search_tracer_card', body)



            .then((response) => {


                console.log(response);
                console.log(response);
                setData(response.data.tracer_cards
                );




            });













    }, []);

    const Listofspecficuseruser = (id) => {



        props.history.push({



            pathname: '/User_tracerList',

            state: {
                'user_uuid': id,
            }



        });



    };
    const create_tracer = (id) => {



        props.history.push({



            pathname: '/Createtracer',

            state: {
                mrm: id,
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


    const EditPassword = (id, id2) => {



        props.history.push({



            pathname: '/EditPassword/',

            state: {
                user_uuid: id,
                destination_uuid: id2,
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







    return (



        < div className="animated fadeIn" >



            < Row >


                < Col >



                    < Card >



                        < CardHeader >



                            < i className="fa fa-align-justify" ></i >Individual tracer  List



              </CardHeader >



                        < CardBody >



                            < Table hover bordered striped responsive size="sm" >



                                < thead >  < tr >


                                    < th > send to</th >
                                    < th > remark </th >
                                    < th > Action</th >
                                </tr >



                                </thead >



                                < tbody >  {data.map((item, idx) => {
                                    return <tr>


                                        <td>{item.send_to}</td>
                                        <td>{item.remark}</td>




                                        <td>                  <div class="btn-group">                      <button className="btn btn-info" onClick={() => { Edituser(item.user_uuid, item.user_uuid) }}>Edit</button>

                                            <button className="btn btn-info" onClick={() => { EditPassword(item.user_uuid, item.user_uuid) }}>Edit tracer</button>

                                            <button className="btn btn-danger" onClick={() => { deleteeployee(item.user_uuid) }}>Delete</button>                  </div>              </td>          </tr>
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







export default TracerList;