import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Btn from "components/base/Btn";
import Input from "components/base/Input";
import { DataContext } from "contexts/DataContext";
import { DataStore } from "@aws-amplify/datastore";
import { Customer } from "../../models";

const GCR30_JAC_4 = ({ setShowLoading }) => {
  const LENGTH_LIMIT = 25;
  const [charactersLength, setcharactersLength] = useState(LENGTH_LIMIT);
  const { data, setData } = useContext(DataContext);
  const onInput = (e) => {
    const typedLength = e.target.value.length;
    setcharactersLength(LENGTH_LIMIT - parseInt(typedLength));
  };
  async function handleOnCreate() {
    const customer = await DataStore.save(
      new Customer({
        accountName: data.kyc.accountName,
        accountType: data.kyc.accountType,
        countryRace: data.kyc.countryRace,
        gender: data.kyc.gender,
        icNo: data.kyc.icNo,
        name: data.kyc.name,
        birthday: data.kyc.birthday,
        agentID: data.kyc.agentID,
      })
    );

    setData({
      ...data,
      kyc: {
        ...data.kyc,
        customerID: customer.id,
      },
      dependentInfo: {
        ...data.dependentInfo,
        customerID: customer.id,
      },
      cashFlow: {
        ...data.cashFlow,
        customerID: customer.id,
      },
      coverage: {
        ...data.coverage,
        customerID: customer.id,
      },
      netWorth: {
        ...data.netWorth,
        customerID: customer.id,
      },
      budget: {
        ...data.budget,
        customerID: customer.id,
      },
    });

    setShowLoading(true);
  }

  return (
    <>
      {/* <form id='registration-form' onSubmit={handleSubmit(onSubmit)}> */}
      <h1 className="fs-3 fw-bold">New Account/ New Customer</h1>
      <div>
        <p className="fs-2">Do you like to provide a name for this account?</p>
        <Input
          onChange={(e) =>
            setData({
              ...data,
              kyc: { ...data.kyc, accountName: e.target.value },
            })
          }
          defaultValue={data.kyc.name + "'s Account"}
          onInput={onInput}
          // register={register}
          // name='accountName'
          maxLength={LENGTH_LIMIT}
          // rules={{ required: true, maxLength: LENGTH_LIMIT }}
          className="fs-2"
          type="text"
          placeholder="Jeremy & Olivia"
        />
        <div className="mt-3">
          <b>{charactersLength}</b> characters left
        </div>
      </div>
      {/* </form> */}
      {/* navigation buttons */}
      <div className="d-flex justify-content-center mt-5">
        <Link to={`/admin/kyc`}>
          <Btn classes="btn-outline-links ml-3">Back</Btn>
        </Link>

        <Btn classes="btn-links ml-3" onClick={handleOnCreate}>
          Create Account
        </Btn>
      </div>
    </>
  );
};

export default GCR30_JAC_4;
