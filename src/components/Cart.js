import React,{useState} from 'react'
import Cartitem from './Cartitem'
import Menu from './MenuApi.js'
function Cart() {
  const[myStyle,setMyStyle] = useState(Menu)
  const filterItem = (time)=>{
    const updateList = Menu.filter(element=>{
        return element.time === time
    })
    setMyStyle(updateList)
  }
  return (
    <div>
      <div className="container">
        <ul className="nav-items">
            <li className="nav-item" onClick={()=>{filterItem('Breakfast')}}>Breakfast</li>
            <li className="nav-item" onClick={()=>{filterItem('Lunch')}}>Lunch</li>
            <li className="nav-item" onClick={()=>{filterItem('Evening')}}>Evening</li>
            <li className="nav-item" onClick={()=>{filterItem('Dinner')}}>Dinner</li>
            <li className="nav-item" onClick={()=>{setMyStyle(Menu)}}>All</li>
        </ul>
      </div>
      <Cartitem myStyle={myStyle} />
    </div>
  )
}

export default Cart
