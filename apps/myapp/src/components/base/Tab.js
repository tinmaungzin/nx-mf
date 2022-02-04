import styled from '@emotion/styled';
const Tab = ({ children, open = false, onClick }) => {
  return (
    <TabContainer onClick={onClick} open={open}>
      {children}
    </TabContainer>
  );
};

export default Tab;
// styles
const TabContainer = styled.button`
  background: inherit;
  height: 36px;
  width: 200px;
  position: ${(props) => (props.open ? 'fixed' : 'absolute')};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -1px;
  color: var(--primary-2);
  border: 1px solid var(--primary-2);
  border-top-color: white;
  border-bottom-left-radius: ${(props) => (props.open ? 'unset' : '15px')};
  border-bottom-right-radius: ${(props) => (props.open ? 'unset' : '15px')};
  /* for open state */
  bottom: ${(props) => props.open && '0 !important'};
  border-top-color: ${(props) => (props.open ? 'var(--primary-2)' : 'white')};
  border-top-left-radius: ${(props) => (props.open ? '15px' : 'unset')};
  border-top-right-radius: ${(props) => (props.open ? '15px' : 'unset')};
`;
