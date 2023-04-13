import React, { useEffect, useState } from 'react'
import Slider from '../Slider/Slider'
import './Vendor.css'
import billData from '../../JSON files/Bill.json'
import VendorLocations from '../../JSON files/Vendor.json'
import PO from '../../JSON files/PO.json'

import { MdStickyNote2 } from 'react-icons/md';
import { RiBillFill } from 'react-icons/ri';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { HiUsers } from 'react-icons/hi';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Sector, Cell, } from "recharts";


const VenLoc = VendorLocations.map(data => {
    data.Location = data.Location
    data.Total_vendors=data.Total_vendors
    return data
})

const bill = billData.map(data => {
    data.voucher_no = data.voucher_no
    data.bill_amt = data.bill_amt
    return data
})

export default function Vendor({ setStep,update }) {

    const [totaldata,setTotaldata] = useState('')
    const [totalVendor,setTotalVendor] = useState('')
    const [totalPO,setTotalPO] = useState('')

    useEffect(()=>{
        update("Vendor")

        let total=0;
        billData.map((item)=>{
            total=total+item.bill_amt
        })
        setTotaldata(total)

        let totalVen=0;
        VendorLocations.map((item)=>{
            totalVen=totalVen+item.Total_vendors
        })
        setTotalVendor(totalVen)

        let totalPucOr = 0
        PO.map((item)=>{
            totalPucOr = totalPucOr+item.Purchase_order
        })
        setTotalPO(totalPucOr)
    },[])

    return (
        <div className='vendor'>
            <div class="container-fluid " style={{height: "30vh", background: "#5e72e4"}}>

                <div class="row pt-4">
                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4" >
                        <div class="card" style={{border:"none"}}>
                            <div class="card-body p-3">
                                <div class="row">
                                    <div class="col-8">
                                        <div class="numbers">
                                            <p style={{ color: "gray" }} class="text-sm mb-0 text-uppercase font-weight-bold">Total Vendors</p>
                                            <h5 style={{ fontWeight: "600",fontSize:"30px" }}>
                                                {totalVendor}
                                            </h5>
                                        </div>
                                    </div>
                                    <div class="col-4 text-end">
                                        <div style={{ background: "linear-gradient(#d93c30, #fa4537)", borderRadius: "50px", width: "60px" }}>
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
                                            <p style={{ color: "gray" }} class="text-sm mb-0 text-uppercase font-weight-bold">Bill Amount</p>
                                            <h5 style={{ fontWeight: "600",fontSize:"30px" }}>
                                            ₹ {totaldata}
                                            </h5>
                                          
                                        </div>
                                    </div>
                                    <div class="col-4 text-end">
                                        <div style={{ background: "linear-gradient(#41ce97, #219669)", borderRadius: "50px", width: "60px" }}>
                                            <RiBillFill style={{ fontSize: "60px", color: "white", padding: "11px" }} />
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
                                            <p class="text-sm mb-0 text-uppercase font-weight-bold" style={{ color: "gray" }}>Purchase Order </p>
                                            <h5 style={{ fontWeight: "600",fontSize:"30px" }}>
                                             {totalPO}
                                            </h5>
                                        </div>
                                    </div>
                                    <div class="col-4 text-end">
                                        <div style={{ background: "linear-gradient(#47b7ef, #298fc2)", borderRadius: "50px", width: "60px" }}>
                                            <BsFillCartCheckFill style={{ fontSize: "60px", color: "white", padding: "12px" }} />
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
                                            <p class="text-sm mb-0 text-uppercase font-weight-bold" style={{ color: "gray" }}>Debit Notes</p>
                                            <h5 style={{ fontWeight: "600",fontSize:"30px" }}>
                                                160
                                            </h5>
                                        </div>
                                    </div>
                                    <div class="col-4 text-end">
                                        <div style={{ background: "linear-gradient(#f57041, #db6a23)", borderRadius: "50px", width: "60px" }}>
                                            <MdStickyNote2 style={{ fontSize: "60px", color: "white", padding: "10px" }} />
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
                        <BarChart data={VenLoc} margin={{ top: 20, right: 45, bottom: 20 }}>
                            <CartesianGrid vertical={false} />
                            <XAxis fontSize={12} dataKey="Location" interval={"preserveStartEnd"} />
                            <YAxis fontSize={12} type="number" domain={[0, 140]} />
                            <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                            {/* <Legend /> */}
                            <Bar dataKey="Total_vendors" fill="#d6362b" barSize={10} radius={5} />
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
                        <LineChart data={bill} margin={{ top: 20, right: 45, bottom: 20 }}>
                            <CartesianGrid vertical={false} />
                            <XAxis fontSize={12} dataKey="voucher_no" interval={"preserveStartEnd"} />
                            <YAxis fontSize={12} />
                            <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                            <Line type="monotone" dataKey="bill_amt" stroke="#5c60f5" activeDot={{ r: 8 }} strokeWidth="4px" />
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

