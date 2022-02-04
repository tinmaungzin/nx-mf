/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const Tooltip = ({
  children,
  text,
  avatarUrl,
  active = false,
  bottom = false,
  ...props
}) => {
  return (
    <TooltipContainer outline={!active} bottom={bottom}>
      <div className='tooltip-box'>
        {avatarUrl && <img src={avatarUrl} alt='' />}
        <span className='mx-2'>{text}</span>
        <span className='tooltip-arrow' />
      </div>
      <div {...props}>{children}</div>
    </TooltipContainer>
  );
};

export default Tooltip;
// styles
const TooltipContainer = styled.div`
  position: relative;
  img {
    border-radius: 50%;
    outline: 3px solid ${(props) => (props.outline ? 'var(--grey-4)' : 'white')};
    outline-offset: -1.5px;
  }

  .tooltip-box {
    position: absolute;
    display: flex;
    align-items: center;
    width: max-content;
    background: ${(props) => (props.outline ? 'white' : 'var(--primary-3)')};
    padding: 6px 8px;
    border-radius: 5rem;
    top: ${(props) => (props.bottom ? '35%' : 'auto')};
    bottom: ${(props) => (!props.bottom ? 'calc(100% + 15px)' : 'auto')};
    box-shadow: var(--shadow-hard);
    outline: ${(props) =>
      props.outline ? '1px solid var(--primary-2)' : 'none'};
  }

  .tooltip-arrow {
    position: absolute;
    bottom: -16px;
    left: 50%;
    border-width: 8px;
    border-style: solid;
    border-color: ${(props) =>
      props.outline
        ? 'var(--primary-2) transparent transparent transparent'
        : 'var(--primary-3) transparent transparent transparent'};
  }
`;
