import React, { useState } from 'react'
import Slider from '../Slider/Slider'
import './Vendor.css'
import { AiOutlineMoneyCollect } from 'react-icons/ai';
import { FaUserTie, FaCoins } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Sector, Cell, } from "recharts";

const chartData = [
    { course: "Python", Students: 60 },
    { course: "React Js", Students: 150 },
    { course: "Java", Students: 390 },
    { course: "C", Students: 231 },
    { course: "Javascript", Students: 301 },
    { course: "C++", Students: 200 },
    { course: "Angular JS", Students: 250 },
    { course: "Next JS", Students: 250 },
    { course: "Vanilla", Students: 80 },
    { course: "JQuery", Students: 80 },
    { course: "PHP", Students: 200 },
    { course: "Node js", Students: 100 },
    { course: "Django", Students: 80 },

];

export default function Vendor({ setStep }) {

    return (
        <div className='vendor'>
            <div class="container-fluid " style={{ height: "30vh", background: "#5e72e4" }}>

                <div class="row pt-4">
                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4" >
                        <div class="card" style={{border:"none"}}>
                            <div class="card-body p-3">
                                <div class="row">
                                    <div class="col-8">
                                        <div class="numbers">
                                            <p style={{ color: "gray" }} class="text-sm mb-0 text-uppercase font-weight-bold">Today's Money</p>
                                            <h5 style={{ fontWeight: "600" }}>
                                                $53,000
                                            </h5>
                                            <p class="mb-0">
                                                <span style={{ fontWeight: "600", color: "green", margin: "0 10px 0 0" }}>+55%</span>
                                                since yesterday
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-4 text-end">
                                        <div style={{ background: "linear-gradient(#d93c30, #fa4537)", borderRadius: "50px", width: "60px" }}>
                                            <AiOutlineMoneyCollect style={{ fontSize: "60px", color: "white", padding: "5px" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div class="card" style={{border:"none"}}>
                            <div class="card-body p-3">
                                <div class="row">
                                    <div class="col-8">
                                        <div class="numbers">
                                            <p style={{ color: "gray" }} class="text-sm mb-0 text-uppercase font-weight-bold">Today's Users</p>
                                            <h5 style={{ fontWeight: "600" }}>
                                                2,300
                                            </h5>
                                            <p class="mb-0">
                                                <span style={{ fontWeight: "600", color: "green", margin: "0 10px 0 0" }}>+3%</span>
                                                since last week
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-4 text-end">
                                        <div style={{ background: "linear-gradient(#41ce97, #219669)", borderRadius: "50px", width: "60px" }}>
                                            <HiUsers style={{ fontSize: "60px", color: "white", padding: "10px" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div class="card" style={{border:"none"}}>
                            <div class="card-body p-3">
                                <div class="row">
                                    <div class="col-8">
                                        <div class="numbers">
                                            <p class="text-sm mb-0 text-uppercase font-weight-bold" style={{ color: "gray" }}>New Clients</p>
                                            <h5 style={{ fontWeight: "600" }}>
                                                +3,462
                                            </h5>
                                            <p class="mb-0">
                                                <span style={{ fontWeight: "600", color: "red", margin: "0 10px 0 0" }}>-2%</span>
                                                since last quarter
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-4 text-end">
                                        <div style={{ background: "linear-gradient(#47b7ef, #298fc2)", borderRadius: "50px", width: "60px" }}>
                                            <FaUserTie style={{ fontSize: "60px", color: "white", padding: "15px" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6">
                        <div class="card" style={{border:"none"}}>
                            <div class="card-body p-3">
                                <div class="row">
                                    <div class="col-8">
                                        <div class="numbers">
                                            <p class="text-sm mb-0 text-uppercase font-weight-bold" style={{ color: "gray" }}>Sales</p>
                                            <h5 style={{ fontWeight: "600" }}>
                                                $103,430
                                            </h5>
                                            <p class="mb-0">
                                                <span style={{ fontWeight: "600", color: "green", margin: "0 10px 0 0" }}>+5%</span> than last month
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-4 text-end">
                                        <div style={{ background: "linear-gradient(#f57041, #db6a23)", borderRadius: "50px", width: "60px" }}>
                                            <FaCoins style={{ fontSize: "60px", color: "white", padding: "15px" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='upperCharts'>
                <div className='upperCharts_inside'>
                    <div className='px-4 mt-2'>
                        <p style={{fontWeight:"600",color:"gray",fontSize:"14px"}}>OVERVIEW</p>
                    </div>
                    <ResponsiveContainer >
                        <BarChart data={chartData} margin={{ top: 20, right: 45, bottom: 20 }}>
                            <CartesianGrid vertical={false} />
                            <XAxis fontSize={12} dataKey="course" interval={"preserveStartEnd"} />
                            <YAxis fontSize={12} type="number" domain={[0, 400]} />
                            <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                            {/* <Legend /> */}
                            <Bar dataKey="Students" fill="#d6362b" barSize={10} radius={5} />
                            <Tooltip />

                        </BarChart>
                    </ResponsiveContainer>

                </div>
                <div className='upperCharts_inside2'>
                    <div className='d-flex justify-content-between px-4 mt-2'>
                        <p className='text-white'>Total Bills</p>
                        <div>
                            <button className='btn btn-primary btn-sm mx-2'>Month</button>
                            <button className='btn btn-light btn-sm'>Year</button>
                        </div>
                    </div>
                    <ResponsiveContainer>
                        <LineChart data={chartData} margin={{ top: 20, right: 45, bottom: 20 }}>
                            <CartesianGrid vertical={false} />
                            <XAxis fontSize={12} dataKey="course" interval={"preserveStartEnd"} />
                            <YAxis fontSize={12} />
                            <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                            <Line type="monotone" dataKey="Students" stroke="#5c60f5" activeDot={{ r: 8 }} strokeWidth="4px" />
                            <Tooltip />
                            {/* <Legend /> */}

                        </LineChart>
                    </ResponsiveContainer>

                </div>
            </div>

            <div>
                <Slider setStep={setStep} />
            </div>
        </div>
    )
}

