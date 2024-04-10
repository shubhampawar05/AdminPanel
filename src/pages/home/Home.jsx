import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import "./style.css";
import ReportCart from "../../components/reportCart/ReportCart";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Tabel from "../../components/table/Tabel";
import ContainerWrapper from "../../components/containerWrapper/ContainerWrapper";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Header />
      <ContainerWrapper>
        <div className="reortCartContainer">
          <ReportCart type="user" />
          <ReportCart type="order" />
          <ReportCart type="earning" />
          <ReportCart type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitile">Latest Transcations</div>
          <Tabel />
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default Home;
