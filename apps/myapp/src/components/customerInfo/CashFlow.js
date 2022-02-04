import { useContext, useState } from 'react';
import { DataContext } from 'contexts/DataContext';
import AccordionInputGroup from 'components/base/AccordionInputGroup';
import Collapse from 'components/base/Collapse';
import DropdownAccordion from 'components/base/DropdownAccordion';
import MultiRange from 'components/base/MultiRange';
import SliderModal from 'components/base/SliderModal';
import TextLink from 'components/base/TextLink';
import AddIcon from 'components/icons/dashboard/add';
import TrashIcon from 'components/icons/dashboard/trash';
import Btn from 'components/base/Btn';
import DotIcon from 'components/icons/dot';
import { DataStore } from '@aws-amplify/datastore';
import { CashFlow } from '../../models';
const Cashflow = ({ data, setData, initialState, setInitialState }) => {
  // const { data, setData } = useContext(DataContext);

  // console.log(data);

  // for multi range component
  const [values, setValues] = useState([0, 100_000]);
  const updateMultiRangeData = (values) => {
    const netValue = values[1] - values[0];
    setInitialState({
      outflow: values[0],
      inflow: values[1],
      surplus: netValue,
    });

    setData({
      ...data,
      cashFlow: {
        ...data.cashFlow,
        annualInflow: values[0],
        annualOutflow: values[1],
        surPlus: netValue,
      },
    });
  };

  async function handleOnCreate() {
    const cashflow = await DataStore.save(
      new CashFlow({
        additionalExpenses: data.cashFlow.additionalExpenses,
        allowance: data.cashFlow.allowance,
        annualCPFContribution: data.cashFlow.annualCPFContribution,
        annualInflow: data.cashFlow.annualInflow,
        annualOutflow: data.cashFlow.annualOutflow,
        carLoanRepayment: data.cashFlow.carLoanRepayment,
        cashInsurancePremiums: data.cashFlow.cashInsurancePremiums,
        cashInvestment: data.cashFlow.cashInvestment,
        cashPropertyLoanRepayment: data.cashFlow.cashPropertyLoanRepayment,
        committedExpenses: data.cashFlow.committedExpenses,
        cpfInvestment: data.cashFlow.cpfInvestment,
        cpfInsurancePremiums: data.cashFlow.cpfInsurancePremiums,
        cpfPropertyLoanRepayment: data.cashFlow.cpfPropertyLoanRepayment,
        familyExpenses: data.cashFlow.familyExpenses,
        grossAnnualIncome: data.cashFlow.grossAnnualIncome,
        incomeTax: data.cashFlow.incomeTax,
        lifestyleExpenses: data.cashFlow.lifestyleExpenses,
        manageableExpenses: data.cashFlow.manageableExpenses,
        otherCommittedCarExpenses: data.cashFlow.otherCommittedCarExpenses,
        rental: data.cashFlow.rental,
        surPlus: data.cashFlow.surplus,
        customerID: data.cashFlow.customerID,
      })
    );
          console.log(cashflow);

  }

  return (
    <>
      <button onClick={handleOnCreate}>Save</button>
      <h1 className='fs-4 fw-bold'>
        Let us understand your Cash Flow situation
      </h1>
      <p className='fs-3 fw-light'>
        My annual inflow is ${' '}
        <span className='text-primary'>{initialState.inflow} </span>
        with an annual outflow of ${' '}
        <span className='text-primary'>{initialState.outflow}</span>,<br />{' '}
        resulting in a surplus of ${' '}
        <span className='text-primary'>{initialState.surplus}</span>.
      </p>

      {/* indicators */}
      <div className='d-flex align-items-center'>
        <span className='d-flex justify-content-center align-items-center mr-4'>
          <DotIcon color='var(--success-green)' className='mr-2' /> Total Annual
          Inflow
        </span>
        <span className='d-flex justify-content-center align-items-center'>
          <DotIcon color='var(--links)' className='mr-2' />
          Total Annual Outflow
        </span>
      </div>

      <div className='d-flex justify-content-center align-items-center mt-3'>
        <MultiRange
          updateData={updateMultiRangeData}
          values={values}
          setValues={setValues}
        />
      </div>

      <SliderModal>
        {/* Inflow dropdown */}
        <DropdownAccordion
          id='annualInflow'
          header='Total Annual Inflow'
          color='success-green'
        >
          <AccordionInputGroup
            valueType='number'
            type='cashFlow'
            label='Gross Annual Income'
            name='grossAnnualIncome'
          />
          <AccordionInputGroup
            valueType='number'
            type='cashFlow'
            label='Annual CPF Contribution'
            name='annualCPFContribution'
          />
          <AccordionInputGroup
            valueType='number'
            type='cashFlow'
            label='Allowance'
            name='allowance'
            icon={<TrashIcon />}
          />
          <AccordionInputGroup
            valueType='number'
            type='cashFlow'
            label='Rental'
            name='rental'
            icon={<TrashIcon />}
          />
          <TextLink className='mt-3' icon={<AddIcon />}>
            Add More Inflow Information
          </TextLink>
        </DropdownAccordion>
        {/* Outflow dropdown */}
        <DropdownAccordion
          id='annualOutflow'
          header='Total Annual Outflow'
          color='links'
        >
          {/* Committed expenses */}
          <Collapse
            trigger={
              <AccordionInputGroup
                valueType='number'
                type='cashFlow'
                label='Committed Expenses'
                name='committedExpenses'
              />
            }
            id='committedExpensesCollapse'
            // name="committedExpenses"
          >
            <AccordionInputGroup
              valueType='number'
              type='cashFlow'
              label='(CPF) Property Loan Repayment'
              name='cpfPropertyLoanRepayment'
            />
            <AccordionInputGroup
              valueType='number'
              type='cashFlow'
              label='(Cash) Property Loan Repayment'
              name='cashPropertyLoanRepayment'
            />
            <AccordionInputGroup
              valueType='number'
              type='cashFlow'
              label='Car Loan Repayment'
              name='carLoanRepayment'
            />
            <AccordionInputGroup
              valueType='number'
              type='cashFlow'
              label='Other Committed Car Expenses'
              name='otherCommittedCarExpenses'
            />
            <AccordionInputGroup
              valueType='number'
              type='cashFlow'
              label='(CPF) Insurance Premiums'
              name='cpfInsurancePremiums'
            />
            <AccordionInputGroup
              valueType='number'
              type='cashFlow'
              label='(Cash) Insurance Premiums'
              name='cashInsurancePremiums'
            />
            <AccordionInputGroup
              valueType='number'
              type='cashFlow'
              label='(CPF) Investment'
              name='cpfInvestment'
            />
            <AccordionInputGroup
              valueType='number'
              type='cashFlow'
              label='(Cash) Investment'
              name='cashInvestment'
            />
            <AccordionInputGroup
              valueType='number'
              type='cashFlow'
              label='Income Tax'
              name='incomeTax'
            />
            <TextLink className='mt-3' icon={<AddIcon />}>
              Add More Committed Expenses
            </TextLink>
          </Collapse>
          {/* Manageable expenses */}
          <Collapse
            trigger={
              <AccordionInputGroup
                valueType='number'
                type='cashFlow'
                label='Manageable Expenses'
                name='manageableExpenses'
              />
            }
            id='manageableExpensesCollapse'
          >
            <AccordionInputGroup
              valueType='number'
              type='cashFlow'
              label='Family Expenses'
              name='familyExpenses'
            />
            <AccordionInputGroup
              valueType='number'
              type='cashFlow'
              label='Lifestyle Expenses'
              name='lifestyleExpenses'
            />
            <AccordionInputGroup
              valueType='number'
              type='cashFlow'
              label='Additional Expenses'
              name='additionalExpenses'
              icon={<TrashIcon />}
            />
            <TextLink className='mt-3' icon={<AddIcon />}>
              Add More Manageable Expenses
            </TextLink>
          </Collapse>
          <div className='d-flex justify-content-end mt-3'>
            <Btn classes='btn-links'>Save</Btn>
          </div>
        </DropdownAccordion>
      </SliderModal>
    </>
  );
};;
export default Cashflow;
