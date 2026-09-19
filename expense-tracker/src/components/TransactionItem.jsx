function TransactionItem({ transaction, onDelete }) {
  const isIncome = transaction.type === "income";

  return (
    <div className="transaction-item">
      <div className="transaction-info">
        <h3>{transaction.title}</h3>

        <p>
          {transaction.category} • {transaction.date}
        </p>
      </div>

      <div className="transaction-right">
        <span className={isIncome ? "income" : "expense"}>
          {isIncome ? "+" : "-"}₹{transaction.amount.toFixed(2)}
        </span>

        <button
          className="delete-button"
          onClick={() => onDelete(transaction.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TransactionItem;