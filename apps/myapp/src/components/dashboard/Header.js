import styled from '@emotion/styled';
import AvatarIcon from 'components/icons/dashboard/avatar';
import BellIcon from 'components/icons/dashboard/bell';
import MailIcon from 'components/icons/dashboard/mail';

const Header = () => {
  const Header = styled.nav`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  return (
    <Header>
      <div>
        <span className='fs-5 fw-bold'>
          digital<span className='text-primary'>advisor</span>
        </span>
        <img src={require('assets/img/logo.svg').default} alt='DAP logo' />
      </div>
      <div>
        <ul
          className='d-flex align-items-center my-0'
          style={{ listStyle: 'none' }}
        >
          <li>
            <MailIcon />
          </li>
          <li className='ms-4'>
            <BellIcon />
          </li>
          <li className='ms-4'>
            <AvatarIcon />
          </li>
        </ul>
      </div>
    </Header>
  );
};

export default Header;
