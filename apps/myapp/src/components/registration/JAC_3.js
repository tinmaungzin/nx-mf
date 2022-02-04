/** @jsxImportSource @emotion/react */
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import Btn from 'components/base/Btn';
import Input from 'components/base/Input';
import { DataContext } from 'contexts/DataContext';
import TextLink from 'components/base/TextLink';
import AddIcon from 'components/icons/dashboard/add';

const GCR30_JAC_3 = () => {
  const { data, setData } = useContext(DataContext);
  const [calculatedAge, setCalculatedAge] = useState('');
  // const { register, handleSubmit } = useForm();
  // const onSubmit = (formData) => console.log(formData);
  const getAge = () => {
    if (data.kyc.birthday) {
      const birthday = dayjs(data.kyc.birthday);
      const today = dayjs();
      const calculatedAge = today.diff(birthday, "year");
      setCalculatedAge(calculatedAge);
    }
  };

  return (
    <>
      {/* <form id='registration-form' onSubmit={handleSubmit(onSubmit)}> */}
      <h1 className="fs-3 fw-bold">New Account/ New Customer</h1>

      <div>
        <p className="fs-6 fw-light">
          Please enter your customer’s profile information below.
        </p>
        <p className="fs-3">
          My name is{" "}
          <Input
            onChange={(e) =>
              setData({ ...data, kyc: { ...data.kyc, name: e.target.value } })
            }
            autoFocus="on"
            size="10"
            defaultValue={data.kyc.name}
            type="text"
            placeholder="enter name"
          />
          ,{" "}
          <select
            onChange={(e) =>
              setData({ ...data, kyc: { ...data.kyc, gender: e.target.value } })
            }
            placeholder="gender"
            defaultValue={data.kyc.gender}
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
                kyc: { ...data.kyc, birthday: e.target.value },
              })
            }
            onBlur={() => getAge()}
            style={{ width: "240px" }}
            defaultValue={data.kyc.birthday}
            type="date"
            placeholder="30 Jan 1980"
          />
          , age <span className="text-primary">{calculatedAge}</span>
          .
          <br /> I’m a{" "}
          <select
            onChange={(e) =>
              setData({
                ...data,
                kyc: { ...data.kyc, countryRace: e.target.value },
              })
            }
            placeholder="countryRace"
            defaultValue={data.kyc.countryRace}
          >
            <option value='singaporeanChinese'>Singaporean Chinese</option>
            <option value='singaporeanMalaysian'>Singaporean Malaysian</option>
          </select>
          , my IC No. is{" "}
          <Input
            onChange={(e) =>
              setData({
                ...data,
                kyc: { ...data.kyc, icNo: e.target.value },
              })
            }
            defaultValue={data.kyc.icNo}
            name="icNumber"
            type="text"
            placeholder="S8012345D"
          />
          .
        </p>
        <div className="mt-3">
          <TextLink icon={<AddIcon />}>Add New Profile</TextLink>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        {/* <Link to={`/admin/kyc1`}>
          <Btn classes='btn-outline-links ml-3'>Back</Btn>
        </Link> */}
        <Link to={`/admin/kyc2`}>
          <Btn classes="btn-links ml-3">Next</Btn>
        </Link>
      </div>
      {/* </form> */}
      {/* navigation buttons */}
    </>
  );
};
export default GCR30_JAC_3;
