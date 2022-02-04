/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext, useState } from "react";
import { DataContext } from "contexts/DataContext";

const AccordionInputGroup = ({ label, name, value, icon = null, type, valueType }) => {
  const { data, setData } = useContext(DataContext);

  return (
    <div
      className='d-flex align-items-center justify-content-between py-3'
      css={styles}
    >
      <label className='mb-0' htmlFor={name}>
        {label}
      </label>
      {name == 'header' ? (
        // add arrow down icon
        <></>
      ) : (
        <div className='accordion-input-group d-flex align-items-center'>
          {valueType == 'number' ? (
            <span className='mr-2'>$</span>
          ) : ''}

          <input
            name={name}
            type={valueType}
            id={name}
            defaultValue={value}
            onChange={(e) =>
              setData({
                ...data,
                [type]: {
                  ...data[type],
                  [name]:
                    valueType == 'number'
                      ? parseInt(e.target.value)
                      : e.target.value,
                },
              })
            }
          />
          {icon}
        </div>
      )}
    </div>
  );
};

export default AccordionInputGroup;
// styles
const styles = css`
  padding-right: 2rem;
  border-bottom: 1px dashed #ccc;
  label {
    font-weight: 500;
  }
  .accordion-input-group {
    padding: 0.8rem 1rem;
    border-radius: 9999px;
    background: var(--grey-6);
    input {
      background: transparent;
      border: none;
      outline: none;
    }
    svg {
      position: absolute;
      right: 1rem;
    }
  }
`;
