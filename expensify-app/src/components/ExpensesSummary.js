import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formattedExpnesesTotal = numeral(expensesTotal / 100).format("$0,0.00");
  return (
    <div>
      <h1>
        Viewing {expenseCount} {expenseWord} totaling {formattedExpnesesTotal}
      </h1>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpneses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpneses.length,
    expensesTotal: selectExpensesTotal(visibleExpneses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
