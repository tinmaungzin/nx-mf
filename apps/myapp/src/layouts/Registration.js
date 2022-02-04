import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from 'components/registration/Header';
import CloseIcon from 'components/icons/close';

const RegistrationLayout = ({ setPage, children }) => {
  return (
    <main className='container'>
      <Header>
        <Link to='/admin/dashboard'>
          <CloseIcon />
        </Link>
      </Header>
      <section className='d-flex justify-content-between mt-3'>
        <div>{children}</div>
        <div>
          <img src={require('assets/img/people.svg').default} alt='' />
        </div>
      </section>
    </main>
  );
};

export default RegistrationLayout;
