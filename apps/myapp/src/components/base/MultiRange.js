/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useRanger } from 'react-ranger';
import HandlesIcon from 'components/icons/dashboard/handles';
import Avatar from 'components/base/Avatar';

const MultiRange = ({ setInitialState, updateData, values, setValues }) => {
  useEffect(() => {
    updateData(values);
  }, [values]);
  const { getTrackProps, handles } = useRanger({
    min: 0,
    max: 3_000_000,
    stepSize: 300,
    values,
    onDrag: setValues,
  });

  const Button = styled.button`
    background: ${(props) =>
      props.index === 0 ? 'var(--links)' : 'var(--success-green)'};
    z-index: ${(props) => (props.index === 0 ? '3' : '4')};
  `;

  return (
    <>
      <div css={styles} className='mt-4'>
        <Avatar
          avatarUrl={require('assets/img/woman-avatar.svg').default}
          className='mr-5'
          outlineColor='var(--primary-3)'
        />
        {/* track bar */}
        <div
          {...getTrackProps({
            style: {
              height: '16px',
              width: '100%',
              background: 'white',
              borderRadius: '9999px',
            },
          })}
        >
          {/* hanldes */}
          {handles.map(({ getHandleProps }, index) => (
            <Button
              index={index}
              key={index}
              {...getHandleProps({
                style: {
                  width: '45px',
                  height: '45px',
                  border: 'none',
                  borderRadius: '50%',
                },
              })}
            >
              <HandlesIcon />
            </Button>
          ))}
        </div>
        <img
          className='ml-5'
          src={require('assets/img/net-worth-avatar.svg').default}
          alt=''
        />
      </div>
    </>
  );
};

export default MultiRange;
// styles
const styles = css`
  display: flex;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  width: 856px;
  height: 150px;

  border-radius: 9999px;
  background: #ebeffc;
  border: 1px solid #afbbc5;
  svg {
    transform: translateX(-4px);
  }
`;
