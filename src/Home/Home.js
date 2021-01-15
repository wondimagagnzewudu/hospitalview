import React, { useState, useEffect } from 'react'

import Image from 'react-bootstrap/Image';
import * as V from 'victory';
import { VictoryPie, VictoryTheme, VictoryAxis, VictoryChart, VictoryGroup, VictoryLine, VictoryScatter } from 'victory';
import axios from 'axios';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiCoinStack } from "react-icons/bi";
import { FiUserCheck } from "react-icons/fi";
import { moment } from 'moment';
import { IconContext } from "react-icons";


import { Button, Media, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';


function Home(props) {
    const todosPerPage = 10;
    const [issearcherd, setIssearcherd] = useState(false);
    const [data, setData] = useState([]);
    const [selldata, setsellData] = useState([]);
    const [datavalue, setDatadatavalue] = useState([]);
    const [serchedValue, setserchedValue] = useState('');
    const [activePage, setCurrentPage] = useState(1);
    const indexOfLastTodo = activePage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;

    const colors = {
        pink: ["#CB5599", "#5E6063"],
        teal: ["#49C6B7", "#5E6063"]
    };
    const CustomPie = () => {

        const datum = 0;
        const x = 0;
        const y = 0;
        const pieWidth = 0;

        return (
            <g
            >
                <VictoryPie
                    standalone={false}
                    height={pieWidth}
                    width={pieWidth}
                    dataa={datum.pie}
                    style={{ labels: { fontSize: 0 } }}
                    colorScale={["#f77", "#55e", "#8af"]}

                    innerRadius={115}
                />
            </g>
        );

    }

    useEffect(() => {



        const GetData = async () => {



            const result = await axios.get('http://localhost:5000/all_user');


            setData(result.data.user);

        };

        const GetsellData = async () => {



            const result = await axios.get('http://localhost:5000/all_user_ticket');


            setsellData(result.data.user_ticket);

        };

        GetsellData()
        GetData();

    }, []);
    var xdata = data;
    var new_user = 0;
    var early_user = 0;
    var before_user = 0;
    var date_compare = 0;
    var last_three_days = 0;
    if (data != []) {


        xdata.map((item, idx) => {
            var retdate = new Date();

            retdate.setDate(retdate.getDate());
            var mydate = new Date(item.created_at);
            var difference = (retdate - mydate); // difference in milliseconds


            const TOTAL_MILLISECONDS_IN_A_WEEK = 1000 * 60 * 60 * 24;
            date_compare = Math.floor(difference / TOTAL_MILLISECONDS_IN_A_WEEK) + 1;
            if (date_compare < 32) {
                new_user = new_user + 1;
            }
            if (date_compare >= 32 && date_compare < 64) {

                before_user = before_user + 1;
            }
            if (date_compare >= 64) {

                early_user = early_user + 1;
            }
            if (date_compare <= 3) {

                last_three_days = last_three_days + 1;
            }
        });


    }
    var sellxdata = selldata;
    var new_sell = 0;
    var new_sell_price = 0;
    var early_sell = 0;
    var early_sell_price = 0;
    var before_sell = 0;
    var before_sell_price = 0;
    var date_sell_compare = 0;
    var last_three_days_sell = 0;
    var last_three_days_sell_price = 0;
    if (data != []) {


        sellxdata.map((item, idx) => {
            var sellretdate = new Date();

            sellretdate.setDate(sellretdate.getDate());
            var sellmydate = new Date(item.created_at);
            var selldifference = (sellretdate - sellmydate); // difference in milliseconds


            const TOTAL_MILLISECONDS_IN_A_WEEK = 1000 * 60 * 60 * 24;
            date_sell_compare = Math.floor(selldifference / TOTAL_MILLISECONDS_IN_A_WEEK) + 1;
            if (date_sell_compare < 32) {
                new_sell = new_sell + 1;
                new_sell_price = new_sell_price + (item.total_price);
            }
            if (date_sell_compare >= 32 && date_sell_compare < 64) {

                before_sell = before_sell + 1;
                before_sell_price = before_sell_price + (item.total_price);
            }
            if (date_sell_compare >= 64) {

                early_sell = early_sell + 1;
                early_sell_price = early_sell_price + (item.total_price);
            }
            if (date_sell_compare <= 3) {

                last_three_days_sell = last_three_days_sell + 1;
                last_three_days_sell_price = last_three_days_sell_price + (item.total_price);
            }
        });


    }

    const datum = 0;
    const x = 0;
    const y = 0;

    const dataa = [

        { x: "early", y: (early_user) },
        { x: "last month", y: (before_user) },
        { x: "this month ", y: (new_user) },

        { x: "3 days ", y: (last_three_days) },



    ];
    const dataasell = [

        { x: "early", y: (early_sell) },
        { x: "last month", y: (before_sell) },
        { x: "this month ", y: (new_sell) },

        { x: "3 days ", y: (last_three_days_sell) },



    ];
    const pieData = dataa.map((datum) => {
        datum.pie = [
            { x: "Lions", y: Math.round(Math.random() * 10) },
            { x: "Tigers", y: Math.round(Math.random() * 10) },
            { x: "Bears", y: Math.round(Math.random() * 10) }
        ];
        return datum;
    });
    var total = new_user + before_user + early_user;
    var total_sell = new_sell + before_sell + early_sell;
    var total_sell_price = new_sell_price + before_sell_price + early_sell_price;
    return (
        < div >

            <Container>

                <br />
                <br />
                <div class="row">
                    < thead >



                        <th class="col-sm">
                            <div class="card-body text-white bg-primary mb-1  " style={{
                                height: "8rem", borderTopLeftRadius: 30, borderBottomRightRadius: 30,
                                borderTopRightRadius: 30, borderBottomLeftRadius: 30, width: "20rem"
                            }}  >
                                <IconContext.Provider
                                    value={{ paddingRight: 180, color: '#e6dcdc', size: '80px' }}
                                > <AiOutlineShoppingCart style={{ float: "left" }} />

                                </IconContext.Provider>
                                Total sell: {total_sell}
                            </div>
                        </th>

                        <th class="col-sm">
                            <div class="card-body text-white bg-success  mb-1  " style={{
                                height: "8rem", borderTopLeftRadius: 30, borderBottomRightRadius: 30,
                                borderTopRightRadius: 30, borderBottomLeftRadius: 30, width: "20rem"
                            }}  >
                                <IconContext.Provider
                                    value={{ color: '#e6dcdc', size: '80px' }}
                                > <AiOutlineShoppingCart style={{ float: "left" }} />

                                </IconContext.Provider>

                                this month sell: {new_sell}
                            </div>
                        </th>


                        <th class="col-sm">
                            <div class="card-body text-white bg-info mb-1  " style={{
                                height: "8rem", borderTopLeftRadius: 30, borderBottomRightRadius: 30,
                                borderTopRightRadius: 30, borderBottomLeftRadius: 30, width: "20rem"
                            }}  >

                                <IconContext.Provider
                                    value={{ color: '#e6dcdc', size: '80px' }}
                                > <AiOutlineShoppingCart style={{ float: "left" }} />

                                </IconContext.Provider>
                                last month sell: {before_sell}
                            </div>
                        </th>

                    </thead>
                </div>

                <br />
                <br />
                <div class="row">
                    < thead >



                        <th class="col-sm">
                            <div class="card-body text-white bg-primary mb-1  " style={{
                                height: "8rem", borderTopLeftRadius: 30, borderBottomRightRadius: 30,
                                borderTopRightRadius: 30, borderBottomLeftRadius: 30, width: "20rem"
                            }}  > <IconContext.Provider
                                value={{ color: '#e6dcdc', size: '80px' }}
                            > < BiCoinStack style={{ float: "left" }} />

                                </IconContext.Provider>

                                Total sell in cash: {total_sell_price} birr
                            </div>
                        </th>

                        <th class="col-sm">
                            <div class="card-body text-white bg-success  mb-1  " style={{
                                height: "8rem", borderTopLeftRadius: 30, borderBottomRightRadius: 30,
                                borderTopRightRadius: 30, borderBottomLeftRadius: 30, width: "20rem"
                            }}  >
                                <IconContext.Provider
                                    value={{ color: '#e6dcdc', size: '80px' }}
                                > < BiCoinStack style={{ float: "left" }} />

                                </IconContext.Provider>
                                this month cash: {new_sell_price} birr
                            </div>
                        </th >


                        <th class="col-sm">
                            <div class="card-body text-white bg-info mb-1  " style={{
                                height: "8rem", borderTopLeftRadius: 30, borderBottomRightRadius: 30,
                                borderTopRightRadius: 30, borderBottomLeftRadius: 30,

                                borderTopLeftRadius: 30, width: "20rem"
                            }}  > <IconContext.Provider
                                value={{ color: '#e6dcdc', size: '80px' }}
                            > < BiCoinStack style={{ float: "left" }} />

                                </IconContext.Provider>

                                last month  cash : {before_sell_price} birr
                            </div>
                        </th>

                    </thead>
                </div>
                <br />
                <br />
                <thead>
                    < tr >


                        <th>
                            <div class="card  " style={{ width: "88%", height: "80" }}>
                                <div class="card-header">Sells  data</div>
                                <div >
                                    <VictoryPie
                                        colorScale={["cyan", "orange", "gold", "navy"]}
                                        data={dataasell}
                                    />
                                </div>
                            </div>
                        </th>
                        <th></th>
                        < th >
                            <div class="card " style={{ width: "100%", height: "120" }}>
                                <div  >
                                    <div class="card-header">sells chart</div>
                                    <VictoryChart


                                        theme={VictoryTheme.material}

                                    >


                                        <VictoryGroup data={dataasell}>
                                            <VictoryLine />

                                        </VictoryGroup>
                                    </VictoryChart>
                                </div>
                            </div>
                        </th>

                    </tr>
                    <br />
                    <br />
                </thead >
                <div class="row">
                    <thead>

                        <th class="col-sm">


                            <div class="card-body text-white bg-primary mb-1  " style={{
                                height: "8rem", borderTopLeftRadius: 30, borderBottomRightRadius: 30,
                                borderTopRightRadius: 30, borderBottomLeftRadius: 30, width: "20rem"
                            }} >
                                <IconContext.Provider
                                    value={{ color: '#e6dcdc', size: '80px' }}
                                > < FiUserCheck style={{ float: "left" }} />

                                </IconContext.Provider>
                                Total user:

                                 {total}
                            </div>
                        </th>
                        <th></th>
                        <th class="col-sm">

                            <div class="card-body text-white bg-danger mb-1  " style={{
                                height: "8rem", borderTopLeftRadius: 30, borderBottomRightRadius: 30,
                                borderTopRightRadius: 30, borderBottomLeftRadius: 30, width: "20rem"
                            }} >

                                <IconContext.Provider
                                    value={{ color: '#e6dcdc', size: '80px' }}
                                > <  FiUserCheck style={{ float: "left" }} />

                                </IconContext.Provider>

                                This month user: {new_user}
                            </div>
                        </th>
                        <th></th>
                        <th class="col-sm">
                            <div class="card-body text-white bg-info mb-1  " style={{
                                height: "8rem", borderTopLeftRadius: 30, borderBottomRightRadius: 30,
                                borderTopRightRadius: 30, borderBottomLeftRadius: 30, width: "20rem"
                            }} >
                                <IconContext.Provider
                                    value={{ color: '#e6dcdc', size: '80px', }}
                                > < FiUserCheck style={{ float: "left" }} />

                                </IconContext.Provider>

                                last month user: {before_user}
                            </div>
                        </th>
                    </thead>
                </div>
                <br />
                <br />
                <thead>
                    < tr >


                        <th >
                            <div class="card  " style={{ width: "88%", height: "80" }}>
                                <div class="card-header">Users  data</div>
                                <div >
                                    <VictoryPie
                                        colorScale={["orange", "gold", "cyan", "navy"]}
                                        data={dataa}
                                    />
                                </div>
                            </div>
                        </th>
                        <th></th>
                        < th >
                            <div class="card " style={{ width: "100%", height: "120" }}>
                                <div  >
                                    <div class="card-header">Users chart</div>
                                    <VictoryChart


                                        theme={VictoryTheme.material}

                                    >


                                        <VictoryGroup data={dataa}>
                                            <VictoryLine />

                                        </VictoryGroup>
                                    </VictoryChart>
                                </div>
                            </div>
                        </th>

                    </tr>
                </thead >
                <br />
                <br />





            </Container>

            <div class="card-footer bg-dark" style={{ width: "100%", height: "120" }}>
                <div class="text-white">
                    LUNA PLC
                 <br />
                phone number 092370425/0917062816
                    </div>
            </div>

        </ div >

    );
}
export default Home