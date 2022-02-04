import { useState } from "react";
import DependentLayout from "layouts/Dependent";
import Step2 from "./Step2";
import Btn from "components/base/Btn";
import { Link } from "react-router-dom";

export default function Dependent1() {
  const [page, setPage] = useState(0);
  const [upkeep, setUpkeep] = useState(null);
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
    <DependentLayout setPage={setPage} upkeep={upkeep}>
      <Step2
        // register={register}
        data={data.dependentInfo}
        update={updateData}
        upkeep={upkeep}
        setUpkeep={setUpkeep}
      />
    </DependentLayout>
  );
}
