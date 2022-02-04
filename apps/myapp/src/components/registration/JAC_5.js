/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Preloader from 'components/base/Preloader';
import background from 'assets/img/loading-scene.svg';

const GCR30_JAC_5 = () => {
  

  return (
    <>
      <div
        className='d-flex flex-column justify-content-center text-center'
        css={styles}
      >
        <Preloader />
        <h1 className='fs-3 fw-bold mt-4'>
          Aggregating Customer information on the Dashboard...
        </h1>
        <p className='fs-6 mt-3'>
          Make use of the customer <u>Dashboard</u> for more fact finding and
          use the <u>Life Journey</u> tool to start your needs analysis.
        </p>
      </div>
    </>
  );
};

export default GCR30_JAC_5;
// styles
const styles = css`
  min-height: 90vh;
  background: url(${background});
`;
