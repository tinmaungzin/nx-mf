import { useState } from "react";
import CashFlowLayout from "layouts/CashFlow";

export default function CashFlow() {
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
      <CashFlowLayout setPage={setPage} />
    </main>
  );
}
