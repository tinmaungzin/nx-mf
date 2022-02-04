import Dashboard from "views/pages/dashboards/Dashboard.js";
import Tables from "views/pages/tables/Tables.js";
import KYC from "views/pages/kyc/KYCindex";
import KYC3 from "views/pages/kyc/KYC_step1";
import KYC4 from "views/pages/kyc/KYC_step2";
import KYC5 from "views/pages/kyc/KYC_step3";
import Dependent from "views/pages/dependent/dependent1/Dependent1";
import Dependent1 from "views/pages/dependent/dependent2/Dependent2";
import NetWorth from "views/pages/networth/NetWorth";
import CashFlow from "views/pages/cashflow/CashFlow";
import Coverage from "views/pages/coverage/coverage1/Coverage";
import Coverage1 from "views/pages/coverage/coverage2/Coverage1";
import Budget from "views/pages/budget/Budget";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-archive-2 text-green",
    component: Dashboard,
    layout: "/admin",
  },

  // KYC routes
  {
    collapse: true,
    path: "/kyc1",
    name: "KYC",
    icon: "ni ni-archive-2 text-green",
    // component: KYC1,
    // layout: '/admin',
    views: [
      {
        path: "/kyc",
        name: "KYC1",
        miniName: "D",
        component: KYC3,
        layout: "/admin",
      },
      {
        path: "/kyc2",
        name: "KYC2",
        miniName: "D",
        component: KYC4,
        layout: "/admin",
      },
      {
        path: "/kyc3",
        name: "KYC3",
        miniName: "D",
        component: KYC5,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/tables",
    name: "Customer Management",
    icon: "ni ni-calendar-grid-58 text-red",
    component: Tables,
    layout: "/admin",
  },
  // Dependent routes
  {
    path: "/customer/:id/dependent",
    name: "Dependent",
    icon: "ni ni-calendar-grid-58 text-red",
    component: Dependent,
    layout: "/admin",
  },
  {
    path: "/customer/:id/dependent1",
    name: "Dependent1",
    icon: "ni ni-calendar-grid-58 text-red",
    component: Dependent1,
    layout: "/admin",
  },

  // Net Worth route
  {
    path: "/customer/:id/net-worth",
    name: "Net Worth",
    icon: "ni ni-calendar-grid-58 text-red",
    component: NetWorth,
    layout: "/admin",
  },
  // Coverage routes
  {
    path: "/customer/:id/coverage",
    name: "Coverage",
    icon: "ni ni-calendar-grid-58 text-red",
    component: Coverage,
    layout: "/admin",
  },
  {
    path: "/customer/:id/coverage1",
    name: "Coverage1",
    icon: "ni ni-calendar-grid-58 text-red",
    component: Coverage1,
    layout: "/admin",
  },
  {
    path: "/customer/:id/cash-flow",
    name: "Cash Flow",
    icon: "ni ni-calendar-grid-58 text-red",
    component: CashFlow,
    layout: "/admin",
  },
  {
    path: "/customer/:id/budget",
    name: "Budget",
    icon: "ni ni-calendar-grid-58 text-red",
    component: Budget,
    layout: "/admin",
  },
  {
    path: "/customer/:id",
    component: KYC,
    layout: "/admin",
  },
];

export default routes;
