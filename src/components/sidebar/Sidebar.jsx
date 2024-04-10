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
      <div className="sidebarUp">

      
        <div className="sidebar_top">
              Admin Dashboard
          </div>
          <div className="sidebar_center">
            <ul>
              <li><MdDashboard className="sidebar_icons"/> Dashboard</li>
              <li> <BiSolidUser className="sidebar_icons"/> Users</li>
              <li> <FaShop className="sidebar_icons"/> Products</li>
              <li><BsCartCheckFill className="sidebar_icons"/>Orders</li>
              <li><TbTruckDelivery className="sidebar_icons"/> Delivery</li>
            
            </ul>
         
       </div>
       </div>
       <div className="sidebarDown">

      
        <div className="sidebar_bottom">
          <ul>
            <li><TbLogout className="sidebar_icons"/> Logout</li>
            
          </ul>
        </div>
        </div>
    </div>
  )
}

export default Sidebar