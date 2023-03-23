import React, { useState } from 'react'


import { TbArrowBigUpFilled,TbArrowBigDownFilled } from 'react-icons/tb';
import { RiLineChartFill } from 'react-icons/ri';



export default function SliderAcc({ setStep }) {


    return (
        <div>
            <nav class="menuBar" >

                <input id="check" type="checkbox" class="menuState" />
           
                <div className='menu_item'>
                    <button class="menuButton" onClick={() => { setStep(9) }}>
                        <TbArrowBigUpFilled style={{ fontSize: "30px" }} />
                    </button>
                    <span style={{margin:"-50px 0 0 -110px"}} className="tooltiptext">Major Code</span>
                </div>


                <div className='menu_item'>
                    <button class="menuButton" onClick={() => { setStep(10) }}>
                        <TbArrowBigDownFilled style={{ fontSize: "30px" }} />
                    </button>
                    <span style={{margin:"-50px 0 0 -109px"}} className="tooltiptext">Minor Code</span>
                </div>


                <div className='menu_item'>
                    <button class="menuButton" onClick={() => { setStep(11) }}>
                        <RiLineChartFill style={{ fontSize: "30px" }} />
                    </button>
                    <span style={{margin:"-50px 0 0 -156px"}} className="tooltiptext">Chart Of Account</span>
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

