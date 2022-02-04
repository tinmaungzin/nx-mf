/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import LightbulbIcon from 'components/icons/dashboard/lightbulb';
import pill from 'assets/img/pill-badge.svg';

const QuizBadge = () => {
  return (
    <div css={styles} className='mt-5'>
      <LightbulbIcon />
      <span>
        <b>Do you know your financial profile?</b>
        <br /> Take a quiz to find out and
        <br />
        get recommended financial tips.
      </span>
    </div>
  );
};

export default QuizBadge;
// styles
const styles = css`
  position: relative;
  background-image: url(${pill});
  width: 370px;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  span {
    font-size: 13px !important;
    line-height: 1.4;
  }
`;
