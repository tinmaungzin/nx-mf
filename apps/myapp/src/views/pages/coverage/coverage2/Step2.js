import Input from 'components/base/Input';
import TextLink from 'components/base/TextLink';
import AddIcon from 'components/icons/dashboard/add';
import TrashIcon from 'components/icons/dashboard/trash';

const Step2 = ({ register, data, update, coverageValue, setCoverageValue }) => {
  return (
    <div>
      <p className='fs-6'>Policy 2 of 2</p>
      <p className='fs-3'>
        I have a{' '}
        <Input
          autoFocus='on'
          // register={register}
          name='upkeep'
          type='text'
          placeholder='enter'
        />{' '}
        policy,{' '}
        <Input
          // register={register}
          name='supportStartYear'
          type='text'
          placeholder='enter'
        />{' '}
        for{' '}
        <Input
          // register={register}
          name='yearsToSupport'
          type='text'
          placeholder='enter'
        />{' '}
        issued in
        <br /> year{' '}
        <Input
          // register={register}
          name='yearsToSupport'
          type='number'
          placeholder='enter'
        />{' '}
        with capital guaranteed of $
        <Input
          // register={register}
          name='supportStartYear'
          type='number'
          placeholder='enter'
          defaultValue={coverageValue}
          onChange={(e) => setCoverageValue(e.target.value)}
        />
        , <br />
        with coverage period of{' '}
        <Input
          // register={register}
          name='yearsToSupport'
          type='number'
          placeholder='enter'
        />{' '}
        years.
      </p>
      
      <div className='d-flex align-items-center mt-3'>
        <TextLink className='mr-5' icon={<AddIcon />}>
          Add Policy
        </TextLink>
        <TextLink icon={<TrashIcon />}>Delete This Policy</TextLink>
      </div>
    </div>
  );
};

export default Step2;
