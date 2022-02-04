import { useState } from "react";
import Step2 from "./Step2";
import CoverageLayout from "layouts/Coverage";

export default function Coverage1() {
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
      <Step2
        coverageValue={coverageValue}
        setCoverageValue={setCoverageValue}
      />
    </CoverageLayout>
  );
}
