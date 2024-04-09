import "./style.css"
import { MdDashboard } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";
import { FaShop } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCartCheckFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className='sidebar'>
       <div >
        <div className="top">
              Admin Panel
          </div>
          <div className="center">
            <ul>
              <li><MdDashboard className="icons"/> Dashboard</li>
              <li> <BiSolidUser className="icons"/> Users</li>
              <li> <FaShop className="icons"/> Products</li>
              <li><BsCartCheckFill className="icons"/>Orders</li>
              <li><TbTruckDelivery className="icons"/> Delivery</li>
            
            </ul>
          </div>
       </div>
        <div className="bottom">
          <ul>
            <li><TbLogout className="icons"/> Logout</li>
            
          </ul>
        </div>
    </div>
  )
}

export default Sidebar