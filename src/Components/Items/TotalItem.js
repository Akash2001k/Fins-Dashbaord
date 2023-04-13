import React,{useEffect} from 'react'
import SliderItems from './SliderItems'

export default function TotalItem({setStep,update}) {
  useEffect(()=>{
    update("Total Item")
  },[])
  return (
    <div>
        <h2>Total Item</h2>
        <SliderItems setStep={setStep}/>
    </div>
  )
}
