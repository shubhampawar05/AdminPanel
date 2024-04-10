import "./style.css";
import { FaRegUser } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { MdCurrencyRupee } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";

const ReportCart = ({ type }) => {
  let data;

  //
  let amoutn = 100;
  let diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all user",
        icon: <FaRegUser/>,
      };
      break;
    case "order":
      data = {
        title: "ORDER",
        isMoney: false,
        link: "See all user",
        icon: <MdOutlineLocalGroceryStore />,
      };
      break;
    case "earning":
      data = {
        title: "EARNING",
        isMoney: false,
        link: "See all user",
        icon: <MdCurrencyRupee  />,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: false,
        link: "See all user",
        icon: <div > <MdAccountBalanceWallet  /></div> 
      };
      break;
    default:
      break;
  }

  return (
    <div className="reportCart">
      <div className="reportCart_left">
        <span className="reportCart_title">{data.title}</span>
        <span className="reportCart_counter">
          {data.isMoney && "$"}
          {amoutn}
        </span>
        <span className="reportCart_link">{data.link}</span>
      </div>
      <div className="reportCart_right">
        <div className="reportCart_percentage">
          {diff > 0 ? <IoMdArrowDropup style={{color:"green", fontSize:"22px"}}/> : <IoMdArrowDropdown />} {diff}%
        </div>
        <div className="reportCart_icon"> {data.icon} </div>
      </div>
    </div>
  );
};

export default ReportCart;
