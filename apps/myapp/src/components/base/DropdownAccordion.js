/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
const DropdownAccordion = ({
  id = 'dapCollapse',
  children,
  header,
  color,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  // styles
  const styles = css`
    position: relative;
    .accordion-item,
    .accordion-item .accordion-button {
      border-radius: 15px;
    }
    .accordion-button::after {
      filter: brightness(10);
    }
    .accordion-button,
    .accordion-button:not(.collapsed) {
      background-color: var(--${color});
      color: ${color ? 'white' : 'inherit'};
    }
    summary label {
      font-size: 1.25rem;
      font-weight: bold;
      user-select: none;
    }
  `;
  return (
    <div
      className='accordion mb-4'
      id='dap-accordion'
      css={styles}
      ref={props.refName && props.refName}
    >
      <div className='accordion-item'>
        <h2 className='accordion-header' id='heading'>
          <button
            onClick={() => setOpen(!open)}
            className={`accordion-button fw-bold ${open ? 'collapsed' : ''}`}
            type='button'
            data-bs-toggle='collapse'
            data-bs-target={`#${id}`}
            aria-expanded='false'
            aria-controls={id}
          >
            {header}
          </button>
        </h2>
        <div
          id={id}
          className={`accordion-collapse collapse ${open ? 'show' : ''}`}
          aria-labelledby='heading'
          data-bs-parent='#dap-accordion'
        >
          <div className='accordion-body'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DropdownAccordion;
