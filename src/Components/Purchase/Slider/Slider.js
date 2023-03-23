import React, { useState } from 'react'
import './Slider.css'

import { RiBillFill,RiUserSharedFill } from 'react-icons/ri';
import { MdBorderColor } from 'react-icons/md';
import { FaStickyNote } from 'react-icons/fa';




export default function Slider({ setStep }) {


    return (
        <div>
            <nav class="menuBar" >

                <input id="check" type="checkbox" class="menuState" />
                <div className='menu_item'>
                    <button class="menuButton" onClick={() => { setStep(1) }}>
                        <RiUserSharedFill style={{ fontSize: "30px" }} />
                    </button>
                    <span style={{margin:"-45px 0 0 -85px"}} className="tooltiptext">Vendors</span>
                </div>


                <div className='menu_item'>
                    <button class="menuButton" onClick={() => { setStep(2) }}>
                        <RiBillFill style={{ fontSize: "30px" }} />
                    </button>
                    <span style={{margin:"-45px 0 0 -57px"}} className="tooltiptext">Bills</span>
                </div>


                <div className='menu_item'>
                    <button class="menuButton" onClick={() => { setStep(3) }}>
                        <MdBorderColor style={{ fontSize: "30px" }} />
                    </button>
                    <span style={{margin:"-45px 0 0 -140px"}} className="tooltiptext">Purchase Order</span>
                </div>


                <div className='menu_item'>
                    <button class="menuButton" onClick={() => { setStep(4) }}>
                        <FaStickyNote style={{ fontSize: "30px" }} />
                    </button>
                    <span style={{margin:"-45px 0 0 -116px"}} className="tooltiptext">Debit Notes</span>
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

