import React from 'react'
import HelloCompenent from './HelloCompenent';

export default function ArrayExample2() {

    const noOfList = [1,2,3,4,5];

  return (
    <div>
      {noOfList.map((v,i)=>{
        return<HelloCompenent key={i}></HelloCompenent>
      })}
    </div>
  )
}
