import { useState } from "react";
import CashFlowLayout from "layouts/CashFlow";
import BudgetLayout from "layouts/Budget";

export default function Budget() {
  const [page, setPage] = useState(0);

  return (
    <main className="container">
      <BudgetLayout setPage={setPage} />
    </main>
  );
}
