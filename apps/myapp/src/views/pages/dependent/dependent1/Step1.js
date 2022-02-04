import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { DataContext } from "contexts/DataContext";
import Input from "components/base/Input";
import TextLink from "components/base/TextLink";
import AddIcon from "components/icons/dashboard/add";
import TrashIcon from "components/icons/dashboard/trash";
import Btn from "components/base/Btn";

const Step1 = ({ register, update }) => {
  const { data, setData } = useContext(DataContext);
  const [calculatedAge, setCalculatedAge] = useState("");

  const getAge = () => {
    if (data.dependentInfo.birthday) {
      const birthday = dayjs(data.dependentInfo.birthday);
      const today = dayjs();
      const calculatedAge = today.diff(birthday, "year");
      setCalculatedAge(calculatedAge);
    }
  };

  console.log(data);

  return (
    <>
      <div>
        <p className="fs-6">Dependent 1 of 1</p>
        <p className="fs-3">
          I’m financially supporting my{" "}
          <Input
            style={{ size: "min-content" }}
            autoFocus="on"
            name="relationship"
            type="text"
            placeholder="enter relationship"
            onChange={(e) =>
              setData({
                ...data,
                dependentInfo: {
                  ...data.dependentInfo,
                  relationship: e.target.value,
                },
              })
            }
          />
          , name{" "}
          <Input
            name="name"
            type="text"
            placeholder="enter"
            onChange={(e) =>
              setData({
                ...data,
                dependentInfo: {
                  ...data.dependentInfo,
                  name: e.target.value,
                },
              })
            }
          />
          ,{" "}
          <select
            name="gender"
            placeholder="gender"
            onChange={(e) =>
              setData({
                ...data,
                dependentInfo: {
                  ...data.dependentInfo,
                  gender: e.target.value,
                },
              })
            }
          >
            <option value="">gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          , born on{" "}
          <Input
            onChange={(e) =>
              setData({
                ...data,
                dependentInfo: {
                  ...data.dependentInfo,
                  birthday: e.target.value,
                },
              })
            }
            onBlur={() => getAge()}
            name="dob"
            type="date"
            data-date-inline-picker="true"
            placeholder="birthday"
          />
          , age <span className="text-primary">{calculatedAge}</span>
          .
          <br /> He is a{" "}
          <select
            onChange={(e) =>
              setData({
                ...data,
                dependentInfo: {
                  ...data.dependentInfo,
                  citizenshipRace: e.target.value,
                },
              })
            }
            placeholder="countryRace"
          >
            <option value="singaporeanChinese">Singaporean Chinese</option>
            <option value="singaporeanMalaysian">Singaporean Malaysian</option>
          </select>
          .<br /> His IC No. is{" "}
          <Input
            name="ICNumber"
            type="text"
            placeholder="enter"
            onChange={(e) =>
              setData({
                ...data,
                dependentInfo: {
                  ...data.dependentInfo,
                  icNo: e.target.value,
                },
              })
            }
          />
          and ID Type is{" "}
          <Input
            name="IDType"
            type="text"
            placeholder="enter"
            onChange={(e) =>
              setData({
                ...data,
                dependentInfo: {
                  ...data.dependentInfo,
                  idType: e.target.value,
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

      <div className="d-flex justify-content-center my-5">
        <Link to="/admin/customer/1/dependent1">
          <Btn classes="btn-primary-2 ml-3">Next</Btn>
        </Link>
      </div>
    </>
  );
};

export default Step1;
