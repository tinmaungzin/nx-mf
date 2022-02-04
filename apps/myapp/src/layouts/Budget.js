import { useState } from 'react';
import Header from 'components/customerInfo/Header';
import BudgetComponent from 'components/customerInfo/Budget';
import DropdownIndicator from 'components/base/DropdownIndicator';
import { Link } from 'react-router-dom';
import CloseIcon from 'components/icons/close';

const BudgetLayout = () => {
  const [initialState, setInitialState] = useState({
    lumpSumBudget: 0,
    annualBudget: 0,
  });

  return (
    <main>
      <div className='container'>
        <Header>
          <DropdownIndicator
            label='Total Budget'
            value={
              initialState.lumpSumBudget ? initialState.lumpSumBudget : ' -----'
            }
          ></DropdownIndicator>
          <Link to='/admin/customer/1'>
            <CloseIcon />
          </Link>
        </Header>
        <section className='mt-3'>
          <BudgetComponent
            initialState={initialState}
            setInitialState={setInitialState}
          />
        </section>
      </div>
    </main>
  );
};

export default BudgetLayout;
