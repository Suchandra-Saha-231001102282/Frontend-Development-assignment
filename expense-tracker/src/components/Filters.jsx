function Filters({
  search,
  setSearch,
  typeFilter,
  setTypeFilter,
  categoryFilter,
  setCategoryFilter,
}) {
  return (
    <section className="filters-section">
      <h2>Search & Filter</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          value={typeFilter}
          onChange={(event) => setTypeFilter(event.target.value)}
        >
          <option value="all">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <select
          value={categoryFilter}
          onChange={(event) => setCategoryFilter(event.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Education">Education</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Salary">Salary</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </section>
  );
}

export default Filters;