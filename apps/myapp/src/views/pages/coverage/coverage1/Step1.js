import { useContext, useState } from "react";
import { DataContext } from "contexts/DataContext";
import Input from "components/base/Input";
import TextLink from "components/base/TextLink";
import AddIcon from "components/icons/dashboard/add";
import TrashIcon from "components/icons/dashboard/trash";
import { DataStore } from "@aws-amplify/datastore";
import { Coverage } from "../../../../models";

const Step1 = ({ register, update, coverageValue, setCoverageValue }) => {
  const { data, setData } = useContext(DataContext);

  async function handleOnCreate() {
    const coverage = await DataStore.save(
      new Coverage({
        policyType: data.coverage.policyType,
        policyPeriod: data.coverage.policyPeriod,
        policyName: data.coverage.policyName,
        insurer: data.coverage.insurer,
        issuedYear: data.coverage.issuedYear,
        maturityYear: data.coverage.maturityYear,
        policyBenefitName: data.coverage.policyBenefitName,
        policyBenefitPrice: data.coverage.policyBenefitPrice,
        premiumAmount: data.coverage.premiumAmount,
        paymentType: data.coverage.paymentType,
        premiumTerm: data.coverage.premiumTerm,
        policyFor: data.coverage.policyFor,
        customerID: data.coverage.customerID,
      })
    );
    console.log(coverage);
  }

  return (
    <div>
      <button onClick={handleOnCreate}>Save</button>
      <p className="fs-6">Policy 1 of 2</p>
      <p className="fs-3">
        I have a{" "}
        <Input
          autoFocus="on"
          onChange={(e) =>
            setData({
              ...data,
              coverage: {
                ...data.coverage,
                policyType: e.target.value,
              },
            })
          }
          name="upkeep"
          type="text"
          placeholder="enter"
        />{" "}
        policy,{" "}
        <Input
          onChange={(e) =>
            setData({
              ...data,
              coverage: {
                ...data.coverage,
                policyName: e.target.value,
              },
            })
          }
          name="supportStartYear"
          type="text"
          placeholder="enter"
        />{" "}
        for{" "}
        <Input
          onChange={(e) =>
            setData({
              ...data,
              coverage: {
                ...data.coverage,
                policyFor: e.target.value,
              },
            })
          }
          name="yearsToSupport"
          type="text"
          placeholder="enter"
        />{" "}
        issued in
        <br /> year{" "}
        <Input
          onChange={(e) =>
            setData({
              ...data,
              coverage: {
                ...data.coverage,
                issuedYear: e.target.value,
              },
            })
          }
          name="yearsToSupport"
          type="date"
          placeholder="enter"
        />{" "}
        with{" "}
        <Input
          onChange={(e) =>
            setData({
              ...data,
              coverage: {
                ...data.coverage,
                policyBenefitName: e.target.value,
              },
            })
          }
          name="supportStartYear"
          type="text"
          placeholder="enter"
        />{" "}
        protection of ${" "}
        <Input
          onChange={(e) =>
            setData({
              ...data,
              coverage: {
                ...data.coverage,
                policyBenefitPrice: parseInt(e.target.value),
              },
            })
          }
          name="yearsToSupport"
          style={{ width: "7ch" }}
          type="number"
          placeholder="enter"
        />
        .
      </p>
      <div className="d-flex mt-3">
        <TextLink icon={<AddIcon />}>Add Policy</TextLink>
        <TextLink icon={<TrashIcon />}>Delete This Policy</TextLink>
      </div>
    </div>
  );
};

export default Step1;
