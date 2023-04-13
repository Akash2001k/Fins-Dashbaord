import React, { useState } from 'react'
import './Dashboard.css'

import { AiOutlineDoubleRight } from 'react-icons/ai';

import Vendor from './Purchase/Vendor/Vendor';
import Bill from './Purchase/Bill/Bill';
import PO from './Purchase/PO/PO';
import DebitNotes from './Purchase/Debit Notes/DebitNotes';

import Customer from './Sales/Customer/Customer';
import Invoice from './Sales/Invoice/Invoice';
import SalesOrder from './Sales/Sales Order/SalesOrder'
import CreditNotes from './Sales/Credit Notes/CreditNotes'

import MajorCode from './Accountant/Major Code/MajorCode';
import MinorCode from './Accountant/Minor Code/MinorCode';
import ChartOfAcc from './Accountant/Chart of Acc/ChartOfAcc';

import TotalItem from './Items/TotalItem';
import PurchaseItem from './Items/PurchaseItem';
import SalesItem from './Items/SalesItem';

export default function Dashboard() {



    // ====================== Live Time =======================================

    let time = new Date().toLocaleTimeString()
    let [currentTime, changeTime] = useState(time);

    function liveTime() {
        time = new Date().toLocaleTimeString();
        changeTime(time);
    }
    setInterval(liveTime, 1000);

    // ==================================================================================

    const [indicator, setIndicator] = useState("Purchase")
    const [subvalue, setSubvalue] = useState("")

    const indicatorChange = (datas) => {
        setIndicator(datas)
    }
    const [currentStep, setStep] = useState(1);

    const showStep = (step) => {

            // ================================== Purchase ==============================================

        switch (step) {
            case 1:
                return <Vendor setStep={setStep} update={setSubvalue} />
            case 2:
                return <Bill setStep={setStep} update={setSubvalue} />
            case 3:
                return <PO setStep={setStep} update={setSubvalue} />
            case 4:
                return <DebitNotes setStep={setStep} update={setSubvalue} />

            //  ================================== Sales ==============================================

            case 5:
                return <Customer setStep={setStep} update={setSubvalue} />
            case 6:
                return <Invoice setStep={setStep} update={setSubvalue} />
            case 7:
                return <SalesOrder setStep={setStep} update={setSubvalue} />
            case 8:
                return <CreditNotes setStep={setStep} update={setSubvalue} />

            // ================================ Accountant ===============================================

            case 9:
                return <MajorCode setStep={setStep} update={setSubvalue} />
            case 10:
                return <MinorCode setStep={setStep} update={setSubvalue} />
            case 11:
                return <ChartOfAcc setStep={setStep} update={setSubvalue} />

            // ================================ Items ===============================================

            case 12:
                return <TotalItem setStep={setStep} update={setSubvalue} />
            case 13:
                return <PurchaseItem setStep={setStep} update={setSubvalue} />
            case 14:
                return <SalesItem setStep={setStep} update={setSubvalue} />
        }
    }

    return (
        <div className='dashboard'>
            <header >
                <div className='header_heading' >
                    <h2 style={{ fontWeight: "600", color: "white" }}>Fins Dashboard</h2>
                    <div className='d-flex justify-content-end '>
                        {/* <p className='text-light '>Login Time - </p> */}
                        <p className='text-light mx-4'>Time - {currentTime}</p>
                        <div className='header_indicator' style={{ display: "flex", color: "white" }}>
                            <p className='mx-2'>{indicator}</p><AiOutlineDoubleRight style={{ fontSize: "21px" }} /><p className='mx-2'>{subvalue}</p>
                        </div>
                    </div>
                </div>

                <div class="mt-3">
                    <input type="radio" name="s" id="sales" />
                    <input type="radio" name="s" id="purchase" />
                    <input type="radio" name="s" id="accountant" />
                    <input type="radio" name="s" id="items" />
                    <nav className='mini_nav'>
                        <div class="mini_nav_slider"></div>
                        <label onClick={() => { setStep(1); indicatorChange("Purchase") }} for="purchase">
                            Purchase
                        </label>
                        <label onClick={() => { setStep(5); indicatorChange("Sales") }} for="sales">
                            Sales
                        </label>
                        <label onClick={() => { setStep(9); indicatorChange("Accountant") }} for="accountant">
                            Accountant
                        </label>
                        <label onClick={() => { setStep(12); indicatorChange("Items") }} for="items">
                            Items
                        </label>
                    </nav>
                </div>


            </header>
            {showStep(currentStep)}
        </div>
    )
}
