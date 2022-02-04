import AccordionInputGroup from 'components/base/AccordionInputGroup';
import DropdownAccordion from 'components/base/DropdownAccordion';
import MultiRange from 'components/base/MultiRange';
import SliderModal from 'components/base/SliderModal';
import TextLink from 'components/base/TextLink';
import AddIcon from 'components/icons/dashboard/add';
import { useContext, useState } from 'react';
import { DataContext } from 'contexts/DataContext';
import { DataStore } from '@aws-amplify/datastore';
import { Budget } from '../../models';


const BudgetComponent = ({ initialState, setInitialState }) => {
  const { data, setData } = useContext(DataContext);

  // for multi range component

  const [values, setValues] = useState([0]);
  const updateMultiRangeData = (values) => {
    const result = values[0] / 10;
    setInitialState({
      lumpSumBudget: values[0],
      annualBudget: result,
    });
    setData({
      ...data,
      budget: { ...data.budget, lumpSumBudget: values[0], annualBudget: result },
    });

  };

  async function handleOnCreate() {
    const budget = await DataStore.save(
      new Budget({
        lumpSumBudget: data.budget.lumpSumBudget,
        annualBudget: data.budget.annualBudget,
        customerID: data.budget.customerID,
      })
    );
    console.log(budget)

  }
  return (
    <>
    <button onClick={handleOnCreate}>Save</button>
      <h1 className='fs-4 fw-bold'>Let us understand your Budget situation</h1>
      <p className='fs-2 fw-light'>
        My lump sum budget is ${' '}
        <span className='text-primary'>{initialState.lumpSumBudget} </span>
        with an annual budget of ${' '}
        <span className='text-primary'>{initialState.annualBudget}</span>,<br />{' '}
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
        <DropdownAccordion
          id='annualInflow'
          header='Total Annual Inflow'
          color='success-green'
        >
          {/* item */}
          <AccordionInputGroup label='Gross Annual Income' />
          <AccordionInputGroup label='Annual CPF Contribution' />
          <AccordionInputGroup label='Allowance' />
          <AccordionInputGroup label='Rental' />
          <TextLink icon={<AddIcon />}>Add More Inflow Information</TextLink>
        </DropdownAccordion>

        <DropdownAccordion
          id='annualOutflow'
          header='Total Annual Outflow'
          color='links'
        >
          {/* item */}
          <AccordionInputGroup label='Gross Annual Income' />
          <AccordionInputGroup label='Annual CPF Contribution' />
          <AccordionInputGroup label='Allowance' />
          <AccordionInputGroup label='Rental' />
          <TextLink icon={<AddIcon />}>Add More Inflow Information</TextLink>
        </DropdownAccordion>
      </SliderModal>
    </>
  );
};;
export default BudgetComponent;
