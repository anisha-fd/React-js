import React from 'react'

export default function ArrayExample1() {

    const dataList = ['c',"c++","java","React","Node"]
  return (
    <>
      <h1>Array Example</h1>
      <ul>
        {dataList.map((value,index)=>{
              return <li key={index}>{value}</li>
        })}
      </ul>
    </>
  )
}
