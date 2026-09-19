import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

function Charts({ transactions }) {
  const expenseTransactions = transactions.filter(
    (transaction) => transaction.type === "expense"
  );

  const categoryTotals = {};

  expenseTransactions.forEach((transaction) => {
    if (!categoryTotals[transaction.category]) {
      categoryTotals[transaction.category] = 0;
    }

    categoryTotals[transaction.category] += transaction.amount;
  });

  const pieData = Object.entries(categoryTotals).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const expense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const barData = [
    {
      name: "Money",
      Income: income,
      Expense: expense,
    },
  ];

  const dailyExpenses = {};

  expenseTransactions.forEach((transaction) => {
    if (!dailyExpenses[transaction.date]) {
      dailyExpenses[transaction.date] = 0;
    }

    dailyExpenses[transaction.date] += transaction.amount;
  });

  const lineData = Object.entries(dailyExpenses)
    .sort(([dateA], [dateB]) => dateA.localeCompare(dateB))
    .map(([date, amount]) => ({
      date,
      expense: amount,
    }));

  return (
    <section className="charts-section">
      <h2>Financial Analysis</h2>

      <div className="charts-grid">
        <div className="chart-card">
          <h3>Expenses by Category</h3>

          {pieData.length === 0 ? (
            <p>No expense data available.</p>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} />
                  ))}
                </Pie>

                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>

        <div className="chart-card">
          <h3>Income vs Expense</h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Bar dataKey="Income" />
              <Bar dataKey="Expense" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card chart-wide">
          <h3>Daily Expense Trend</h3>

          {lineData.length === 0 ? (
            <p>No expense data available.</p>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Line
                  type="monotone"
                  dataKey="expense"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </section>
  );
}

export default Charts;