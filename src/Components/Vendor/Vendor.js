import React, { useState } from 'react'
import Slider from './Slider/Slider'
import './Vendor.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Sector, Cell, } from "recharts";

    const chartData = [
      { course: "Python", Students: 60 },
  
      { course: "React Js", Students: 150},
  
      { course: "Java", Students: 390},
  
      { course: "C", Students: 231 },
  
      { course: "Javascript", Students: 301},
  
      { course: "C++", Students: 200},
      
    ];

export default function Vendor({ setStep }) {

    return (
        <div className='vendor'>
            <div class="container-fluid">

                <div class="row g-6 mb-6 mt-1">
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card shadow border-0">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-bold text-muted text-sm d-block mb-2">Invoices</span>
                                        <span class="h3 font-bold mb-0">$750.90</span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                            <i class="bi bi-credit-card"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-2 mb-0 text-sm">
                                    <span class="badge badge-pill bg-soft-success text-success me-2">
                                        <i class="bi bi-arrow-up me-1"></i>13%
                                    </span>
                                    <span class="text-nowrap text-xs text-muted">Since last month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card shadow border-0">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-bold text-muted text-sm d-block mb-2">Bill</span>
                                        <span class="h3 font-bold mb-0">215</span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                            <i class="bi bi-people"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-2 mb-0 text-sm">
                                    <span class="badge badge-pill bg-soft-success text-success me-2">
                                        <i class="bi bi-arrow-up me-1"></i>30%
                                    </span>
                                    <span class="text-nowrap text-xs text-muted">Since last month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card shadow border-0">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-bold text-muted text-sm d-block mb-2">Purchase Order</span>
                                        <span class="h3 font-bold mb-0">1.400</span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
                                            <i class="bi bi-clock-history"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-2 mb-0 text-sm">
                                    <span class="badge badge-pill bg-soft-danger text-danger me-2">
                                        <i class="bi bi-arrow-down me-1"></i>-5%
                                    </span>
                                    <span class="text-nowrap text-xs text-muted">Since last month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card shadow border-0">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-bold text-muted text-sm d-block mb-2">Customers</span>
                                        <span class="h3 font-bold mb-0">95%</span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                            <i class="bi bi-minecart-loaded"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-2 mb-0 text-sm">
                                    <span class="badge badge-pill bg-soft-success text-success me-2">
                                        <i class="bi bi-arrow-up me-1"></i>10%
                                    </span>
                                    <span class="text-nowrap text-xs text-muted">Since last month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='upperCharts'>
                <div className='upperCharts_inside'>
                <p className='mx-5 font-bold '>Total Invoices</p>
                    <ResponsiveContainer >
                        <BarChart data={chartData} margin={{ top: 20, right: 45 }}>
                            <CartesianGrid strokeDasharray='5' vertical={false} />
                            <XAxis fontSize={12} dataKey="course" interval={"preserveStartEnd"} />
                            <YAxis fontSize={12} type="number" domain={[0, 400]} />
                            <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                            {/* <Legend /> */}
                            <Bar dataKey="Students" fill="#d6362b" barSize={15} />
                            <Tooltip />
                            
                        </BarChart>
                    </ResponsiveContainer>
                    
                </div>
                <div className='upperCharts_inside'>
                    <p className='mx-5 font-bold '>Total Bills</p>
                    <ResponsiveContainer>
                        <LineChart data={chartData} margin={{ top: 20, right: 45 }}>
                            <CartesianGrid strokeDasharray='5' vertical={false} />
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

