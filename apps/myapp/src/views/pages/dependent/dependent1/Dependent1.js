import { useState } from "react";
import DependentLayout from "layouts/Dependent";
import Step1 from "./Step1";
import { Link } from "react-router-dom";
import Btn from "components/base/Btn";

export default function Dependent() {
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
      <Step1
        // register={register}
        data={data.dependentInfo}
        update={updateData}
        upkeep={upkeep}
      />
    </DependentLayout>
  );
}
