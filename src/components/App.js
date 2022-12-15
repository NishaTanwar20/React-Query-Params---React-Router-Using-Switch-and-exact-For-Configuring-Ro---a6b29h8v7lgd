import React,{ useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import "../styles/App.css";
const App = () => {
  //Write your code here
  const [searchValue] = useSearchParams();
  let info = useMemo(
    () => ({
      id: searchValue.get("id"),
      name: searchValue.get("name"),
      designation: searchValue.get("designation"),
    }),
    []
  );

  return (
    <div className="details">
      Employee {info.id} named {info.name} works as {info.designation}
    </div>
  );
};

export default App;
