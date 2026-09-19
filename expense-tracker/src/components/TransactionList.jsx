import TransactionItem from "./TransactionItem";

function TransactionList({ transactions, onDelete }) {
  return (
    <section className="transactions-section">
      <div className="section-title">
        <h2>Transactions</h2>
        <span>{transactions.length} records</span>
      </div>

      {transactions.length === 0 ? (
        <p className="empty-message">
          No transactions found.
        </p>
      ) : (
        <div className="transaction-list">
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default TransactionList;