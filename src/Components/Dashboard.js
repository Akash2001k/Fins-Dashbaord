import React, { useState } from 'react'
import './Dashboard.css'

import { CgMathPlus } from 'react-icons/cg';
import { CiEdit } from 'react-icons/ci';

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

    const [currentStep, setStep] = useState(1);

    const showStep = (step) => {

        // ================================== Purchase ==============================================

        switch (step) {
            case 1:
                return <Vendor setStep={setStep} />
            case 2:
                return <Bill setStep={setStep} />
            case 3:
                return <PO setStep={setStep} />
            case 4:
                return <DebitNotes setStep={setStep} />

            //  ================================== Sales ==============================================

            case 5:
                return <Customer setStep={setStep} />
            case 6:
                return <Invoice setStep={setStep} />
            case 7:
                return <SalesOrder setStep={setStep} />
            case 8:
                return <CreditNotes setStep={setStep} />

            // ================================ Accountant ===============================================

            case 9:
                return <MajorCode setStep={setStep} />
            case 10:
                return <MinorCode setStep={setStep} />
            case 11:
                return <ChartOfAcc setStep={setStep} />

            // ================================ Items ===============================================

            case 12:
                return <TotalItem setStep={setStep} />
            case 13:
                return <PurchaseItem setStep={setStep} />
            case 14:
                return <SalesItem setStep={setStep} />
        }
    }

    return (
        <div className='dashboard'>
            <header >
                <div className='header_heading'>
                    <h2 style={{fontWeight:"600",color:"white"}}>Fins Dashboard</h2>
                    <div className='header_div_btn'>
                        <button className='btn btn-light mx-2 '>Edit <CiEdit style={{fontSize:"20px",margin:"-4px 0 0 0"}}/></button>
                        <button className='btn btn-light'>Create<CgMathPlus style={{fontSize:"20px",margin:"-4px 4px 0 4px"}}/></button>
                    </div>
                </div>



                <div class="mt-3">
                    <input type="radio" name="s" id="sales"/>
                    <input type="radio" name="s" id="purchase"/>
                    <input type="radio" name="s" id="accountant"/>
                    <input type="radio" name="s" id="items" />
                    <nav className='mini_nav'>
                        <div class="mini_nav_slider"></div>
                        <label onClick={() => { setStep(1) }} for="purchase">
                            Purchase
                        </label>
                        <label onClick={() => { setStep(5) }} for="sales">
                            Sales
                        </label>
                        <label onClick={() => { setStep(9) }} for="accountant">
                            Accountant
                        </label>
                        <label onClick={() => { setStep(12) }} for="items">
                            Items
                        </label>
                    </nav>
                </div>


            </header>
            {showStep(currentStep)}
        </div>
    )
}
