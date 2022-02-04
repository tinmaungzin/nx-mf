const GCR30_JAC_2 = ({ data, update }) => {
  return (
    <>
      <p className='fs-2 fw-light'>
        How do you like to gather customer info for this joint account?
      </p>
      <div className='form-check'>
        <input
          className='form-check-input d-none'
          type='radio'
          name='flexRadioDefault'
          id='flexRadioDefault1'
        />
        <label
          className='badge rounded-pill bg-light text-primary fw-normal px-4 py-3'
          htmlFor='flexRadioDefault1'
        >
          Gather info individually from account holders
        </label>
      </div>
      <div className='form-check mt-2'>
        <input
          className='form-check-input d-none'
          type='radio'
          name='flexRadioDefault'
          id='flexRadioDefault2'
        />
        <label
          className='badge rounded-pill bg-light text-primary fw-normal px-4 py-3'
          htmlFor='flexRadioDefault2'
        >
          Use joint total for account
        </label>
      </div>
    </>
  );
};
export default GCR30_JAC_2;
