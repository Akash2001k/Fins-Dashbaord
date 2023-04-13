import React,{useEffect} from 'react'
import SliderSales from '../Slider Sales/SlideSales'

export default function CreditNotes({setStep,update}) {
  useEffect(()=>{
    update("Credit Notes")
  },[])
  return (
    <div>
      <h2>CreditNotes</h2>
      <SliderSales setStep={setStep}/>
    </div>
  )
}
