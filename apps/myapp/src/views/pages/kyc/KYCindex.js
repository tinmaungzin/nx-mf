import { useState } from "react";
import Dashboard from "layouts/Dashboard";

export default function KYC(props) {
  // console.log(props);
  const [page, setPage] = useState(0);
  // const [data, setData] = useState({
  //   personalInfo: {},
  //   dependentInfo: {},
  //   cashFlow: {},
  //   budget: {},
  //   netWorth: {},
  //   coverage: {},
  // });
  // function updateData(type, newData) {
  //   setData((prevData) => {
  //     return {
  //       ...prevData,
  //       [type]: newData,
  //     };
  //   });
  // }

  return <Dashboard setPage={setPage} />;
}
