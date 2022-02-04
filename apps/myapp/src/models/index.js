// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Budget, NetWorth, Coverage, CashFlow, Dependent, Customer, Agent } = initSchema(schema);

export {
  Budget,
  NetWorth,
  Coverage,
  CashFlow,
  Dependent,
  Customer,
  Agent
};