import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import RegistrationLayout from "layouts/Registration";
import GCR30_JAC_4 from "components/registration/JAC_4";
import GCR30_JAC_5 from "components/registration/JAC_5";
import { DataContext } from "contexts/DataContext";

export default function KYC4() {
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const { data, setData } = useContext(DataContext);

  useEffect(() => {
    if (showLoading) {
      // redirect after 3 secs
      setTimeout(() => {
        // console.log('3 secs passed!');
        history.push("/admin/customer/" + data.kyc.customerID);
      }, 3000);
    }
  }, [showLoading]);

  return (
    <>
      {!showLoading ? (
        <RegistrationLayout>
          <GCR30_JAC_4 setShowLoading={setShowLoading} />
        </RegistrationLayout>
      ) : (
        <GCR30_JAC_5 />
      )}
    </>
  );
}
