/** @jsxImportSource @emotion/react */
// import { useContext, useState } from 'react';
import { css } from '@emotion/react';
import Btn from 'components/base/Btn';
import Tooltip from 'components/base/Tooltip';
import Header from 'components/dashboard/Header';
import ProfileBoard from 'components/dashboard/ProfileBoard';
import { DataContext } from 'contexts/DataContext';
// icons
import ManActive from 'components/icons/dashboard/manActive';
import ManInactive from 'components/icons/dashboard/manInactive';
import PointIcon from 'components/icons/dashboard/point';
import StatsIcon from 'components/icons/dashboard/stats';
import WomanActive from 'components/icons/dashboard/womanActive';
import WomanInactive from 'components/icons/dashboard/womanInactive';
import background from 'assets/img/dashboard-scene.svg';
import { Customer } from '../models';
import { DataStore } from '@aws-amplify/datastore';
import { useEffect, useState, useContext } from 'react';

const Dashboard = ({ setPage }) => {
  // TODO: add setState's
  const [manActive,setManActive] = useState(false);
  const [womanActive, setWomanActive] = useState(false);
  const { data, setData } = useContext(DataContext);
  const [name, setName] = useState('Jeremy');
  const customerID = '0a8427a5-c98b-4ed9-bdcd-5fec31ea5a6e';

  async function fetchData() {
    const customer = await DataStore.query(Customer, customerID);
    setName(customer.name);
    if(customer.gender == 'male') setManActive(true)
    if(customer.gender == 'female') setWomanActive(true)
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div css={styles}>
      {/* <Header /> */}
      <h1 className='fs-3 fw-bold mt-2'>{name}’s dashboard</h1>
      <section className='row' style={{ minHeight: '80vh' }}>
        <div
          id='scene'
          className='col d-flex justify-content-center align-items-center'
        >
          <Tooltip
            text={name}
            avatarUrl={require('assets/img/avatar.svg').default}
            active={manActive ? true : false}
            bottom
          >
            {manActive ? <ManActive /> : <ManInactive />}
          </Tooltip>
          <Tooltip
            text={name}
            avatarUrl={require('assets/img/avatar.svg').default}
            active={womanActive ? true : false}
          >
            {womanActive ? <WomanActive /> : <WomanInactive />}
          </Tooltip>
        </div>
        <div className='col'>
          <ProfileBoard data={data} />
        </div>
      </section>
      {/* call to action */}
      <div>
        <div className='call-text text-end'>
          <b className='text-primary'>Explore Your Life Journey</b>
          <br /> Start planning for your life and financial goals.
        </div>
        <StatsIcon />
        <Btn icon='true' classes='btn-primary'>
          <PointIcon />
        </Btn>
      </div>
    </div>
  );
};
export default Dashboard;
// styles
const styles = css`
  #scene {
    background: url(${background}) no-repeat center;
  }
  .call-text,
  .btn,
  .stats {
    position: absolute;
  }
  .call-text {
    right: 140px;
    bottom: 65px;
  }
  .btn {
    right: 45px;
    bottom: 40px;
  }
  .stats {
    right: 0;
    bottom: 0;
  }
`;
