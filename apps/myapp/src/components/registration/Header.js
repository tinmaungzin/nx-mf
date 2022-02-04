/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useContext } from 'react';
import { DataContext } from 'contexts/DataContext';
import cloud from 'assets/img/cloud.svg';
import Avatar from 'components/base/Avatar';

const Header = ({ children }) => {
  const { data, setData } = useContext(DataContext);
  return (
    <header css={styles}>
      <div className='avatars'>
        {data.kyc.gender === 'female' ? (
          <Avatar
            avatarUrl={require('assets/img/woman-avatar.svg').default}
            outlineColor='var(--primary-3)'
            name={data.kyc.name}
          />
        ) : (
          <Avatar
            avatarUrl={require('assets/img/man-avatar.svg').default}
            outlineColor='var(--primary-3)'
            name={data.kyc.name}
          />
        )}
      </div>
      {children}
    </header>
  );
};

export default Header;
// styles
const styles = css`
  min-height: 25vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${cloud});
  background-position: 20px 20px;
  font-size: calc(10px + 2vmin);
  color: white;
  .avatars {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .close-icon {
    cursor: pointer;
    position: absolute;
    right: 25px;
    top: 25px;
  }
`;
