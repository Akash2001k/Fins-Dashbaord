import React,{useEffect} from 'react'
import SliderItems from './SliderItems'

export default function SalesItem({setStep,update}) {
  useEffect(()=>{
    update("Sales Item")
  },[])
  return (
    <div>
        <h2>SalesItem</h2>
        <SliderItems setStep={setStep}/>
    </div>
  )
}
