import { useContext, useState, useRef } from "react";
import { DataContext } from "contexts/DataContext";
import MultiRange from "components/base/MultiRange";
import SliderModal from "components/base/SliderModal";
import Input from "components/base/Input";
import DropdownAccordion from "components/base/DropdownAccordion";
import AccordionInputGroup from "components/base/AccordionInputGroup";
import TextLink from "components/base/TextLink";
import AddIcon from "components/icons/dashboard/add";
import TrashIcon from "components/icons/dashboard/trash";
import ConfirmBtn from "components/base/ConfirmBtn";
import UpArrowIcon from "components/icons/dashboard/upArrow";
import { DataStore } from '@aws-amplify/datastore';
import { NetWorth } from '../../models';

const Networth = ({ initialState, setInitialState }) => {
  const { data, setData } = useContext(DataContext);

  console.log(data);

  // for multi range component
  const [values, setValues] = useState([0, 100_000]);
  const accordionRef = useRef();
  const netValue = data.netWorth.totalLiabilities - data.netWorth.totalAssets;
  const updateMultiRangeData = (values) => {
    setData({
      ...data,
      netWorth: {
        ...data.netWorth,
        totalAssets: values[0],
        totalLiabilities: values[1],
        // surPlus: netValue,
      },
    });
  };

  async function handleOnCreate() {
    const networth = await DataStore.save(
      new NetWorth({
        totalAssets: data.netWorth.totalAssets,
        cashEquivalents: data.netWorth.cashEquivalents,
        residentialProperty: data.netWorth.residentialProperty,
        allowance: data.netWorth.allowance,
        investmentOrCommercialProperty: data.netWorth.investmentOrCommercialProperty,
        equities: data.netWorth.equities,
        bonds: data.netWorth.bonds,
        unitTrusts: data.netWorth.unitTrusts,
        personalUseAssets: data.netWorth.personalUseAssets,
        ordinaryAccount: data.netWorth.ordinaryAccount,
        specialAccount: data.netWorth.specialAccount,
        mediSaveAccount: data.netWorth.mediSaveAccount,
        totalLiabilities: data.netWorth.totalLiabilities,
        mortgageLoan: data.netWorth.mortgageLoan,
        carLoan: data.netWorth.carLoan,
        lumpSum: data.netWorth.lumpSum,
        customerID: data.netWorth.customerID,
      })
    );
    console.log(networth);
  }

  const handleOnClick = () => {
    console.log(accordionRef.current.classList);
  };

  const handleOnChange = (e) => {
    setData({
      ...data,
      netWorth: {
        ...data.netWorth,
        [e.target.id]: parseInt(e.target.value),
        // surPlus: netValue,
      },
    });
  };
  return (
    <>
    <button onClick={handleOnCreate}>Save</button>
      <h1 className='fs-3 fw-bold'>
        Let us understand your Net Worth situation
      </h1>
      <p className='fs-3 fw-light'>
        My total assets are worth ${' '}
        <Input
          id='totalAssets'
          style={{ width: '7ch' }}
          type='number'
          placeholder='enter'
          defaultValue={data.netWorth.totalAssets}
          onChange={handleOnChange}
        />
        <br />
        while my total liabilities are worth ${' '}
        <Input
          id='totalLiabilities'
          style={{ width: '7ch' }}
          type='number'
          placeholder='enter'
          defaultValue={data.netWorth.totalLiabilities}
          onChange={handleOnChange}
        />
        ,
        <br />
        resulting in my networth of ${' '}
        <span className='text-primary'>{netValue}</span>.
      </p>
      <div className='d-flex justify-content-center align-items-center'>
        <MultiRange
          initialState={initialState}
          setInitialState={setInitialState}
          updateData={updateMultiRangeData}
          values={values}
          setValues={setValues}
        />
      </div>
      <SliderModal>
        <div className='d-flex justify-content-end align-items-center mb-3'>
          <TextLink onClick={() => handleOnClick()}>
            <span className='mr-2'>Minimise All</span>{' '}
            <UpArrowIcon color='var(--links)' />
          </TextLink>
        </div>
        {/* Total Assets */}
        <DropdownAccordion
          refName={accordionRef}
          id='totalAssets'
          header='Total Assets'
          color='success-green'
        >
          <AccordionInputGroup
            valueType='number'
            label='Cash/ Cash Equivalents'
            name='cashEquivalents'
            type='netWorth'
          />
          <AccordionInputGroup
            valueType='number'
            label='Residential Property'
            name='residentialProperty'
            type='netWorth'
          />
          <AccordionInputGroup
            valueType='number'
            label='Allowance'
            name='allowance'
            type='netWorth'
            icon={<TrashIcon />}
          />
          <AccordionInputGroup
            valueType='number'
            label='Investment/ Commercial Property'
            name='investmentOrCommercialProperty'
            type='netWorth'
            icon={<TrashIcon />}
          />
          <AccordionInputGroup
            valueType='number'
            label='Equities'
            name='equities'
            type='netWorth'
          />
          <AccordionInputGroup
            valueType='number'
            label='Bonds'
            name='bonds'
            type='netWorth'
          />
          <AccordionInputGroup
            valueType='number'
            label='Unit Trusts'
            name='unitTrusts'
            type='netWorth'
          />
          <AccordionInputGroup
            valueType='number'
            label='Personal Use Assets'
            name='personalUseAssets'
            type='netWorth'
          />
          <AccordionInputGroup
            valueType='number'
            label='Ordinary Account'
            name='ordinaryAccount'
            type='netWorth'
          />
          <AccordionInputGroup
            valueType='number'
            label='Special Account'
            name='specialAccount'
            type='netWorth'
          />
          <AccordionInputGroup
            valueType='number'
            label='MediSave Account'
            name='mediSaveAccount'
            type='netWorth'
          />

          <div className='mt-3 d-flex justify-content-between align-items-center'>
            <TextLink icon={<AddIcon />}>Add More Assets</TextLink>
            <ConfirmBtn />
          </div>
        </DropdownAccordion>

        {/* Total Liabilities */}
        <DropdownAccordion
          id='totalLiabilities'
          header='Total Liabilities'
          color='links'
        >
          <AccordionInputGroup
            valueType='number'
            label='Mortgage Loan'
            name='mortgageLoan'
            type='netWorth'
          />
          <AccordionInputGroup
            valueType='number'
            label='Car Loan'
            name='carLoan'
            type='netWorth'
          />
          <AccordionInputGroup
            valueType='number'
            label='Lump Sum'
            name='lumpSum'
            type='netWorth'
          />

          <div className='mt-3 d-flex justify-content-between align-items-center'>
            <TextLink icon={<AddIcon />}>Add More Liabilities</TextLink>
            <ConfirmBtn />
          </div>
        </DropdownAccordion>
      </SliderModal>
    </>
  );
};
export default Networth;
