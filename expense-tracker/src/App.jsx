import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";
import Filters from "./components/Filters";
import Charts from "./components/Charts";
import Footer from "./components/Footer";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");

    return savedTransactions
      ? JSON.parse(savedTransactions)
      : [];
  });

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions((previous) => [
      transaction,
      ...previous,
    ]);
  };

  const deleteTransaction = (id) => {
    setTransactions((previous) =>
      previous.filter((transaction) => transaction.id !== id)
    );
  };

  const exportCSV = () => {
    if (transactions.length === 0) {
      alert("No transactions available to export.");
      return;
    }

    const headers = [
      "Title",
      "Amount",
      "Type",
      "Category",
      "Date",
    ];

    const rows = transactions.map((transaction) => [
      transaction.title,
      transaction.amount,
      transaction.type,
      transaction.category,
      transaction.date,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) =>
        row
          .map((value) =>
            `"${String(value).replace(/"/g, '""')}"`
          )
          .join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "expense-tracker.csv";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        transaction.title
          .toLowerCase()
          .includes(searchText) ||
        transaction.category
          .toLowerCase()
          .includes(searchText);

      const matchesType =
        typeFilter === "all" ||
        transaction.type === typeFilter;

      const matchesCategory =
        categoryFilter === "all" ||
        transaction.category === categoryFilter;

      return (
        matchesSearch &&
        matchesType &&
        matchesCategory
      );
    });
  }, [
    transactions,
    search,
    typeFilter,
    categoryFilter,
  ]);

  return (
    <div className="app">
      <Header />

      <main className="container">
        <Summary transactions={transactions} />

        <TransactionForm
          onAddTransaction={addTransaction}
        />

        <Filters
          search={search}
          setSearch={setSearch}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />

        <div className="export-section">
          <button
            className="export-button"
            onClick={exportCSV}
          >
            Export CSV
          </button>
        </div>

        <TransactionList
          transactions={filteredTransactions}
          onDelete={deleteTransaction}
        />

        <Charts transactions={transactions} />
      </main>

      <Footer />
    </div>
  );
}

export default App;