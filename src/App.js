import logo from './logo.svg';
import './App.css'
import  'antd/dist/antd.css'
import {Button} from 'antd'
import React ,{useState} from "react"

function App() {
  const[loading,setLoading] = useState(false)

  const handleClick = e=>{
    console.log("button clicked");
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },20000)
  }

  return (
    <div className="App">
      <Button type='primary' block>Primary button</Button>
      <Button type='primary' size='large' shape ="round" style={{margin:"20px 0"}}>primary</Button>
      <Button type='dashed' style={{margin:"0 10px",background:"grey"}}>Dashed</Button>
      <Button type='link' ><a href='www.google.com' target="_blank">go</a></Button>
      <Button type='default' size='small' style={{margin:"0 10px",background:"grey"}}>small</Button>
      <Button type='text' size='large' style={{margin:"0 10px",background:"grey"}}>text</Button>
      <Button type='primary' onClick={handleClick}> handleClick</Button>
    </div>
  );
}

export default App;
