import { useState } from 'react';
import RegistrationLayout from 'layouts/Registration';
import GCR30_JAC_2 from 'components/registration/JAC_2';

export default function KYC2() {
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
    <main className='container'>
      <RegistrationLayout setPage={setPage}>
        <GCR30_JAC_2 data={data.gatherInfoType} update={updateData} />
      </RegistrationLayout>
    </main>
  );
}
