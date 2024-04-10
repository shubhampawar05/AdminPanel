import "./style.css";
import Sidebar from "./../../components/sidebar/Sidebar";
import Header from "./../../components/header/Header";
import DataTable from "../../components/dataTable/DataTable";
import ContainerWrapper from './../../components/containerWrapper/ContainerWrapper'
const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <Header />
      <ContainerWrapper>
        
          <div className="dataTable">
            <DataTable />
          </div>
        
      </ContainerWrapper>
    </div>
  );
};

export default List;
