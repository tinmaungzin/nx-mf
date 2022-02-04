import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { DataContext } from "contexts/DataContext";
import Input from "components/base/Input";
import TextLink from "components/base/TextLink";
import Btn from "components/base/Btn";
import { Link } from "react-router-dom";
import { DataStore } from "@aws-amplify/datastore";
import { Dependent } from "../../../../models";
import AddIcon from "components/icons/dashboard/add";
import TrashIcon from "components/icons/dashboard/trash";

const Step2 = ({ register, update, upkeep, setUpkeep }) => {
  const history = useHistory();
  const { data, setData } = useContext(DataContext);
  async function onCreate() {
    const dependent = await DataStore.save(
      new Dependent({
        relationship: data.dependentInfo.relationship,
        name: data.dependentInfo.name,
        gender: data.dependentInfo.gender,
        birthday: data.dependentInfo.birthday,
        citizenshipRace: data.dependentInfo.citizenshipRace,
        icNo: data.dependentInfo.icNo,
        idType: data.dependentInfo.idType,
        monthlyUpkeep: data.dependentInfo.monthlyUpKeep,
        targetAge: data.dependentInfo.targetAge,
        yearLeft: data.dependentInfo.yearLeft,
        customerID: data.dependentInfo.customerID,
      })
    );
    console.log(dependent);
    history.push("/admin/customer/1");
  }
  return (
    <>
      <div>
        <p className="fs-6">Dependent 1 of 1</p>
        <p className="fs-2">
          My child monthly upkeep is ${" "}
          <Input
            onChange={(e) => {
              setUpkeep(e.target.value);
              setData({
                ...data,
                dependentInfo: {
                  ...data.dependentInfo,
                  monthlyUpKeep: e.target.value,
                },
              });
            }}
            autoFocus="on"
            // register={register}
            name="upkeep"
            type="number"
            placeholder="enter"
            defaultValue={upkeep}
          />
          .<br /> I will support him by the age of{" "}
          <Input
            // register={register}
            name="supportStartYear"
            type="number"
            placeholder="enter"
            onChange={(e) =>
              setData({
                ...data,
                dependentInfo: {
                  ...data.dependentInfo,
                  targetAge: e.target.value,
                },
              })
            }
          />
          .<br /> Number of years to support{" "}
          <Input
            // register={register}
            name="yearsToSupport"
            type="number"
            placeholder="enter"
            onChange={(e) =>
              setData({
                ...data,
                dependentInfo: {
                  ...data.dependentInfo,
                  yearLeft: e.target.value,
                },
              })
            }
          />
          .
        </p>

        <div className="d-flex align-items-center mt-3">
          <TextLink className="mr-5" icon={<AddIcon />}>
            Add Profile
          </TextLink>
          <TextLink icon={<TrashIcon />}>Delete This Profile</TextLink>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <Link to="/admin/customer/1/dependent">
          <Btn classes="btn-outline-primary-2">Back</Btn>
        </Link>
        <Btn onClick={onCreate} classes="btn-links ml-3">
          Next
        </Btn>
      </div>
    </>
  );
};

export default Step2;
