import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rice from "../src/assets/rice3.png"
import { FaRegCircleUser } from "react-icons/fa6";
import user from "../src/assets/user-icon.jpg"
import Dashboard from './assets/Components/DashBoard/Dashboard'
import Table from './assets/Components/Table/Table'
// import stock from "stock.js"

// import stock from "../src/stock"


function App() {
  const [count, setCount] = useState(0)
  let [dashboard,setDashbard] = useState('db-active')
  let [table,setTable] = useState('table-inactive')
  let [render,setRender] = useState('1');
// console.log(stock)

  let handleDashboard = ()=>{
        setDashbard('db-active')
        setTable('table-inactive')
        setRender('1')
  }

  let handleTable = ()=>{
        setDashbard('db-inactive');
        setTable('table-active');
        setRender('2')

  }

  // console.log(stock)

  return (
 <div className="App">


      <div className="nav">
        <div className="nav-left">
        <img src={Rice} alt="" />
        <div className="tabs">
          <p onClick={handleDashboard} className={dashboard}>Dashboard</p>
          <p onClick={handleTable} className={table}>Data table</p>
        </div>
        </div>
        <div className="profile">
          <img src={user} alt="" className='profile-img' />
          <p>Ravikumar</p>
        </div>
      </div>

      {
          (render == 1) ?  <Dashboard /> : <Table /> 
      }

 </div>
  )
}

export default App
