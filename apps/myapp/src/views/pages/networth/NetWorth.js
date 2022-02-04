import { useState } from "react";
import NetWorthLayout from "layouts/NetWorth";

export default function NetWorth() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    personalInfo: {},
    dependentInfo: {},
    cashFlow: {},
    budget: {},
    netWorth: {},
    coverage: {},
  });
  function updateData(type, newData) {
    setData((prevData) => {
      return {
        ...prevData,
        [type]: newData,
      };
    });
  }

  return (
    <main className="container">
      <NetWorthLayout setPage={setPage} />
    </main>
  );
}
