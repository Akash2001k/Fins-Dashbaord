import React,{useEffect} from 'react'
import SliderAcc from '../SliderAcc'

export default function ChartOfAcc({setStep,update}) {
  useEffect(()=>{
    update("Chart Of Account")
  },[])
  return (
    <div>
        <h2>ChartOfAcc</h2>
        <SliderAcc setStep={setStep}/>
    </div>
  )
}
