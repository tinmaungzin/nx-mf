import styled from '@emotion/styled';
const Input = ({ register, name, rules, ...props }) => {
  const onInput = (e) =>
    (e.target.size = e.target.value
      ? e.target.value.length
      : e.target.placeholder.length);
  return (
    <InputContainer
      placeholder={props.placeholder}
      onInput={onInput}
      {...props}
      // {...register(name, rules ? rules : { required: true })}
    />
  );
};

export default Input;
// styles
const InputContainer = styled.input`
  border: none;
  color: var(--links);
  &:placeholder-shown {
    width: ${(props) => props.placeholder.length + 1}ch;
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid var(--grey);
  }
  &::placeholder {
    font-style: italic;
  }
  /* hide calendar for number date */
  &[type='date']::-webkit-inner-spin-button,
  &[type='date']::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
  /* hide arrows for number input */
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    width: 8ch;
    -moz-appearance: textfield;
  }
`;
