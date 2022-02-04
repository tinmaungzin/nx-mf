import CashIcon from 'components/icons/dashboard/cash';
import CircleIcon from 'components/icons/dashboard/circle';
import PersonIcon from 'components/icons/dashboard/profile';
import SwitchOffIcon from 'components/icons/dashboard/switchOff';
import UmbrellaIcon from 'components/icons/dashboard/umbrella';
import WalletIcon from 'components/icons/dashboard/wallet';
import HomeIcon from 'components/icons/home';
import DetailItem from './DetailItem';
import QuizBadge from './QuizBadge';
import { Customer, Dependent, NetWorth, Coverage, CashFlow, Budget } from '../../models';
import { DataStore } from '@aws-amplify/datastore';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const ProfileBoard = ({ data }) => {
  const dependentLink = '/admin/customer/' + data.kyc.customerID + '/dependent';
  const netWorthLink = '/admin/customer/' + data.kyc.customerID + '/net-worth';
  const coverageLink = '/admin/customer/' + data.kyc.customerID + '/coverage';
  const cashflowLink = '/admin/customer/' + data.kyc.customerID + '/cash-flow';
  const budgetLink = '/admin/customer/' + data.kyc.customerID + '/budget';

  const customerID = '0a8427a5-c98b-4ed9-bdcd-5fec31ea5a6e';
  const [customerName,setCustomerName] = useState('Jeremy')
  const [age, setAge] = useState(0);
  const [dependentCount, setDependentCount] = useState('.....');
  const [netWorthValue, setNetWorthValue] = useState('.....');
  const [coverageValue, setCoverageValue] = useState('.....');
  const [cashFlowValue, setCashFlowValue] = useState('.....');
  const [budgetValue, setBudgetValue] = useState('.....');

  const getAge = (date) => {
    if (date) {
      const birthday = dayjs(date);
      const today = dayjs();
      const calculatedAge = today.diff(birthday, 'year');
      return calculatedAge;
    }
  };
  async function fetchData() {
    const customer = await DataStore.query(Customer, customerID);
    const dependents = (await DataStore.query(Dependent)).filter(
      (c) => c.customerID === customer.id
    );
    const netWorth = (await DataStore.query(NetWorth)).filter(
      (c) => c.customerID === customer.id
    );
    const coverage = (await DataStore.query(Coverage)).filter(
      (c) => c.customerID === customer.id
    );
    const cashFlow = (await DataStore.query(CashFlow)).filter(
      (c) => c.customerID === customer.id
    );
    const budget = (await DataStore.query(Budget)).filter(
      (c) => c.customerID === customer.id
    );
    setAge(getAge(customer.birthday));
    setCustomerName(customer.name)
    setDependentCount(dependents.length);
    setNetWorthValue(netWorth[0].totalAssets)
    setCoverageValue(coverage[0].policyBenefitPrice);
    setCashFlowValue(cashFlow[0].annualInflow);
    setBudgetValue(budget[0].annualBudget);

  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <p className='text-muted'>
        <SwitchOffIcon />
        <span className='ml-2'>Joint account summary</span>
      </p>
      <h2 className='fs-4 fw-bold mt-2'>{customerName}’s profile</h2>
      <div className='row'>
        <div className='col'>
          {/* detail item */}
          <DetailItem
            icon={<PersonIcon />}
            label='Age'
            value={age}
            link='/admin/kyc1'
          />
        </div>
        <div className='col'>
          {/* detail item */}
          <DetailItem
            icon={<HomeIcon />}
            label='Dependents'
            value={dependentCount}
            link={dependentLink}
          />
        </div>
      </div>
      <div className='row mt-2'>
        <div className='col'>
          {/* detail item */}
          <DetailItem
            icon={<CircleIcon />}
            label='Net Worth'
            value={netWorthValue}
            link={netWorthLink}
          />
        </div>
        <div className='col'>
          {/* detail item */}
          <DetailItem
            icon={<UmbrellaIcon />}
            label='Coverage'
            value={coverageValue}
            link={coverageLink}
          />
        </div>
      </div>
      <div className='row mt-2'>
        <div className='col'>
          {/* detail item */}
          <DetailItem
            icon={<CashIcon />}
            label='Cash Flow'
            value={cashFlowValue}
            link={cashflowLink}
          />
        </div>
        <div className='col'>
          {/* detail item */}
          <DetailItem
            icon={<WalletIcon />}
            label='Budget'
            value={budgetValue}
            link={budgetLink}
          />
        </div>
      </div>

      {/* quiz badge */}
      <QuizBadge />
    </>
  );
};

export default ProfileBoard;
