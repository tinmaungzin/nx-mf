const Preloader = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div
        className='spinner-grow spinner-grow-sm text-primary-3 mr-3'
        role='status'
      >
        <span className='visually-hidden'></span>
      </div>
      <div
        className='spinner-grow spinner-grow-sm text-primary mr-3'
        role='status'
      >
        <span className='visually-hidden'></span>
      </div>
      <div
        className='spinner-grow spinner-grow-sm text-primary-3'
        role='status'
      >
        <span className='visually-hidden'></span>
      </div>
    </div>
  );
};

export default Preloader;
