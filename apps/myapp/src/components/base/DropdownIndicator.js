/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import DropdownItem from './DropdownItem';
import CashIcon from 'components/icons/dashboard/cash';
import CircleIcon from 'components/icons/dashboard/circle';
import PersonIcon from 'components/icons/dashboard/profile';
import UmbrellaIcon from 'components/icons/dashboard/umbrella';
import WalletIcon from 'components/icons/dashboard/wallet';
import HomeIcon from 'components/icons/home';

const DropdownIndicator = ({ label, value, children }) => {
  return (
    <div className='dropdown' css={styles}>
      <button
        type='button'
        className='badge px-3 mt-3 fs-6 dropdown-toggle'
        id='dropdownMenuButton'
        data-toggle='dropdown'
        aria-expanded='false'
      >
        {label}
        <span className='fw-light ml-2'>${value}</span>
      </button>
      <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
        <DropdownItem icon={<PersonIcon />} label='Personal Info' />
        <DropdownItem icon={<HomeIcon />} label='Dependent Info' />
        <DropdownItem icon={<CircleIcon />} label='Net Worth' />
        <DropdownItem icon={<UmbrellaIcon />} label='Coverage' />
        <DropdownItem icon={<CashIcon />} label='Cash Flow' />
        <DropdownItem icon={<WalletIcon />} label='Budget' />
      </ul>
    </div>
  );
};

export default DropdownIndicator;
// styles
const styles = css`
  .badge {
    text-transform: unset;
  }
  cursor: pointer;
  button {
    border: none;
    color: white;
  }
  .dropdown-menu {
    width: 240px;
    border-radius: 15px;
    li:not(:last-of-type) {
      border-bottom: 1px dashed #ccc;
    }
    li {
      &:hover {
        background: var(--grey-6);
      }
      a {
        background: inherit;
        font-weight: 500;
        color: var(--links);
      }

      svg {
        width: 24px;
      }
    }
  }
`;
