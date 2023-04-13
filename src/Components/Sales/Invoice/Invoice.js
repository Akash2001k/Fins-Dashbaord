import React, { useEffect, useState } from 'react'
import SliderSales from '../Slider Sales/SlideSales'
import BillingAdd from '../../JSON files/BillingAdd.json'
import InvoiceFile from '../../JSON files/Invoice.json'
import SO from '../../JSON files/SO.json'

import { MdStickyNote2, MdOutlineBarChart } from 'react-icons/md';
import { RiBillFill } from 'react-icons/ri';
import { HiUsers } from 'react-icons/hi';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Sector, Cell, } from "recharts";



export default function Invoice({ setStep, update }) {

  const InvoiceF = InvoiceFile.map(data => {
    data.invoice_no = data.invoice_no
    data.invoice_amt = data.invoice_amt
    return data
  })

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
    update("Invoice")
  }, [])
  return (
    <div>
      <div className='position-relative'>
        <div class="container-fluid " style={{ height: "30vh", background: "#5e72e4" }}>

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


        {/* Table */}

        <div className='d-flex justify-content-around position-absolute px-3 w-100' style={{ top: "70%" }}>
          <div class="card" style={{ width: "48%", height: "55vh", overflow: 'auto', padding: "0 10px" }}>
            <div class="card-header pb-0 p-3" style={{ border: "none", background: "white" }}>
              <div class="d-flex justify-content-between">
                {/* <h6 class="mb-2" style={{ fontWeight: "600", color: "#3f3f40" }}>Total Bill</h6> */}
              </div>
            </div>

            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Voucher No</th>
                  <th scope="col">Bill Ammount</th>
                </tr>
              </thead>
              <tbody>
                {InvoiceFile.map((val) =>
                  <tr>
                    <td >{val.invoice_no}</td>
                    <td >{val.invoice_amt}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div style={{ background: "#172b4d", width: "48%", borderRadius: "5px", padding: "20px" }}>

            <ResponsiveContainer>
              <LineChart data={InvoiceF} margin={{ top: 20, right: 45, bottom: 20 }}>
                <CartesianGrid vertical={false} />
                <XAxis fontSize={12} dataKey="invoice_no" interval={"preserveStartEnd"} />
                <YAxis fontSize={12}  domain={[0, 1200]}/>
                <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                <Line type="monotone" dataKey="invoice_amt" stroke="#5c60f5" activeDot={{ r: 8 }} strokeWidth="4px" />
                <Tooltip />
                {/* <Legend /> */}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <SliderSales setStep={setStep} />
    </div>
  )
}
