import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Sector, Cell, } from "recharts";

import { MdStickyNote2 } from 'react-icons/md';
import { RiBillFill } from 'react-icons/ri';
import { MdOutlineBarChart } from 'react-icons/md';
import { HiUsers } from 'react-icons/hi';
import SliderSales from '../Slider Sales/SlideSales'
import './Customer.css'
import BillingAdd from '../../JSON files/BillingAdd.json'
import InvoiceFile from '../../JSON files/Invoice.json'
import SO from '../../JSON files/SO.json'

const BillAdd = BillingAdd.map(data => {
  data.billing_address_state = data.billing_address_state
  data.Total_customers = data.Total_customers
  return data
})


export default function Customer({ setStep, update }) {

  const [totalCust, setTotalCust] = useState('')
  const [totalInvoice, setTotalInvoice] = useState('')
  const [totalSO, setTotalSO] = useState('')

  useEffect(() => {

    let total = 0;
    BillingAdd.map((item) => {
      total = total + item.Total_customers
    })
    setTotalCust(total)

    let totalInv = 0;
    InvoiceFile.map((item) => {
      totalInv = totalInv + parseInt(item.invoice_amt)
    })
    setTotalInvoice(totalInv)

    let totalSOr = 0;
      SO.map((item) => {
      totalSOr = totalSOr + item.Sales_order
    })
    setTotalSO(total)

    update("Customer")
  }, [])

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fontSize='13' fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };



  const COLORS = ['#70405b', '#6d89fc', '#666bba', '#9554a8'];

  return (
    <div className='position-relative'>
      <div class="container-fluid " style={{ height: "30vh", background: "#5e72e4"}}>

        <div class="row pt-4">
          <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4" >
            <div class="card" style={{ border: "none" }}>
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-8">
                    <div class="numbers">
                      <p style={{ color: "gray" }} class="text-sm mb-0 text-uppercase font-weight-bold">Total Customers</p>
                      <h5 style={{ fontWeight: "600", fontSize: "30px" }}>
                        {totalCust}
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
            <div class="card" style={{ border: "none" }}>
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-8">
                    <div class="numbers">
                      <p style={{ color: "gray" }} class="text-sm mb-0 text-uppercase font-weight-bold">Invoices</p>
                      <h5 style={{ fontWeight: "600", fontSize: "30px" }}>
                        {totalInvoice}
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
            <div class="card" style={{ border: "none" }}>
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-8">
                    <div class="numbers">
                      <p class="text-sm mb-0 text-uppercase font-weight-bold" style={{ color: "gray" }}>Sales Order </p>
                      <h5 style={{ fontWeight: "600", fontSize: "30px" }}>
                        {totalSO}
                      </h5>
                    </div>
                  </div>
                  <div class="col-4 text-end">
                    <div style={{ background: "linear-gradient(#47b7ef, #298fc2)", borderRadius: "50px", width: "60px" }}>
                      <MdOutlineBarChart style={{ fontSize: "60px", color: "white", padding: "10px" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6">
            <div class="card" style={{ border: "none" }}>
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-8">
                    <div class="numbers">
                      <p class="text-sm mb-0 text-uppercase font-weight-bold" style={{ color: "gray" }}>Credit Notes</p>
                      <h5 style={{ fontWeight: "600", fontSize: "30px" }}>
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
      <div className='customer_data'>
        <div className='customer_data1'>
          <p className='text-light'>Total Customers Statewise</p>
          <ResponsiveContainer>
            <PieChart width={700} height={150}>

              <Tooltip contentStyle={{ color: "white", borderRadius: "3px", border: "1px solid rgba(41,40, 40)" }} />
              <Pie fill="#8884d8" stroke="none" data={BillAdd} dataKey="Total_customers" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={120} label={renderCustomizedLabel} labelLine={false}>
                {BillAdd.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              {/* <Legend iconSize='10' iconType="rounded" layout="vertical" verticalAlign="top" align="right" /> */}
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className='customer_data2' >

        </div>
        <div className='customer_data3' style={{ overflow: 'auto', padding: "0 10px" }}>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Bill Address</th>
                <th scope="col">Total Customers</th>
              </tr>
            </thead>
            <tbody>
              {BillingAdd.map((val) =>
                <tr>
                  <td >{val.billing_address_state}</td>
                  <td >{val.Total_customers}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <SliderSales setStep={setStep} />
    </div>
  )
}
