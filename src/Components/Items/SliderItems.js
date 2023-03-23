import React, { useState } from 'react'


import { FaCoins } from 'react-icons/fa';
import { RiShoppingCart2Fill,RiCheckboxMultipleFill } from 'react-icons/ri';



export default function SliderItems({ setStep }) {


    return (
        <div>
            <nav class="menuBar" >

                <input id="check" type="checkbox" class="menuState" />
           
                <div className='menu_item'>
                    <button class="menuButton" onClick={() => { setStep(12) }}>
                        <RiCheckboxMultipleFill style={{ fontSize: "30px" }} />
                    </button>
                    <span style={{margin:"-50px 0 0 -105px"}} className="tooltiptext">Total Items</span>
                </div>


                <div className='menu_item'>
                    <button class="menuButton" onClick={() => { setStep(13) }}>
                        <RiShoppingCart2Fill style={{ fontSize: "30px" }} />
                    </button>
                    <span style={{margin:"-50px 0 0 -139px"}} className="tooltiptext">Purchase Items</span>
                </div>


                <div className='menu_item'>
                    <button class="menuButton" onClick={() => { setStep(14) }}>
                        <FaCoins style={{ fontSize: "30px" }} />
                    </button>
                    <span style={{margin:"-50px 0 0 -106px"}} className="tooltiptext">Sales Items</span>
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

