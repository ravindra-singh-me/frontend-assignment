import logo from "./logo.svg";
import "./App.css";
import CustomTable from "./component/CustomTable";
import { useEffect, useState } from "react";

export const columnData = [
  { field: "s.no", headerName: "Sr.No" },
  { field: "percentage.funded", headerName: "Percentage funded" },
  {
    field: "amt.pledged",
    headerName: "Amount pledged",
  },
];

function App() {
  const [tableData, setTableData] = useState({
    loading: true,
    data: [],
    error: "",
  });

  const handleFetchData = async () => {
    try {
      const data = await fetch(
        "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
      );
      const jsonData = await data.json();
      setTableData({ loading: false, data: jsonData, error: "" });
    } catch (error) {
      setTableData((pre) => {
        return { ...pre, error: error.message };
      });
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <div className="App">
      {tableData.loading ? (
        <div>Loading ...</div> // Show loading state while data is loading
      ) : (
        <CustomTable
          columnData={columnData}
          rows={tableData?.data}
          loading={tableData.loading}
        />
      )}
    </div>
  );
}

export default App;
