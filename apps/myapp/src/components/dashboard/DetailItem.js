/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
const DetailItem = ({ icon, label, value, link }) => {
  return (
    <div className='px-2 d-flex align-items-center' css={styles}>
      <div>{icon}</div>
      <div className='ml-4'>
        <h3 className='fs-6 mb-0'>{label}</h3>
        <Link to={link}>
          <p className='fs-3 fw-light mb-0 text-primary'>{value}</p>
        </Link>
      </div>
    </div>
  );
};

export default DetailItem;
// styles
const styles = css`
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px dashed #999999;
  p {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;
