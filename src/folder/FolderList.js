import React from 'react'



import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';



import axios from 'axios';



import { useState, useEffect } from 'react'



function FolderList(props) {




    const [data, setData] = useState([]);







    useEffect(() => {



        const GetData = async () => {



            const result = await axios.get('http://localhost:5000/all_mrn');


            setData(result.data.mrn);



        };







        GetData();



    }, []);

    const Listofspecficuseruser = (id) => {



        props.history.push({



            pathname: '/User_FolderList',

            state: {
                'user_uuid': id,
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

                                            <button className="btn btn-info" onClick={() => { EditPassword(item.user_uuid, item.user_uuid) }}>Edit folder</button>
                                            <button className="btn btn-info" onClick={() => { create_tracer(item.mrn_uuid) }}>add tracer</button>
                                            <button className="btn btn-info" onClick={() => { view_tracer(item.mrn_uuid) }}>view tracer</button>
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







export default FolderList;