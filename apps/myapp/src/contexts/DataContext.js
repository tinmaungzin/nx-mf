import React, { createContext, useState, useMemo } from "react";
let DataContext = createContext(null);

function Provider({ children }) {
  const initialState = {
    kyc: {
      accountType: 'Individual',
      agentID: 'f152e510-7b0f-4611-aa75-017fb67b14a0',
      birthday: '',
      countryRace: '',
      gender: '',
      icNo: '',
      name: '',
      accountName: '',
      customerID: 1
    },
    personalInfo: {},
    dependentInfo: {
      relationship: '',
      name: '',
      gender: '',
      birthday: '',
      citizenshipRace: '',
      icNo: '',
      idType: '',
      monthlyUpkeep: '',
      targetAge: '',
      yearLeft: '',
      customerID: '',
    },
    cashFlow: {
      additionalExpenses: '',
      allowance: '',
      annualCPFContribution: '',
      annualInflow: 0,
      annualOutflow: 0,
      carLoanRepayment: '',
      cashInsurancePremiums: '',
      cashInvestment: '',
      cashPropertyLoanRepayment: '',
      committedExpenses: '',
      cpfInvestment: '',
      cpfInsurancePremiums: '',
      cpfPropertyLoanRepayment: '',
      customerID: '',
      familyExpenses: '',
      grossAnnualIncome: '',
      incomeTax: '',
      lifestyleExpenses: '',
      manageableExpenses: '',
      otherCommittedCarExpenses: '',
      rental: '',
      surPlus: 0,
    },
    budget: {
      lumpSumBudget: '',
      annualBudget: '',
      customerID: ''
    },
    netWorth: {
      totalAssets: '',
      cashEquivalents: '',
      residentialProperty: '',
      allowance: '',
      investmentOrCommercialProperty: '',
      equities: '',
      bonds: '',
      unitTrusts: '',
      personalUseAssets: '',
      ordinaryAccount: '',
      specialAccount: '',
      mediSaveAccount: '',
      totalLiabilities: '',
      mortgageLoan: '',
      carLoan: '',
      lumpSum: '',
      customerID: '',
    },
    coverage: {
      policyType: '',
      policyPeriod: '',
      policyName: '',
      insurer: '',
      issuedYear: '',
      maturityYear: '',
      policyBenefitName: '',
      policyBenefitPrice: '',
      premiumAmount: '',
      paymentType: '',
      premiumTerm: '',
      policyFor: '',
      customerID: '',
    },
  };

  const [data, setData] = useState(initialState);

  const providerData = useMemo(() => ({ data, setData }), [data, setData]);
  return (
    <DataContext.Provider value={providerData}>{children}</DataContext.Provider>
  );
}

export { Provider, DataContext };
