import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import TableControls from "./components/TableControls/TableControls";
import "./Content.scss";

function Content() {
  return (
    <div className="content">
      <Header />
      <TableControls />
      <Table />
    </div>
  );
}

export default Content;
