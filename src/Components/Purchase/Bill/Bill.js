import React, { useEffect, useState } from 'react'
import Slider from '../Slider/Slider'
import billData from '../../JSON files/Bill.json'
import VendorLocations from '../../JSON files/Vendor.json'
import PO from '../../JSON files/PO.json'

import { MdStickyNote2 } from 'react-icons/md';
import { RiBillFill } from 'react-icons/ri';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { HiUsers } from 'react-icons/hi';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Sector, Cell, } from "recharts";


export default function ({ setStep, update }) {

  const [totaldata, setTotaldata] = useState('')
  const [totalVendor, setTotalVendor] = useState('')
  const [totalPO,setTotalPO] = useState('')

  const bill = billData.map(data => {
    data.voucher_no = data.voucher_no
    data.bill_amt = data.bill_amt
    return data
  })

  useEffect(() => {
    update("Bills")


    let total = 0;
    let totalVen = 0;
    billData.map((item) => {
      total = total + item.bill_amt
    })
    setTotaldata(total)

    VendorLocations.map((item) => {
      totalVen = totalVen + item.Total_vendors
    })
    setTotalVendor(totalVen)

    let totalPucOr = 0
        PO.map((item)=>{
            totalPucOr = totalPucOr+item.Purchase_order
        })
        setTotalPO(totalPucOr)

  }, [])
  return (
    <>
      <div className='position-relative'>
        <div class="container-fluid " style={{ height: "30vh", background: "#5e72e4" }}>

          <div class="row pt-4">
            <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4" >
              <div class="card" style={{ border: "none" }}>
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p style={{ color: "gray" }} class="text-sm mb-0 text-uppercase font-weight-bold">Total Vendors</p>
                        <h5 style={{ fontWeight: "600", fontSize: "30px" }}>
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
              <div class="card" style={{ border: "none" }}>
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p style={{ color: "gray" }} class="text-sm mb-0 text-uppercase font-weight-bold">Bill Amount</p>
                        <h5 style={{ fontWeight: "600", fontSize: "30px" }}>
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
              <div class="card" style={{ border: "none" }}>
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p class="text-sm mb-0 text-uppercase font-weight-bold" style={{ color: "gray" }}>Purchase Order</p>
                        <h5 style={{ fontWeight: "600", fontSize: "30px" }}>
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
              <div class="card" style={{ border: "none" }}>
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p class="text-sm mb-0 text-uppercase font-weight-bold" style={{ color: "gray" }}>Debit Notes</p>
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
          <div class="card" style={{ width: "48%", height: "55vh", overflow: 'auto',padding:"0 10px" }}>
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
                {billData.map((val) =>
                  <tr>
                    <td >{val.voucher_no}</td>
                    <td >{val.bill_amt}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div style={{ background: "#172b4d", width: "48%",borderRadius:"5px",padding:"20px" }}>
              
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

      </div>
      <Slider setStep={setStep} />
    </>
  )
}
