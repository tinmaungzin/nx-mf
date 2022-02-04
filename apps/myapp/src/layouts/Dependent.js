import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from 'components/customerInfo/Header';
import CloseIcon from 'components/icons/close';
import DropdownIndicator from 'components/base/DropdownIndicator';
import { Link } from 'react-router-dom';

const DependentLayout = ({ setPage, children, upkeep }) => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    dependentInfo: {},
  });
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => console.log(formData);

  const LAST_PAGE = 2;
  const goNextPage = () => {
    if (step === LAST_PAGE) return;
    setStep((step) => step + 1);
  };
  const goPrevPage = () => {
    setStep((step) => step - 1);
  };
  const updateData = (type, newData) => {
    setData((data) => {
      return { ...data, [type]: newData };
    });
  };

  return (
    <main>
      <div className='container'>
        <Header>
          <DropdownIndicator
            label='Monthly Upkeep'
            value={upkeep ? upkeep : ' -----'}
          ></DropdownIndicator>
          <Link to='/admin/customer/1'>
            <CloseIcon />
          </Link>
        </Header>
        <section className='d-flex justify-content-between mt-3'>
          <div>
            <form id='dependent-form' onSubmit={handleSubmit(onSubmit)}>
              <h1 className='fs-3 fw-bold'>Let us know about your Dependent</h1>
              {children}
            </form>
          </div>
          <div>
            <img src={require('assets/img/people.svg').default} alt='' />
          </div>
        </section>
      </div>
    </main>
  );
};

export default DependentLayout;
