import { useContext, useState } from 'react';
import { DataContext } from 'contexts/DataContext';
import Header from 'components/customerInfo/Header';
import Cashflow from 'components/customerInfo/CashFlow';
import DropdownIndicator from 'components/base/DropdownIndicator';
import { Link } from 'react-router-dom';
import CloseIcon from 'components/icons/close';

const CashFlowLayout = () => {
  const { data, setData } = useContext(DataContext);

  const [initialState, setInitialState] = useState({
    inflow: 0,
    outflow: 0,
    surplus: 0,
  });

  return (
    <main>
      <div className='container'>
        <Header>
          <DropdownIndicator
            label='Total Cash Flow'
            value={data.cashFlow.surPlus ? data.cashFlow.surPlus : ' -----'}
          ></DropdownIndicator>
          <Link to='/admin/customer/1'>
            <CloseIcon />
          </Link>
        </Header>
        <section className='mt-3'>
          <Cashflow
            data={data}
            setData={setData}
            initialState={initialState}
            setInitialState={setInitialState}
          />
        </section>
      </div>
    </main>
  );
};

export default CashFlowLayout;
