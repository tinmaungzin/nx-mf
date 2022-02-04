/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Avatar from 'components/base/Avatar';
import background from 'assets/img/cloud.svg';

const Header = ({ children }) => {
  return (
    <header css={styles}>
      <div className='avatars'>
        <Avatar
          avatarUrl={require('assets/img/man-avatar.svg').default}
          className='mr-5'
          outlineColor='var(--primary-3)'
          name='Jeremy'
        />
        <Avatar
          avatarUrl={require('assets/img/woman-avatar.svg').default}
          outlineColor='var(--primary-3)'
          name='Olivia'
        />
      </div>

      {children}
    </header>
  );
};

export default Header;
// styles
const styles = css`
  min-height: 30vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .avatars {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .badge {
    background: var(--links);
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 9999px;
  }

  background-image: url(${background});
  background-position: 20px 20px;
  font-size: calc(10px + 2vmin);
  color: white;
  .close-icon {
    cursor: pointer;
    position: absolute;
    right: 25px;
    top: 25px;
  }
`;
