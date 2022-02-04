/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
const Collapse = ({ trigger, children, id = 'dapCollapse' }) => {
  return (
    <>
      <div
        className='collapse-trigger'
        css={styles}
        data-toggle='collapse'
        href={`#${id}`}
        role='button'
      >
        {trigger}
      </div>
      <div className='collapse' id={id}>
        {children}
      </div>
    </>
  );
};

export default Collapse;
const styles = css`
  label {
    font-size: 1.25rem;
    font-weight: bolder;
  }
`;
