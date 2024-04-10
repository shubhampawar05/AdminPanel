import "./style.css"
import Sidebar from './../../components/sidebar/Sidebar'
import Header from './../../components/header/Header'
import DataTable from "../../components/dataTable/DataTable"


const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainerListPage">
        <Header/>
        <div className="dataTable">
        <DataTable/>
        </div>
      </div>
    </div>
  )
}

export default List