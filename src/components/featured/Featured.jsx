import "./style.css";
import { IoMdMore } from "react-icons/io";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { IoIosArrowUp } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured_top">
        <h3>Total Revanue</h3>
        <IoMdMore fontSize="large" />
      </div>
      <div className="featured_bottom">
        <div className="featured_featuredChart">
          <CircularProgressbar value={70} text="70%" strokeWidth={5} />
        </div>
        <p className="featured_title">Total sales mad today </p>
        <p className="amount">$250 </p>
        <p className="desc">Total sales made today </p>
      </div>
      <div className="featured_summry">
        <div className="featured_item">
          <div className="featured_itemTitle">Target</div>
          <div className="featured_itemResult">
            <MdKeyboardArrowDown fontSize="large" />
            <div className="featured_resultAmoutn">$12.6k</div>
          </div>
        </div>
        <div className="featured_item">
          <div className="featured_itemTitle">Target</div>
          <div className="featured_itemResult">
            <MdKeyboardArrowDown fontSize="large" />
            <div className="featured_resultAmoutn">$12.6k</div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Featured;
