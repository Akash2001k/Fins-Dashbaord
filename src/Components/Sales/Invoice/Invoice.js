import React from 'react'
import SliderSales from '../Slider Sales/SlideSales'

export default function Invoice({setStep}) {
  return (
    <div>
        <h2>Invoice</h2>
        <SliderSales setStep={setStep}/>
    </div>
  )
}
