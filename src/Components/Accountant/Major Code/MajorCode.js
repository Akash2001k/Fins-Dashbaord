import React,{useEffect} from 'react'
import SliderAcc from '../SliderAcc'

export default function MajorCode({setStep,update}) {
  useEffect(()=>{
    update("Major Code")
  },[])
  return (
    <div>
        <h2>Major Code</h2>
        <SliderAcc setStep={setStep}/>
    </div>
  )
}
