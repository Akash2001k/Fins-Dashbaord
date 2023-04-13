import React,{useEffect} from 'react'
import SliderSales from '../Slider Sales/SlideSales'

export default function SalesOrder({setStep,update}) {
  useEffect(()=>{
    update("Sales Order")
  },[])
  return (
    <div>
        <h2>SalesOrder</h2>
        <SliderSales setStep={setStep}/>
    </div>
  )
}
