import React, { useState } from 'react'
import './SliderSales.css'

import { RiBillFill,RiUserReceivedFill } from 'react-icons/ri';
import { MdBorderColor } from 'react-icons/md';
import { FaStickyNote } from 'react-icons/fa';


export default function SliderSales({ setStep }) {


    return (
        <div>
            <nav class="menuBar" >

                <input id="check" type="checkbox" class="menuState"/>
                <div className='menu_item'>
                    <button class="menuButton" onClick={() => { setStep(5) }}>
                        <RiUserReceivedFill style={{ fontSize: "30px" }} />
                    </button>
                    <span style={{margin:"-50px 0 0 -95px"}} className="tooltiptext">Customer</span>
                </div>


                <div className='menu_item'>
                    <button class="menuButton" onClick={() => { setStep(6) }}>
                        <RiBillFill style={{ fontSize: "30px" }} />
                    </button>
                    <span style={{margin:"-50px 0 0 -72px"}} className="tooltiptext">Invoice</span>
                </div>


                <div className='menu_item'>
                    <button class="menuButton" onClick={() => { setStep(7) }}>
                        <MdBorderColor style={{ fontSize: "30px" }} />
                    </button>
                    <span style={{margin:"-50px 0 0 -109px"}} className="tooltiptext">Sales Order</span>
                </div>


                <div className='menu_item'>
                    <button class="menuButton" onClick={() => { setStep(8) }}>
                        <FaStickyNote style={{ fontSize: "30px" }} />
                    </button>
                    <span style={{margin:"-50px 0 0 -116px"}} className="tooltiptext">Credit Notes</span>
                </div>


                <label for="check" class="menuButton">
                    <span class="top"></span>
                    <span class="mid"></span>
                    <span class="bot"></span>
                </label>

            </nav>
        </div>
    )
}

