import { useEffect, useState } from 'react'
import './App.css'
import { api_1, api_2, api_3, api_4 } from './axios'

function App() {
  const [dataApi1,setDataApi1] = useState<string>("")
  const [dataApi2,setDataApi2] = useState<string>("")
  const [dataApi3,setDataApi3] = useState<string>("")
  const [dataApi4,setDataApi4] = useState<string>("")
  
  async function getDataApi1(){
    const {data} = await api_1.get('/')
    setDataApi1(data.message)
  }
  async function getDataApi2(){
    const {data} = await api_2.get('/')
    setDataApi2(data.message)
  }
  async function getDataApi3(){
    const {data} = await api_3.get('/')
    setDataApi3(data.message)
  }
  async function getDataApi4(){
    const {data} = await api_4.get('/')
    setDataApi4(data.message)
  }
  useEffect(()=>{
    getDataApi1()
    getDataApi2()
    getDataApi3()
    getDataApi4()
  },[])
  return(
    <section>
      <p>Api Data: {dataApi1}</p>
      <p>Api Data: {dataApi2}</p>
      <p>Api Data: {dataApi3}</p>
      <p>Api Data: {dataApi4}</p>
    </section>
  )
}

export default App
