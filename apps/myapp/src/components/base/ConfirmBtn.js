import { useState } from 'react';
import Btn from 'components/base/Btn';
const ConfirmBtn = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <>
      {!showConfirm ? (
        <Btn classes='btn-links' onClick={() => setShowConfirm(true)}>
          Save
        </Btn>
      ) : (
        <div className='d-flex align-items-center'>
          <span>Are you sure you want to update this info?</span>
          <Btn
            classes='btn-outline-links ml-2'
            onClick={() => setShowConfirm(false)}
          >
            No
          </Btn>
          <Btn type='submit' classes='btn-links'>
            Yes
          </Btn>
        </div>
      )}
    </>
  );
};

export default ConfirmBtn;
