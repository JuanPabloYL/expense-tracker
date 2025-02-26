import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";

export const BudgetTracker = () => {
  const { state } = useBudget();

  const totalExpenses = useMemo(() => {
    return state.expenses.reduce((total, expense) => expense.amount + total, 0);
  }, [state.expenses]);

  const remainingBudget = state.budget - totalExpenses;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <img src="/grafico.jpg" alt="Expenses chart" />
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <button
          type="button"
          className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg cursor-pointer"
        >
          Reset App
        </button>

        <AmountDisplay label="Budget" amount={state.budget} />
        <AmountDisplay label="Available" amount={remainingBudget} />
        <AmountDisplay label="Expenses" amount={totalExpenses} />
      </div>
    </div>
  );
};
