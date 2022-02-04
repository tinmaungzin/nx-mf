import { useState } from "react";
import RegistrationLayout from "layouts/Registration";
import GCR30_JAC_1 from "components/registration/JAC_1";
import { Link } from "react-router-dom";
import Btn from "components/base/Btn";

export default function KYC1() {
  const [page, setPage] = useState(1);
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
    <RegistrationLayout setPage={setPage}>
      <GCR30_JAC_1 data={data.gatherInfoType} update={updateData} />
      <div className="d-flex justify-content-center mt-3">
        <Link to={`/admin/kyc3`}>
          <Btn classes="btn-primary ms-3">Next</Btn>
        </Link>
      </div>
    </RegistrationLayout>
  );
}
