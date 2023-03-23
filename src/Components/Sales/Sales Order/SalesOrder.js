import React from 'react'
import SliderSales from '../Slider Sales/SlideSales'

export default function SalesOrder({setStep}) {
  return (
    <div>
        <h2>SalesOrder</h2>
        <SliderSales setStep={setStep}/>
    </div>
  )
}
