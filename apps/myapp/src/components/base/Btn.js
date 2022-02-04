/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Btn = ({ classes, onClick, type, children, ...props }) => {
  return (
    <button
      css={props.icon ? styles.btnIcon : styles.btn}
      {...props}
      className={`btn ${classes ? classes : ''}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
export default Btn;
// styles
const styles = {
  btnIcon: css`
    padding: 1.3rem 1.5rem !important;
    border-radius: 50% !important;
  `,
  btn: css`
    padding: 0.35rem 2.9rem !important;
    border-radius: 26px !important;
  `,
};
