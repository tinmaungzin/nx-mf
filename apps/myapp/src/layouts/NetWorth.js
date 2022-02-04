import { useContext, useState } from "react";
import { DataContext } from "contexts/DataContext";
import Header from "components/customerInfo/Header";
import Networth from "components/customerInfo/NetWorth";
import { Link } from "react-router-dom";
import CloseIcon from "components/icons/close";
import DropdownIndicator from "components/base/DropdownIndicator";

const NetWorthLayout = () => {
  const { data, setData } = useContext(DataContext);

  const netWorth = data.netWorth.totalLiabilities - data.netWorth.totalAssets;

  const [initialState, setInitialState] = useState({
    totalLiabilites: 0,
    totalAssets: 0,
    netWorth: 0,
  });
  return (
    <main>
      <div className="container">
        <Header>
          <DropdownIndicator
            label="Total Net Worth"
            value={netWorth ? netWorth : " -----"}
          ></DropdownIndicator>
          <Link to="/admin/customer/1">
            <CloseIcon />
          </Link>
        </Header>
        <section className="mt-3">
          <Networth
            initialState={initialState}
            setInitialState={setInitialState}
          />
        </section>
      </div>
    </main>
  );
};

export default NetWorthLayout;
