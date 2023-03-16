import React, { useState } from 'react'
import './Dashboard.css'
import Customer from './Customer/Customer';
import Vendor from './Vendor/Vendor';
import Bill from './Vendor/Slider/Bill';
import PO from './Vendor/Slider/PO';
import CreditNotes from './Vendor/Slider/CreditNotes';

export default function Dashboard() {

    const [currentStep, setStep] = useState(1);

    const showStep = (step) => {
        switch (step) {
            case 1:
                return <Vendor setStep={setStep} />
            case 2:
                return <Customer />
            case 3:
                return <Bill setStep={setStep} />
            case 4:
                return <PO setStep={setStep} />
            case 5:
                return <CreditNotes setStep={setStep} />
        }
    }

    return (
        <div className='dashboard'>
            <header class="bg-surface-primary border-bottom pt-6">
                <div class="container-fluid" >
                    <div class="mb-npx">
                        <div class="row align-items-center">
                            <div class="col-sm-6 col-12 mb-4 mb-sm-0">
                                {/* <!-- Title --> */}
                                <h1 class="h2 mb-4 ls-tight">Fins Dashboard</h1>
                            </div>
                            {/* <!-- Actions --> */}
                            <div class="col-sm-6 col-12 text-sm-end">
                                <div class="mx-n1">
                                    <a href="#" class="btn d-inline-flex btn-sm btn-neutral border-base mx-1">
                                        <span class=" pe-2">
                                            <i class="bi bi-pencil"></i>
                                        </span>
                                        <span>Edit</span>
                                    </a>
                                    <a href="#" class="btn d-inline-flex btn-sm btn-primary mx-1">
                                        <span class=" pe-2">
                                            <i class="bi bi-plus"></i>
                                        </span>
                                        <span>Create</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Nav --> */}
                       


                            <div class="mt-5">
                                <input type="radio" name="s" id="vendor" />
                                <input type="radio" name="s" id="customer" />
                                <nav className='mini_nav'>
                                    <div class="mini_nav_slider"></div>
                                    <label onClick={() => { setStep(1) }} for="vendor">
                                        Vendors
                                        
                                    </label>
                                    <label onClick={() => { setStep(2) }} for="customer">
                                        Customer
                                    </label>
                                </nav>
                            </div>

                            {/* <li onClick={() => { setStep(1) }} class="nav-item cursor-pointer" >
                                <a id="vendor_click" class="nav-link">Vendors</a>
                            </li>
                            <li onClick={() => { setStep(2) }} class="nav-item cursor-pointer">
                                <a id="customer_click" class="nav-link ">Customers</a>
                            </li> */}
                
                    </div>
                </div>
            </header>
            {showStep(currentStep)}
        </div>
    )
}
