/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
const Stepper = (props) => {
  return <progress css={styles} {...props}>Loading...</progress>;
};

export default Stepper;
// styles
const styles = css`
  accent-color: var(--primary-2);
`;
