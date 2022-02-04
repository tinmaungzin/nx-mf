/*!

=========================================================
* Argon Dashboard PRO React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
// node.js library that concatenates classes (strings)
import classnames from 'classnames';
// javascipt plugin for creating charts
import { Chart } from 'chart.js';
// react plugin used to create charts
import { Line, Bar } from 'react-chartjs-2';
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Form,
  Input,
  ListGroupItem,
  ListGroup,
  Media,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';

// core components
import CardsHeader from 'components/Headers/CardsHeader.js';

import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from 'variables/charts.js';

function Dashboard() {
  const [activeNav, setActiveNav] = React.useState(1);
  const [chartExample1Data, setChartExample1Data] = React.useState('data1');
  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data(chartExample1Data === 'data1' ? 'data2' : 'data1');
  };
  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }
  return (
    <>
      <p>Dashboard</p>
    </>
  );
}

export default Dashboard;
