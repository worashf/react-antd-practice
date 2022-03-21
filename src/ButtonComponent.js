
import React, { useState} from 'react'
import { Button } from 'antd'



export const ButtonComponent = () => {
    const[loading,setLoading] = useState(false)

    const handleClick = e=>{
      console.log("button clicked");
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },20000)
    }
    return (
        <>
              <Button type='primary' block>Primary button</Button>
      <Button type='primary' size='large' shape ="round" style={{margin:"20px 0"}}>primary</Button>
      <Button type='dashed' style={{margin:"0 10px",background:"grey"}}>Dashed</Button>
      <Button type='link' loading ><a href='www.google.com' target="_blank">go</a></Button>
      <Button type='default' size='small' style={{margin:"0 10px",background:"grey"}}>small</Button>
      <Button type='danger' size='large' loading style={{margin:"0 10px"}}>text</Button>
      <Button type='primary' onClick={handleClick} > handleClick</Button>
        </>
    )
}