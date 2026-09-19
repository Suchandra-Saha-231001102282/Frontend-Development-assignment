function Summary({ transactions }) {
  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const expenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const balance = income - expenses;

  return (
    <section className="summary-section">
      <div className="summary-card">
        <h3>Total Income</h3>
        <p className="income">₹{income.toFixed(2)}</p>
      </div>

      <div className="summary-card">
        <h3>Total Expenses</h3>
        <p className="expense">₹{expenses.toFixed(2)}</p>
      </div>

      <div className="summary-card">
        <h3>Balance</h3>
        <p className={balance >= 0 ? "income" : "expense"}>
          ₹{balance.toFixed(2)}
        </p>
      </div>
    </section>
  );
}

export default Summary;