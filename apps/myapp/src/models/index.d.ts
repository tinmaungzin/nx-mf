import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BudgetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NetWorthMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CoverageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CashFlowMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DependentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CustomerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AgentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Budget {
  readonly id: string;
  readonly lumpSumBudget?: number;
  readonly annualBudget?: number;
  readonly customerID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Budget, BudgetMetaData>);
  static copyOf(source: Budget, mutator: (draft: MutableModel<Budget, BudgetMetaData>) => MutableModel<Budget, BudgetMetaData> | void): Budget;
}

export declare class NetWorth {
  readonly id: string;
  readonly totalAssets?: number;
  readonly cashEquivalents?: number;
  readonly residentialProperty?: number;
  readonly allowance?: number;
  readonly equities?: number;
  readonly bonds?: number;
  readonly unitTrusts?: number;
  readonly personalUseAssets?: number;
  readonly ordinaryAccount?: number;
  readonly specialAccount?: number;
  readonly mediSaveAccount?: number;
  readonly totalLiabilities?: number;
  readonly mortgageLoan?: number;
  readonly carLoan?: number;
  readonly lumpSum?: number;
  readonly customerID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<NetWorth, NetWorthMetaData>);
  static copyOf(source: NetWorth, mutator: (draft: MutableModel<NetWorth, NetWorthMetaData>) => MutableModel<NetWorth, NetWorthMetaData> | void): NetWorth;
}

export declare class Coverage {
  readonly id: string;
  readonly policyType?: string;
  readonly policyPeriod?: string;
  readonly policyName?: string;
  readonly insurer?: string;
  readonly issuedYear?: string;
  readonly maturityYear?: string;
  readonly policyBenefitName?: string;
  readonly policyBenefitPrice?: number;
  readonly premiumAmount?: number;
  readonly paymentType?: string;
  readonly premiumTerm?: string;
  readonly policyFor?: string;
  readonly customerID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Coverage, CoverageMetaData>);
  static copyOf(source: Coverage, mutator: (draft: MutableModel<Coverage, CoverageMetaData>) => MutableModel<Coverage, CoverageMetaData> | void): Coverage;
}

export declare class CashFlow {
  readonly id: string;
  readonly annualInflow?: number;
  readonly annualOutflow?: number;
  readonly surPlus?: number;
  readonly grossAnnualIncome?: number;
  readonly annualCPFContribution?: number;
  readonly allowance?: number;
  readonly rental?: number;
  readonly committedExpenses?: number;
  readonly cpfPropertyLoanRepayment?: number;
  readonly carLoanRepayment?: number;
  readonly otherCommittedCarExpenses?: number;
  readonly cpfInsurancePremiums?: number;
  readonly cashInsurancePremiums?: number;
  readonly cpfInvestment?: number;
  readonly cashInvestment?: number;
  readonly incomeTax?: number;
  readonly manageableExpenses?: number;
  readonly familyExpenses?: number;
  readonly lifestyleExpenses?: number;
  readonly additionalExpenses?: number;
  readonly customerID: string;
  readonly cashPropertyLoanRepaymentfield?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CashFlow, CashFlowMetaData>);
  static copyOf(source: CashFlow, mutator: (draft: MutableModel<CashFlow, CashFlowMetaData>) => MutableModel<CashFlow, CashFlowMetaData> | void): CashFlow;
}

export declare class Dependent {
  readonly id: string;
  readonly relationship?: string;
  readonly name?: string;
  readonly gender?: string;
  readonly birthday?: string;
  readonly citizenshipRace?: string;
  readonly icNo?: string;
  readonly idType?: string;
  readonly customerID: string;
  readonly monthlyUpkeep?: string;
  readonly targetAge?: string;
  readonly yearLeft?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Dependent, DependentMetaData>);
  static copyOf(source: Dependent, mutator: (draft: MutableModel<Dependent, DependentMetaData>) => MutableModel<Dependent, DependentMetaData> | void): Dependent;
}

export declare class Customer {
  readonly id: string;
  readonly accountName?: string;
  readonly accountType?: string;
  readonly countryRace?: string;
  readonly gender?: string;
  readonly icNo?: string;
  readonly name?: string;
  readonly birthday?: string;
  readonly agentID: string;
  readonly Dependents?: (Dependent | null)[];
  readonly CashFlows?: (CashFlow | null)[];
  readonly Coverages?: (Coverage | null)[];
  readonly NetWorths?: (NetWorth | null)[];
  readonly Budgets?: (Budget | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Customer, CustomerMetaData>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer, CustomerMetaData>) => MutableModel<Customer, CustomerMetaData> | void): Customer;
}

export declare class Agent {
  readonly id: string;
  readonly agentId?: string;
  readonly name?: string;
  readonly Customers?: (Customer | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Agent, AgentMetaData>);
  static copyOf(source: Agent, mutator: (draft: MutableModel<Agent, AgentMetaData>) => MutableModel<Agent, AgentMetaData> | void): Agent;
}