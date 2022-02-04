/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
import Tab from 'components/base/Tab';
const SliderModal = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  // styles
  const styles = css`
    .outer-container {
      height: ${modalOpen ? '45vh' : '0'};
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 10;
      background: white;

      .inner-container {
        position: relative;
        padding: 0 1rem;

        .container {
          padding-top: 6rem;
        }
      }

      border-top: 1px solid #afbbc5;
    }
  `;

  return (
    <div css={styles}>
      {modalOpen ? (
        <div className='outer-container'>
          <div className='inner-container'>
            <Tab onClick={() => setModalOpen(false)}>Return to Form</Tab>
            <div className='container pb-5'>{children}</div>
          </div>
        </div>
      ) : (
        <Tab onClick={() => setModalOpen(true)} open>
          Add Full Policy Info
        </Tab>
      )}
    </div>
  );
};

export default SliderModal;
