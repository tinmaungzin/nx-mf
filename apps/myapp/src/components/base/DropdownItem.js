const DropdownItem = ({ icon, label }) => {
  return (
    <li className='d-flex align-items-center px-4 py-2'>
      {icon}
      <a className='dropdown-item' href='/'>
        {label}
      </a>
    </li>
  );
};

export default DropdownItem;
