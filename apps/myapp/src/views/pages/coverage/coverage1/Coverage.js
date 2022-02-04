import { useState } from "react";
import Step1 from "./Step1";
import CoverageLayout from "layouts/Coverage";

export default function Coverage() {
  const [coverageValue, setCoverageValue] = useState();
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
    <CoverageLayout setPage={setPage} coverageValue={coverageValue}>
      <Step1
        coverageValue={coverageValue}
        setCoverageValue={setCoverageValue}
      />
    </CoverageLayout>
  );
}
